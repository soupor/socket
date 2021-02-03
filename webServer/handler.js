let request = require('./business/request')
let {httpHead, socketList} = require('./base/config')
let api = require('./business/api')
let static = require('./business/static')

exports.requestHandler = (socket, data) => {  //根目录html
 
  let url = request.requestURL(data)
  let type = request.requestTYPE(data)
  if(url == '/') {
    let res = ''  
    res = static.htmlHandle(httpHead)
    socket.write(res)
    httpHead.splice(2, 1)
    socket.end()
  }  
  if(url.indexOf('/static') > -1) {    //处理静态文件
    let res = ''  
    res = static.staticHandle(type, url, httpHead)
    socket.write(res)
    httpHead.splice(2, 1)
    socket.end()
  } 
  if(url == '/favicon.ico') {    
    let res = ''  
    res = static.faviconHandle(httpHead)
    socket.write(res)
    httpHead.splice(2, 1)
    socket.end()
  }  
  if(url == '/api/browser?type=ls') {} //处理客户端浏览器消息
  if(url == '/api/browser?type=cd') {}
  if(url == '/api/browser?type=pwd') {}
  if(url == '/api/browser?type=mkdir') {}
  if(url == '/api/browser?type=rmdir') {}
  if(url == '/api/browser?type=upload') {} //客户端上传文件
  if(url == '/api/agent') {}  //代理连接服务器
  if(url == '/api/agent?type=download') {} //代理请求下载文件
}