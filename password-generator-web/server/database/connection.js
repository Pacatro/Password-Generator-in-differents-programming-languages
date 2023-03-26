const mysql = require('mysql2')
const config = require('../config/config')

const connection = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_NAME,
})

module.exports = connection