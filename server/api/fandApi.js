var models = require('../db/db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()

router.get('/api/fand', (req, res) => {
  conn.query('SELECT * from dynamic order by id desc', function (error, results) {
    if (error) {
      throw error
    }
    res.json(results)
  })
})
module.exports = router
