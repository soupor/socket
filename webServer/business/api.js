

exports.initSocketList = (socket, socketList) => {}  //初始化代理的socketList
exports.getAgent = (address) => {}  //找到指定代理
exports.lsHandle = (head, data) => {} 
exports.cdHandle = (head, data) => {}
exports.pwdHandle = (head, data) => {}
exports.mkdirHandle = (head, data) => {}
exports.rmdirHandle = (head, data) => {}
exports.sendFileInfoHandle = (head, data) => {}  //上传文件后发送文件信息
exports.sendFileHandle = (head, data) => {} //数据通道进行文件传输