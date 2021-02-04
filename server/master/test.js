let {HOST, PORT} = require('./base/config')
let {serverConnect} = require('./base/communication')
let handler = require('./handler')
const net = require('net')


let server = serverConnect(handler)
server.listen(PORT, HOST, () => {
  console.log('server bound');
})