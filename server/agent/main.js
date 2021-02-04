const comm = require('./base/communication')
const {HOST, PORT , requestHead} = require('./base/config')
let handler = require('./handler')


comm.agentConnect(HOST, PORT, requestHead, handler.reponseHandle)