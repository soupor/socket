const comm = require('./base/communication')
const {HOST, PORT , requestHead} = require('./base/config')


comm.clientSend(PORT, HOST, requestHead)