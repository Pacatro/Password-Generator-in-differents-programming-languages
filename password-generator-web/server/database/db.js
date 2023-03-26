const mysql = require('mysql2/promise')
const config = require('../config/config')

const pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_NAME,
})

console.log(config.DB_USER)

module.exports = pool