const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const favicon = require('serve-favicon')
const path = require('path')

// constant
const PORT = process.env.PORT || 4000

// value
const app = express()

// middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname))
// app.use(express.static(path.join(__dirname, 'build')))
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')))

// route
app.use('/api/users', require('./api/users'))
app.use('/api/lookbooks', require('./api/lookbooks'))

// server
app.listen(PORT, () => console.log(`server started: listening on port : ${PORT}`))
