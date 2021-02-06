
/**
 * View all files in the current agent directory   
 */
exports.lsHandle = () => {}

/**
 * Input agent directory 
 * @param {*} path 
 */
exports.cdHandle = (path) => {}

/**
 * Get the current agent directory 
 */
exports.pwdHandle = () => {}

/**
 * Create directory  
 * @param {*} path 
 */
exports.mkdirHandle = (path) => {}

/**
 * Delete directory 
 * @param {*} path 
 */
exports.rmdirHandle = (path) => {}

/**
 * Server sends the information of the new file perpared for downloading
 * @param {*} fileName 
 * @param {*} storagePath 
 */
exports.newFileInfo = (fileName, storagePath) => {}