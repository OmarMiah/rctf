const db = require('./db')

const ret = {
  getAllUsers: () => {
    return db.query('SELECT id AS userid, name FROM users')
      .then(res => res.rows)
  }
}

module.exports = ret
