
/**
 * Brower gets all of agents information from server
 * @return {Object} agentsInfoJSON
 * 
    {
      code: 200,
      message: null
      data: {
        "agentsInfo":[{
          "address": "111.222.333.441",
          "status": "Online"
        },
        {
          "address": "111.222.333.442",
          "status": "Online"
        },
        {
          "address": "111.222.333.443",
          "status": "Online"
        },
        {
          "address": "111.222.333.444",
          "status": "Online"
        }]
      }  
    }
 * 
 */
exports.getAgentsInfo = () => {
  
  return agentsInfoJSON
} 

/**
 * Browser uploads the file to the server in the default directory of the server
 * @param {*} agentAddr
 * @param {the storage path of file in the agent} storagePath 
 * @param {*} fileName
 * @param {*} fileSize
 * @param {*} fileTyped
 * @param {*} fileData
 * @return {Object} resultJSON
   {
     code: 101
     message: "StoragePath error.can not find the agent IP"
   }
 */
exports.upload = (agentAddr, storagePath, fileName, fileSize, fileType, fileData) => {
  
  return resultJSON
}






