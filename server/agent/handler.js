let controlChannel = require('./business/controlChannel')
let dataChannel = require('./business/dataChannel')
let response = require('./business/response')

function reponseHandle(socket, data) {   //服务器消息路由
  let resData = response.responseData(data)
  console.log(resData)

  if (resData.indexOf('cmd_newFile') > -1) {}  //Get new file information and prepare to download
  if (resData.indexOf('cmd_ls') > -1) {}  //View all files in the current agent directory
  if (resData.indexOf('cmd_cd') > -1) {}  //Input agent directory 
  if (resData.indexOf('cmd_pwd') > -1) {}  //Get the current agent directory
  if (resData.indexOf('cmd_mkdir') > -1) {}  //Create directory
  if (resData.indexOf('cmd_rmdir') > -1) {}  ///Delete directory
  
}

module.exports = {
  reponseHandle
}