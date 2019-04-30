var models = require('../db/db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()

router.get('/api/findaynamic', (req, res) => {
  var fromid = req.query.from_uid
  // console.log(fromid)
  conn.query('SELECT * from find where from_uid = ? order by id desc', fromid, function (error, results, fields) {
    if (error) {
      throw error
    }
    res.json(results)
  })
})

module.exports = router
