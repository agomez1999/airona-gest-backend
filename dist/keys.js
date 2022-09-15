"use strict";

var _require = require('./config'),
    db = _require.db;

module.exports = {
  database: {
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    port: db.port
  }
};