
const fs = require('fs')

const packSize = 1024    //每块发送大小，即缓存区大小
const code = 'hex'      //传输编码类型

let buf           //buffer缓存区


exports.getFile = (client, data) => {   //端口接收文件
  if(!client.fileInfo) {
    client.fileInfo = JSON.parse(data).fileInfo
    client.hasSend = 0
    client.hasWrite = 0
    client.buf = ''
    client.fd = fs.openSync(client.fileInfo.fileName, 'w+')  
    console.log('set file info')
    return client
  }
  else {
    if(client.fileInfo.fileSize < packSize) {
      client.buf += data
      buf = Buffer.from(client.buf, code)
      fs.appendFileSync(client.fd, buf)
    }
    else {
      client.buf += data
      client.hasSend += data.length
      while(client.buf.length >= packSize * 2) {
        buf = client.buf.slice(0, packSize * 2)
        client.buf = client.buf.slice(packSize * 2)
        buf = Buffer.from(buf, code)
        fs.appendFileSync(client.fd, buf)

        if(client.hasSend >= client.fileInfo.fileSize * 2) {
          buf = Buffer.from(client.buf, code)
          fs.appendFileSync(client.fd, buf)
          fs.closeSync(client.fd)
          console.log('file transfer completed')
          client.fileInfo = null
          return client
        }
      }
    }
    return client
  }
}