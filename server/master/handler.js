
/**
 * Brower gets all of agents information from server
 * @return {string} agentsInfo
 */
exports.getAgentsInfo = () => {
  let agentsInfo = JSON.stringify([
    {
      address: '',
      status: 'Online'
    }
  ])
  return agentsInfo
} 

/**
 * Browser uploads the file to the server in the default directory of the server
 * @param {*} agentAddr
 * @param {the storage path of file in the agent} storagePath 
 * @param {*} fileName
 * @param {*} fileSize
 * @param {*} fileTyped
 * @param {*} fileData
 * @return {string} result 'success/reason for failure'
 */
exports.upload = (agentAddr, storagePath, fileName, fileSize, fileType, fileData) => {
  return result
}






