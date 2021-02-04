const fs = require('fs')

const packSize = 1024    //每块发送大小，即缓存区大小
const code = 'hex'      //传输编码类型


let sendSize = 0    //已经发送大小
let fileInfo     //文件信息
let fileSize = 0   //文件大小
let buf           //buffer缓存区

let list           //http报文
let dataFile        //http内容

exports.sendFileInfo = (path, name, head) => {    //发送文件信息
  fileInfo = fs.statSync(path); 
  fileSize = fileInfo.size; 
  dataFile = Buffer.from(JSON.stringify({   //发送文件信息
    'id': "client1",
    'fileInfo': {
      'fileSize': fileSize,
      'fileName': name
    }
  }));
  list = Buffer.concat([head, dataFile]);
  return list;
}

exports.sendFile = async (socket, path, head) => {    //端口传输文件
  
  if(fileSize < packSize) {  //当文件大小小于一块大小，按文件自身大小直接传输
    buf = Buffer.alloc(fileSize + head.length)
    fs.readSync(fs.openSync(path, 'r'), buf, 0, buf.length, sendSize)
    socket.write(buf.toString(code))
  }
  else {
    buf = Buffer.alloc(packSize)
    while(sendSize < fileSize) {   //分块传输
      fs.readSync(fs.openSync(path, 'r'), buf, 0, buf.length, sendSize)
      socket.write(buf.toString(code))
      sendSize += packSize 
    }
  }
}
