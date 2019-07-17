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

model.createUser = (user, callback) => {
  const value = [user.fullname, user.email, 1, new Date(), new Date()]

  pool.query(`INSERT INTO users_tab (fullname, email, status, created, updated) VALUES($1, $2, $3, $4, $5) RETURNING *`, value, (err, result) => {
    
    const data = result.rows[0]
    
    callback(err, data)
  })
}

model.getUsers = (callback) => {
  pool.query('SELECT * FROM users_tab WHERE status = 1', (err, result) => {

    const data = result.rows

    callback(err, data)
  })
}

model.getUser = (id, callback) => {
  pool.query('SELECT * FROM users_tab WHERE status = 1 AND userid = $1', [id], (err, result) => {

    const data = result.rows[0]

    callback(err, data)
  })
}

model.editUser = (id, user, callback) => {
  const value = [user.fullname, user.email, new Date(), id]

  pool.query('UPDATE users_tab SET fullname = $1, email = $2, updated = $3 WHERE userid = $4 RETURNING *', value, (err, result) => {
    
    const data = result.rows[0]

    callback(err, data)
  })
}

model.deleteUser = (id, callback) => {
  const value = [0, new Date(), id]

  pool.query('UPDATE users_tab SET status = $1, deleted = $2 WHERE userid = $3 RETURNING *', value, (err, result) => {
    
    const data = result.rows[0]

    callback(err, data)
  })
}

module.exports = model