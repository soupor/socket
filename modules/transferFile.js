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
  let dataFile = Buffer.from(JSON.stringify({   //发送文件信息
    'id': "client1",
    'fileInfo': {
      'fileSize': fileSize,
      'fileName': name
    }
  }));
  list = Buffer.concat([head, dataFile]);
  return list;
}

exports.sendFile = async (port, path, name, head) => {    //端口传输文件
  
  if(fileSize < packSize) {  //当文件大小小于一块大小，按文件自身大小直接传输
    buf = Buffer.alloc(fileSize + head.length)
    fs.readSync(fs.openSync(path, 'r'), buf, 0, buf.length, sendSize)
    port.write(buf.toString(code))
  }
  else {
    buf = Buffer.alloc(packSize)
    while(sendSize < fileSize) {   //分块传输
      fs.readSync(fs.openSync(path, 'r'), buf, 0, buf.length, sendSize)
      port.write(buf.toString(code))
      sendSize += packSize 
    }
  }
}

exports.getFile = (port, data) => {   //端口接收文件
  if(!port.fileInfo) {
    port.fileInfo = JSON.parse(data).fileInfo
    port.hasSend = 0
    port.hasWrite = 0
    port.buf = ''
    port.fd = fs.openSync(port.fileInfo.fileName, 'w+')  
    console.log('set file info')
    return port
  }
  else {
    if(port.fileInfo.fileSize < packSize) {
      port.buf += data
      buf = Buffer.from(port.buf, code)
      fs.appendFileSync(port.fd, buf)
    }
    else {
      port.buf += data
      port.hasSend += data.length
      while(port.buf.length >= packSize * 2) {
        buf = port.buf.slice(0, packSize * 2)
        port.buf = port.buf.slice(packSize * 2)
        buf = Buffer.from(buf, code)
        fs.appendFileSync(port.fd, buf)

        if(port.hasSend >= port.fileInfo.fileSize * 2) {
          buf = Buffer.from(port.buf, code)
          fs.appendFileSync(port.fd, buf)
          fs.closeSync(port.fd)
          console.log('file transfer completed')
          port.fileInfo = null
          return port
        }
      }
    }
    
    return port
  }
}

