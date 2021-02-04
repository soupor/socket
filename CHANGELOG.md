# 2021-2-4   realize the communication 
---
 realize the communication between the agent and server 

Modify file
  /server/agent/handler.js
  /server/agent/main.js
  /server/agent/base/communication.js
  /server/master/main.js
  /server/master/handler.js
  /server/master/base/communication.js

# 2021-2-4   declare api
---
 Declare all of the api for the server and the agent. 

Modify file
  /server/agent/handler.js
  /server/agent/business/controlChannel.js
  /server/agent/business/dataChannel.js
  /server/master/handler.js
  /server/master/business/api.js
  /server/master/business/static.js

# 2021-2-3   modularized server and realized static
---
The communication of server has been modularized and the function for loading static page has been realized

Add file
  webServer/main.js
  webServer/handler.js
  webServer/base/communication.js 
  webServer/base/config.js
  webServer/business/api.js
  webServer/business/dataChannel.js
  webServer/business/request.js
  webServer/business/static.js
  agent/business/response.js

Transfer the static file for browser to the ./browser/static


# 2021-2-2   modularized agent
---

Add file
  main.js
  agent/base/communication.js 
  agent/base/variable.js
  agent/business/controlChannel.js
  agent/business/dataChannel.js
  agent/business/file.js
  agent/business/handler.js



# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.0.3](https://github.com/soupor/socket/compare/v1.0.2...v1.0.3) (2021-01-07)

### [1.0.2](https://github.com/soupor/socket/compare/v1.0.1...v1.0.2) (2021-01-07)

### 1.0.1 (2021-01-07)
