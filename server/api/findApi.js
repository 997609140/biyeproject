var models = require('../db/db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()

router.post('/', (req, res) => {
  var b = req.body
  console.log(b)
  var sql = 'INSERT INTO find (`from_uid`,`content`,`topic_id`,`topic_type`,`time`) values (?,?,?,?,?)'
  var data = [b.from_uid, b.content, b.topic_id, b.topic_type, b.time]
  conn.query(sql, data, function (err, results) {
    if (err) {
      console.log(err)
    } else {
      console.log('ok')
      res.json({title: '发布成功'})
    }
  })
})
module.exports = router
