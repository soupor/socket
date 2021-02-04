let request = require('./business/request')
let {httpHead, socketList} = require('./base/config')
let api = require('./business/api')
let static = require('./business/static')

exports.requestHandler = (socket, data) => {  
 
  let url = request.requestURL(data)
  let type = request.requestTYPE(data)

  if(url == '/') {      //Handle the root 
    let res = ''  
    res = static.rootHandle(httpHead)
    socket.write(res)
    httpHead.splice(2, 1)
    socket.end()
  }  
  if(url.indexOf('/static') > -1) {    //Handle the static file
    let res = ''  
    res = static.staticHandle(type, url, httpHead)
    socket.write(res)
    httpHead.splice(2, 1)
    socket.end()
  } 
  if(url == '/favicon.ico') {    //Handle favicon.ico
    let res = ''  
    res = static.faviconHandle(httpHead)
    socket.write(res)
    httpHead.splice(2, 1)
    socket.end()
  }  


  if(url.indexOf('/api/browser/getAgentsInfo') > -1) {}    //Browser obtains the status and number of all agents
  if(url.indexOf('/api/browser/getAgent') > -1)     //Browser selects the designated agent to communicate
  if(url.indexOf('/api/browser/upload') > -1) {}     //Browser upload the file
  if(url.indexOf('/api/browser/ls') > -1) {}    // View all files in the current agent directory   
  if(url.indexOf('/api/browser/cd') > -1) {}    //Input agent directory   
  if(url.indexOf('/api/browser/pwd') > -1) {}    //Get the current agent directory    
  if(url.indexOf('/api/browser/mkdir') > -1) {}    //Create directory   
  if(url.indexOf('/api/browser/rmdir') > -1) {}    //Delete directory 
  
  if(url == '/api/agent') {}             //Agent connets to the server for agent initialization
  if(url.indexOf('/api/agent/download') > -1) {}     //Agent requests to download the file
  

}