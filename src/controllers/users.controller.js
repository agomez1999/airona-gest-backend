const pool = require('../db');

const getAllUsers = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result);
    } catch (error) {
        next(error)
    }
}

const getUsers = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = ?', [
            req.params.id
        ]);
        res.json(result);
    } catch (error) {
        next(error)
    }
}

const newUser = async (req, res, next) => {
    try {
        const result = await pool.query('INSERT INTO users(username, password, fullname) VALUES (?, ?, ?)', [
            req.body.username,
            req.body.password,
            req.body.fullname
        ]);
        res.json({
            id: result.insertId,
            ...req.body
        });
    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const result = await pool.query('DELETE FROM users WHERE id = ?', [
            req.params.id
        ]);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try {
        await pool.query('UPDATE users SET ? WHERE id = ?', [
            req.body,
            req.params.id
        ])
        res.sendStatus(204);
    } catch (error) {
        next(error)
    }
}

const searchUser = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE fullname LIKE ?', [
            req.body.fullname
        ]);
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [
            req.body.username,
            req.body.password
        ]);
        res.json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllUsers,
    getUsers,
    newUser,
    deleteUser,
    updateUser,
    searchUser,
    loginUser
}