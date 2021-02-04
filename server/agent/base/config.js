const HOST = '127.0.0.1'
const PORT = 8124

let requestHead = [
  'GET /api/agent HTTP/1.1',
  'Connection: close',
]


module.exports = {
  HOST,
  PORT,
  requestHead
}