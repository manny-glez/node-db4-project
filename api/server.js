// imports express
const express = require('express')

const recipesRouter = require('./recipes-router.js')

// instantiation of the express server/application
const server = express()

// enables parsing of json bodies
server.use(express.json())

server.use('/api/recipes', recipesRouter)

server.use('/', (req, res) => {
  res.status(200).json('hello from server.js')
})

module.exports = server