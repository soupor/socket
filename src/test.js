const fs = require('fs');

let httpHead = [
  'HTTP/1.1 200 OK',
  'Connection: close',
  '\r\n'
];
let response = httpHead.join('\r\n');
console.log(response)
let buf = Buffer.from(response)
console.log(buf)

let dataFile = Buffer.from(fs.readFileSync('./icon/pc.jpg'));
let list = Buffer.concat([buf,dataFile])
console.log(list)