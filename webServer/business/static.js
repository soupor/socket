const fs = require('fs');

exports.htmlHandle = (head) => {
  head.splice(2, 0, 'Content-Type: text/html')
  let dataFile = Buffer.from(fs.readFileSync('../browser/src/index.html'))
  let response = head.join('\r\n')
  let buffHead = Buffer.from(response)
  let list = Buffer.concat([buffHead, dataFile])
  return list
}
exports.staticHandle = (type, url, head) => {
  if (type == 'js') {
    head.splice(2, 0, 'Content-Type: application/javascript')
    let dataFile = Buffer.from(fs.readFileSync('../browser/src' + url))
    let response = head.join('\r\n')
    let buffHead = Buffer.from(response)
    let list = Buffer.concat([buffHead, dataFile])
    return list
  }
  else if (type == 'css') {
    head.splice(2, 0, 'Content-Type: text/css')
    let dataFile = Buffer.from(fs.readFileSync('../browser/src' + url))
    let response = head.join('\r\n')
    let buffHead = Buffer.from(response)
    let list = Buffer.concat([buffHead, dataFile])
    return list
  }
  else if (type == 'png') {
    head.splice(2, 0, 'Content-Type: image/png')
    let dataFile = Buffer.from(fs.readFileSync('../browser/src' + url))
    let response = head.join('\r\n')
    let buffHead = Buffer.from(response)
    let list = Buffer.concat([buffHead, dataFile])
    return list
  }
  else if (type == 'jpg') {
    head.splice(2, 0, 'Content-Type: image/jpg')
    let dataFile = Buffer.from(fs.readFileSync('../browser/src' + url))
    let response = head.join('\r\n')
    let buffHead = Buffer.from(response)
    let list = Buffer.concat([buffHead, dataFile])
    return list
  }
}
exports.faviconHandle = (head) => {
  head.splice(2, 0, 'Content-Type: image/x-icon')
  let response = head.join('\r\n')
  let buffHead = Buffer.from(response)
  return buffHead
}