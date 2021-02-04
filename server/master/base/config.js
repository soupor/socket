const HOST = '127.0.0.1'
const PORT = 8124
const delayTime = 1


let httpHead = [
  'HTTP/1.1 200 OK',
  'Connection: close',
  '\r\n'
]
let socketList = []


module.exports = {
  HOST,
  PORT,
  delayTime,
  httpHead,
  socketList
}