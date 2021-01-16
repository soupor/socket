const net = require('net');
const fs = require('fs');


// const transf = require('./module/transferFile')

const HOST = '127.0.0.1';
const PORT = 8124;


let httpHead = [
  'HTTP/1.1 200 OK',
  'Connection: close',
  '\r\n'
];
let response = httpHead.join('\r\n');
let buffHead = Buffer.from(response);


let server = net.createServer(function(socket){ 
  console.log('Client connected: ' + socket.remoteAddress + ':' + socket.remotePort);

  socket.on('data', function(data) {
    let url = data.toString().split('\r\n')[0].split(' ')[1];
    let urlType = data.toString().split('Sec-Fetch-Dest')[1].split(' ')[1].split('\r\n')[0];
    let dataFile = '';
    let list = '';
    if(url == '/') {
      dataFile = Buffer.from(fs.readFileSync('index.html'));
      list = Buffer.concat([buffHead, dataFile])
      socket.write(list);
    }
    else if (url !== '/favicon.ico' && urlType === 'image') {
      dataFile = Buffer.from(fs.readFileSync('.' + url));
      list = Buffer.concat([buffHead, dataFile])
      socket.write(list);
    }
    else if (url !== '/favicon.ico' ) {
      dataFile = Buffer.from(fs.readFileSync('.' + url));
      list = Buffer.concat([buffHead, dataFile])
      socket.write(list);
    }
    else {
      socket.write(buffHead);
    }
    socket.end();
    
  });
  socket.on('end', function() {
    console.log('Scoket end');
  });
});
server.listen(PORT, HOST, function() {
  console.log('server bound');
});