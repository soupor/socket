let {HOST, PORT} = require('./base/config')
let { server } = require('./base/communication')
let handler = require('./handler')


server.listen(PORT, HOST, () => {
  console.log('server bound');
})