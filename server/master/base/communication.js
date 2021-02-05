const net = require('net')
const { resolve } = require('path')




/**
 * The base
 * @param {*} handler 
 * @param {*} delayTime 
 */
function serverConnect(handler, delayTime) {
  let server = net.createServer((socket) => {
    console.log('Client connected: ' + socket.remoteAddress + ':' + socket.remotePort);
  
    socket.on('data', (data) => {
      handler(socket, data)
      socket.setTimeout(60000 * delayTime, () => {
        console.log(`客户端在${delayTime}分钟内未通信，将断开...`)
        socket.end()
      })
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