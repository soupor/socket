
/**
 * init socketList
 * @param {*} socket 
 * @param {*} socketList 
 */
exports.initSocketList = (socket, socketList) => {} 

/**
 * return agents information
 * @param {*} socket 
 * @param {*} socketList 
 */
exports.agentsInfo = (socket, socketList) => {} 

/**
 * selects the designated agent to communicate
 * @param {*} address 
 */
exports.getAgent = (address) => {}  

/**
 * send the file information after uploading the file
 * @param {*} head
 * @param {*} data 
 */
exports.sendFileInfo = (head, data) => {}  

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

