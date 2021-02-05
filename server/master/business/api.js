
/**
 * init socketList 
 * @param {*} socketList 
 * @param {*} socket 
 */
exports.initSocketList = (socketList, socket) => {
  let socketJSON = {}
  socketJSON[`${socket.remoteAddress}:${socket.remoteAddress}`] = socket
  socketList.push(socketJSON)
  return socketList
} 

/**
 * return agents information
 * @param {*} httphead 
 * @param {*} socketList 
 */
exports.getAgentsInfo = (httphead, socketList, status) => {
  let agentsInfo = []
  let resHead = JSON.parse(JSON.stringify(httpHead))
  resHead.splice(2, 0, 'Content-Type: text/plain')
  socketList.forEach( item => {
    let agentInfo = {
      agentAddr: '',
      agentstatus: '在线',
    }
    Object.keys(item).forEach( key => {
      agentInfo.agentAddr = key
      agentsInfo.push(agentInfo)
    })
  })
  let buffData = Buffer.from(JSON.stringify(agentsInfo))
  let response = resHead.join('\r\n')
  let buffHead = Buffer.from(response)
  let list = Buffer.concat([buffHead, buffData])
  return list
} 

/**
 * selects the designated agent to communicate
 * @param {*} url 
 * @param {*} socketList 
 */
exports.getAgent = (url, socketList) => {}  

/**
 * send the file information after uploading the file
 * @param {*} head
 * @param {*} url 
 */
exports.sendFileInfo = (head, url) => {}  

/**
 * send file by data channel
 * @param {*} head 
 * @param {*} data 
 */
exports.sendFile = (head, data) => {} 

/**
 * View all files in the current agent directory 
 * @param {*} head 
 * @param {*} data 
 */
exports.lsHandle = (head, data) => {} 

/**
 * Input agent directory  
 * @param {*} head 
 * @param {*} data 
 */
exports.cdHandle = (head, data) => {}

/**
 * Get the current agent directory  
 * @param {*} head 
 * @param {*} data 
 */
exports.pwdHandle = (head, data) => {}

/**
 * Create directory 
 * @param {*} head 
 * @param {*} data 
 */
exports.mkdirHandle = (head, data) => {}

/**
 * Delete directory 
 * @param {*} head 
 * @param {*} data 
 */
exports.rmdirHandle = (head, data) => {}

