const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')

const mongoURL = require('./config/mongoDB').url
const routes = require('./routes')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectedUsers = {}

io.on('connection', (socket) => {
	const { user } = socket.handshake.query

	connectedUsers[user] = socket.id
})

mongoose.connect(mongoURL, { useNewUrlParser: true, useFindAndModify: false })
mongoose.set('useCreateIndex', true)

app.use((req, res, next) => {
	req.io = io
	req.connectedUsers = connectedUsers

	return next()
})

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))
app.use(routes)

server.listen(3333)
