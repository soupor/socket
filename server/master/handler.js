let request = require('./business/request')
let {httpHead, socketList} = require('./base/config')
let api = require('./business/api')

function requestHandler(url, socket) {  
 
  //Agent connets to the server for agent initialization
  api.initSocketList(socketList, socket)

  //Browser obtains the status and number of all agents
  api.getAgentsInfo(httphead, socketList)

  //Browser selects the designated agent to communicate
  api.getAgent(httphead, url, socketList)

  //Browser upload the file
  api.sendFileInfo(httphead, url)

  //Browser upload the file
  api.sendFileInfo(httphead, url)

  //Agent requests to download the file
  api.sendFile(httpHead, url)

  // View all files in the current agent directory   
  api.lsHandle(httpHead, url)

  //Input agent directory
  api.cdHandle(httpHead, url)

  //Get the current agent directory    
  api.pwdHandle(httpHead, url)

  //Create directory  
  api.mkdirHandle(httpHead, url)
 
  //Delete directory
  api.rmdirHandle(httpHead, url)
  
}

module.exports = {
  requestHandler
}