
exports.requestURL = (data) => { //返回请求url
  let url = ''
  if(data.toString().split('\r\n')[0].split(' ')[1]) {
    url = data.toString().split('\r\n')[0].split(' ')[1]
  }
  return url
}  


exports.requestTYPE = (data) => {  //返回请求文件种类
  let url = this.requestURL(data)
  let type = ''
  if (url.indexOf('.js') > -1) {
    type = 'js'
  }
  else if (url.indexOf('.css') > -1) {
    type = 'css'
  }
  else if (url.indexOf('.png') > -1) {
    type = 'png'
  }
  else if (url.indexOf('.jpg') > -1) {
    type = 'jpg'
  }
  return type
}

