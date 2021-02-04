exports.responseHead = (data) => {
  let resHead = ''
  if(data.toString().split('\r\n\r\n')[0]) {
    resHead = data.toString().split('\r\n\r\n')[0]
  }
  
  return resHead
}

exports.responseData = (data) => {
  let resData = data.toString()
  if (data.toString().split('\r\n\r\n')[1]) {
    resData = data.toString().split('\r\n\r\n')[1]
  }
  return resData
}