var models = require('../db/db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()

router.get('/api/secondhandlist', (req, res) => {
  var num = req.query.key
  console.log(num)
  conn.query('SELECT * from secondhand where num = ?', num, function (error, results, fields) {
    if (error) {
      throw error
    }
    // console.log(results)
    res.json(results)
  })
})
module.exports = router
