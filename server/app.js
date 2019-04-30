// node 后端服务器
// const fs = require('fs')
// const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
// var db = require('./db/db')

// 启动服务
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })) // 解析post请求数据

// 登陆api路由
app.use('/api/login', require('./api/userApi'))
// 注册api路由
app.use('/api/register', require('./api/regsterApi'))
// 首页加载资源
app.get('/api/list', require('./api/homepageApi'))
app.get('/api/list1', require('./api/homepage1Api'))
app.get('/api/list2', require('./api/homelist2Api'))

app.get('/api/fand', require('./api/fandApi'))

app.use('/api/aynamic', require('./api/aynamicApi'))
app.use('/api/find', require('./api/findApi'))
app.use('/api/findcomment', require('./api/findCommentApi'))
app.get('/api/findaynamic', require('./api/findaynamicApi'))
app.get('/api/findviews', require('./api/findViewsApi'))

app.use('/api/addviews', require('./api/addviewsApi'))
app.get('/api/getlostviews', require('./api/getlostviewsApi'))

app.get('/api/secondhandlist', require('./api/secondhandlist'))
// 监听端口
app.listen(8080)
console.log('success listen at port:3000......')
