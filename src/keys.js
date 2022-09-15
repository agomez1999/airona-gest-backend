const { db } = require('./config');

module.exports = {
    database: {
        host: db.host,
        user: db.user,
        password: db.password,
        database: db.database,
        port: db.port
    }
}