const net = require('net')
const { resolve } = require('path')





function serverConnect(handler) {
  let server = net.createServer((socket) => {
    console.log('Client connected: ' + socket.remoteAddress + ':' + socket.remotePort);
  
    socket.on('data', (data) => {
      handler(socket, data)
    })
    socket.on('end', function() {
      console.log('Scoket end');
    })
  })
  return server
}

module.exports = {
  serverConnect
}