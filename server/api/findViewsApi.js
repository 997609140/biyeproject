var models = require('../db/db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()

router.get('/api/findviews', (req, res) => {
  var toid = req.query.toid
  // console.log(fromid)
  conn.query('SELECT * from find_comment where to_uid = ? order by id desc', toid, function (error, results, fields) {
    if (error) {
      throw error
    }
    res.json(results)
  })
})

module.exports = router
