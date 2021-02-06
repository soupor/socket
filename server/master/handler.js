
/**
 * Brower gets all of agents information from server
 */
exports.getAgentsInfo = () => {} 

/**
 * Browser selects the designated agent to communicate
 * @param {*} agentAddr 
 */
exports.getAgent = (agentAddr) => {}  

/**
 * Browser uploads the file to the server in the default directory of the server
 * @param {*} agentAddr
 * @param {*} File 
 * @param {the storage path of file in the agent} storagePath 
 */
exports.upload = (agentAddr, File, storagePath) => {}

/**
 * View all files in the current agent directory  
 * @param {*} agentAddr
 */
exports.ls = (agentAddr) => {} 

/**
 * Input agent directory  
 * @param {*} agentAddr
 * @param {*} path 
 */
exports.cd = (agentAddr, path) => {}

/**
 * Get the current agent directory  
 * @param {*} agentAddr
 */
exports.pwd = (agentAddr) => {}

/**
 * Create directory in current directory
 * @param {*} agentAddr 
 * @param {*} path 
 */
exports.mkdirHandle = (agentAddr, path) => {}

/**
 * Delete directory in current directory
 * @param {*} agentAddr 
 * @param {*} path 
 */
exports.rmdirHandle = (agentAddr, path) => {}

/**
 * Agent connets to the server  
 */
exports.agent = () => {} 

/**
 * Agent sends the file information to download the file
 * @param {*} fileName  
 */
exports.downLoad = (fileName) => {} 




