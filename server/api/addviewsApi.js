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
  var sql = 'INSERT INTO Lostfound (`Lostname`,`foundname`,`Lostviews`,`tel`,`username`,`time`) values (?,?,?,?,?,?)'
  var data = [b.Lostname, b.foundname, b.Lostviews, b.tel, b.username, b.time]
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
