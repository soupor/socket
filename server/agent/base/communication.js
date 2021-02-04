const { Socket } = require('dgram');
const net = require('net');

/**
 * 
 * @param {*} host 
 * @param {*} port 
 * @param {*} head 
 * @param {*} handler 
 */
exports.agentConnect = (host, port, head, handler) => {
  let socket = new net.Socket()
  socket.connect(port, host)

  socket.on('connect', () => {
    console.log('client connected')
    head.splice(1, 0, `Host: ${host}:${port}`)
    let request = head.join('\r\n')
    let requestBuff = Buffer.from(request)
    socket.write(requestBuff)
    head.splice(1,1)
  })

  socket.on('data', (data) => {
    handler(socket, data)
  })

  socket.on('end', () => {
    console.log('client disconnected')
  })

  socket.on('close', () => {
    this.agentConnect(host, port, head, handler)
  })
}