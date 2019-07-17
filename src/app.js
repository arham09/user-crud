var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var helmet = require('helmet')
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index')

var app = express()
app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json({ limit: '2mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '2mb', parameterLimit: 1000 }))

app.use('/', indexRouter)

module.exports = app
