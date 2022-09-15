const pool = require('../db');

const getAllClients = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM clients');
        res.json(result);
    } catch (error) {
        next(error)
    }
}

const getClient = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM clients WHERE id = ?', [
            req.params.id
        ]);
        res.json(result);
    } catch (error) {
        next(error)
    }
}

const newClient = async (req, res, next) => {
    try {
        const result = await pool.query('INSERT INTO clients(name, edat, email, pes, nPersones) VALUES (?, ?, ?, ?, ?)', [
            req.body.name,
            req.body.edat,
            req.body.email,
            req.body.pes,
            req.body.nPersones,
        ]);
        res.json({
            id: result.insertId,
            ...req.body
        });
    } catch (error) {
        next(error)
    }
}

const deleteClient = async (req, res, next) => {
    try {
        const result = await pool.query('DELETE FROM clients WHERE id = ?', [
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

const updateClient = async (req, res, next) => {
    try {
        await pool.query('UPDATE clients SET ? WHERE id = ?', [
            req.body,
            req.params.id
        ])
        res.sendStatus(204);
    } catch (error) {
        next(error)
    }
}

const searchClient = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM clients WHERE name LIKE ?', [
            req.body.name
        ]);
        res.json(result)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllClients,
    getClient,
    newClient,
    deleteClient,
    updateClient,
    searchClient,
}