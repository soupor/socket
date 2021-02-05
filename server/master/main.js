let {HOST, PORT, delayTime} = require('./base/config')
let { serverConnect } = require('./base/communication')
let handler = require('./handler')

let server = serverConnect(handler.requestHandler, delayTime)

server.listen(PORT, HOST, () => {
  console.log('server bound');
})