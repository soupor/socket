let {HOST, PORT} = require('./base/config')
let { serverConnect } = require('./base/communication')
let handler = require('./handler')

let server = serverConnect(handler.requestHandler)

server.listen(PORT, HOST, () => {
  console.log('server bound');
})