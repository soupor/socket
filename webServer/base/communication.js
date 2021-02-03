const net = require('net')

let {delayTime} = require('./config')
let handler = require('../handler')

let server = net.createServer((socket) => {
  console.log('Client connected: ' + socket.remoteAddress + ':' + socket.remotePort);

  socket.on('data', (data) => {
    handler.requestHandler(socket, data)
  })
  socket.on('end', function() {
    console.log('Scoket end');
  })
})


module.exports = {
  server
}