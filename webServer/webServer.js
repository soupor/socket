const net = require('net');
const fs = require('fs');
const transf = require('./modules/transferFile');
const { Socket } = require('dgram');




const HOST = '127.0.0.1';
const DATAPORT = 8124;
const CONPORT = 8123;
const delayTime = 1;

const PATH = './src/icon/pc.jpg';
const NAME = 'pc.jpg';

let httpHead = [
  'HTTP/1.1 200 OK',
  'Connection: close',
  '\r\n'
];
let response = httpHead.join('\r\n');
let buffHead = Buffer.from(response);
let url = '';
let urlType = '';

let socketList = []


let conServer = net.createServer(function(socket){ 
  let socketJSON = {}
  socketJSON[`${socket.remoteAddress}:${socket.remotePort}`] = socket;

  socketList.push(socketJSON);
  
  console.log('Client connected: ' + socket.remoteAddress + ':' + socket.remotePort);

  socket.on('data', function(data) {
    console.log('requestHead\r\n' + data.toString())
    if(data.toString().split('\r\n')[0].split(' ')[1]){
      url = data.toString().split('\r\n')[0].split(' ')[1];
    }
     
    console.log('url\r\n' + url)
    if(data.toString().split('Sec-Fetch-Dest')[1]) {
      urlType = data.toString().split('Sec-Fetch-Dest')[1].split(' ')[1].split('\r\n')[0];
    }
    let dataFile = '';
    let list = '';
    if(url == '/') {
      httpHead.splice(2, 0, 'Content-Type: text/html');
      dataFile = Buffer.from(fs.readFileSync('./src/index.html'));
      response = httpHead.join('\r\n');
      buffHead = Buffer.from(response);
      list = Buffer.concat([buffHead, dataFile])
      socket.write(list);
      httpHead.splice(2, 1);
      console.log('httphead: '+ httpHead)
      socket.end();
      socketList.pop();
    }
    else if (url == '/favicon.ico'){
      response = httpHead.join('\r\n');
      buffHead = Buffer.from(response);
      socket.write(buffHead);
      socket.end();
      socketList.pop();
    }
    else if (urlType == 'image') {
      dataFile = Buffer.from(fs.readFileSync('./src' + url));
      response = httpHead.join('\r\n');
      buffHead = Buffer.from(response);
      list = Buffer.concat([buffHead, dataFile])
      socket.write(list);
      socket.end();
      socketList.pop();
    }
    else if(url == '/agent'){
      response = httpHead.join('\r\n');
      buffHead = Buffer.from(response);
      list = transf.sendFileInfo(PATH, NAME, buffHead);
      console.log('list:' + list)
      socket.write(list);
      socket.setTimeout(60000 * delayTime, () => {
        console.log(`客户端在${delayTime}分钟内未通信，将断开...`);
        socket.end();
      })
    }
    else if (urlType == 'script'){
      httpHead.splice(2, 0, 'Content-Type: application/javascript');
      dataFile = Buffer.from(fs.readFileSync('./src' + url));
      response = httpHead.join('\r\n');
      buffHead = Buffer.from(response);
      list = Buffer.concat([buffHead, dataFile])
      socket.write(list);
      httpHead.splice(2, 1);
      socket.end();
      socketList.pop();
    }
    else if (urlType == 'style'){
      httpHead.splice(2, 0, 'Content-Type: text/css');
      dataFile = Buffer.from(fs.readFileSync('./src' + url));
      response = httpHead.join('\r\n');
      buffHead = Buffer.from(response);
      list = Buffer.concat([buffHead, dataFile])
      socket.write(list);
      httpHead.splice(2, 1);
      socket.end();
      socketList.pop();
    }
    
  });
  socket.on('end', function() {
    console.log('Scoket end');
  });
});


let dataServer = net.createServer(function(socket){ 
  console.log('Client connected: ' + socket.remoteAddress + ':' + socket.remotePort);

  socket.on('data', function(data) {
    console.log('requestHead\r\n' + data.toString())
    // transf.sendFile()
  });
  socket.on('end', function() {
    console.log('Scoket end');
  });
});


dataServer.listen(DATAPORT, HOST, function() {
  console.log('dataServer bound');
});
conServer.listen(CONPORT, HOST, function() {
  console.log('conServer bound');
});

socketList[0].on('data', function(data) {
  console.log('aaa')
})
