const _mysql = require('mysql');

const _db_connect = _mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'stk_pm_db',
});

module.exports = _db_connect;