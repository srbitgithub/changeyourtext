const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(require('./routes/index'))

//app.use(bodyParser.urlencoded({ extended: false }))

module.exports = app