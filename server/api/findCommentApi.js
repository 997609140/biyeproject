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
  var sql = 'INSERT INTO find_comment (`to_uid`,`comment_id`,`from_uid`,`content`,`reply_id`,`reply_type`) values (?,?,?,?,?,?)'
  var data = [b.to_id, b.comment_id, b.from_uid, b.content, b.reply_id, b.reply_type]
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
