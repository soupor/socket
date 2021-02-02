let controlChannel = require('./controlChannel')
let dataChannel = require('./dataChannel')

exports.reponseHandle = (data) => {   //服务器消息路由
  if (data == 'cmd_ls') {}  //查看文件目录
  if (data == 'cmd_cd') {}  //选择目录
  if (data == 'cmd_pwd') {}  //获取当前目录
  if (data == 'cmd_mkdir') {}  
  if (data == 'cmd_rmdir') {}  
  if (data == 'cmd_downLoadFile') {}
}