const net = require('net');
const transf = require('../modules/transferFile');


const HOST = '127.0.0.1';
const DATAPORT = 8124;
const CONPORT = 8123;

let requestHead = [
  'GET /agent HTTP/1.1',
  'Connection: close',
  'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Accept-Encoding: gzip, deflate, br',
  'Accept-Language: zh-CN,zh;q=0.9,ja-JP;q=0.8,ja;q=0.7,en;q=0.6',
  '\r\n'
];
let request;
let buffHead;

let client;



async function conn(port) {
  return new Promise((resovle) => {
    client = net.connect(port, HOST, () => {
      resovle('client connected')
    })
  })
}

async function clientSend(port) {
  console.log(await conn(port));
  requestHead.splice(1, 0, `Host: ${HOST}:${port}`);
  request = requestHead.join('\r\n');
  buffHead = Buffer.from(request);
  client.write(buffHead);
  requestHead.splice(1, 1);
  
  client.on('data', async (data) => {
    let response = {};
    response.head = data.toString().split('\r\n\r\n')[0];
    response.data = JSON.parse(data.toString().split('\r\n\r\n')[1]);
    console.log('adownLoad: ' + response.data.fileInfo)
    if (response.data.fileInfo) {
      console.log(await conn(DATAPORT));
      requestHead.splice(1, 0, `Host: ${HOST}:${port}`);
      request = requestHead.join('\r\n');
      buffHead = Buffer.from(request);  
    }
  })
  client.on('end', () => {
    console.log('client disconnected')
  })
  client.on('close', async () => {
    await clientSend(port);
  })
}

clientSend(CONPORT);

