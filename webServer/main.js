let {HOST, PORT} = require('./base/config')
let { server } = require('./base/communication')


server.listen(PORT, HOST, () => {
  console.log('server bound');
})