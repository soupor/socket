const fs = require('fs');


/** 
 * Handle the root
 * @param {response head} head
 */
exports.rootHandle = (head) => {
  let resHead = JSON.parse(JSON.stringify(head))
  resHead.splice(2, 0, 'Content-Type: text/html')
  let dataFile = Buffer.from(fs.readFileSync('../../browser/src/index.html'))
  let response = head.join('\r\n')
  let buffHead = Buffer.from(response)
  let list = Buffer.concat([buffHead, dataFile])
  return list
}

/**
 * Handle the static file
 * @param {the type of static file} type 
 * @param {the url of static file} url 
 * @param {response head} head 
 */
exports.staticHandle = (type, url, head) => {
  if (type == 'js') {
    let resHead = JSON.parse(JSON.stringify(head))
    resHead.splice(2, 0, 'Content-Type: application/javascript')
    let dataFile = Buffer.from(fs.readFileSync('../../browser/src' + url))
    let response = resHead.join('\r\n')
    let buffHead = Buffer.from(response)
    let list = Buffer.concat([buffHead, dataFile])
    return list
  }
  else if (type == 'css') {
    let resHead = JSON.parse(JSON.stringify(head))
    resHead.splice(2, 0, 'Content-Type: text/css')
    let dataFile = Buffer.from(fs.readFileSync('../../browser/src' + url))
    let response = resHead.join('\r\n')
    let buffHead = Buffer.from(response)
    let list = Buffer.concat([buffHead, dataFile])
    return list
  }
  else if (type == 'png') {
    let resHead = JSON.parse(JSON.stringify(head))
    resHead.splice(2, 0, 'Content-Type: image/png')
    let dataFile = Buffer.from(fs.readFileSync('../../browser/src' + url))
    let response = resHead.join('\r\n')
    let buffHead = Buffer.from(response)
    let list = Buffer.concat([buffHead, dataFile])
    return list
  }
  else if (type == 'jpg') {
    let resHead = JSON.parse(JSON.stringify(head))
    resHead.splice(2, 0, 'Content-Type: image/jpg')
    let dataFile = Buffer.from(fs.readFileSync('../../browser/src' + url))
    let response = resHead.join('\r\n')
    let buffHead = Buffer.from(response)
    let list = Buffer.concat([buffHead, dataFile])
    return list
  }
}

/** 
 * Handle favicon.ico
 * @param {response head} head
 */
exports.faviconHandle = (head) => {
  let resHead = JSON.parse(JSON.stringify(head))
  resHead.splice(2, 0, 'Content-Type: image/x-icon')
  let response = resHead.join('\r\n')
  let buffHead = Buffer.from(response)
  return buffHead
}
