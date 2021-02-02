const comm = require('./base/communication')
const {HOST, PORT , requestHead} = require('./base/variable')


comm.clientSend(HOST, PORT , requestHead)