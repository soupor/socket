const HOST = '127.0.0.1';
const PORT = 8124;

let requestHead = [
  'GET /agent HTTP/1.1',
  'Connection: close',
  'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Accept-Encoding: gzip, deflate, br',
  'Accept-Language: zh-CN,zh;q=0.9,ja-JP;q=0.8,ja;q=0.7,en;q=0.6',
  '\r\n'
];


module.exports = {
  HOST: HOST,
  PORT: PORT,
  requestHead: requestHead
}