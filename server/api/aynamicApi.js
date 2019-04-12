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
  console.log(b.tel)
  var sql = 'INSERT INTO stus (`username`,`tel`, `password`, `stuviews`) values (?,?,?,?)'
  var views = b.studentview.join('')
  var data = [b.name, b.tel, b.password, views]
  conn.query(sql, data, function (err, results) {
    if (err) {
      console.log(err)
    } else {
      console.log('ok')
      res.json({title: '注册成功', num: 1})
    }
  })
})

module.exports = router
