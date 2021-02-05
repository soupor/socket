let controlChannel = require('./business/controlChannel')
let dataChannel = require('./business/dataChannel')
let response = require('./business/response')



function reponseHandle(data) {   //服务器消息处理
  let resData = response.responseData(data)

  //Get new file information and prepare to download
  dataChannel.downLoadFile(resData)

  //View all files in the current agent directory
  controlChannel.lsHandle(resData)

  //Input agent directory 
  controlChannel.cdHandle(resData)

  //Get the current agent directory
  controlChannel.pwdHandle(resData)

  //Create directory
  controlChannel.mkdirHandle(resData)

  //Delete directory
  controlChannel.rmdirHandle(resData)


}

module.exports = {
  reponseHandle
}