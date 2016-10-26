import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import morgan from 'morgan'

// start db
require('./db')
require('./db/seed')

// instantiate express server
const server = express()

// set options for server
server.set('port', process.env.PORT || 8080)
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser)
server.use(compression())

// enable http logging in console
server.use(morgan('tiny'))


server.listen(server.get('port'), () => console.log('express server running'))

export default server
