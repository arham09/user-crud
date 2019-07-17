const model = {}
const db = require('pg')
const config = require('../config/dev.config')

const pool = new db.Pool({
  user: config.DB_USER,
  database: config.DB_NAME,
  password: config.DB_PASS,
  host: config.DB_HOST,
  port: config.DB_PORT,
  max: config.DB_MAX,
  idleTimeoutMillis: config.DB_LIMIT
})

pool.connect()

model.getAsal = (callback) => {
  pool.query('SELECT $1::int AS number', ['1'], (err, result) => {

    const value = result.rows[0]

    callback(err, value)
  })
}

module.exports = model