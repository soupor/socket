let app = new Vue({
  el: '#app',
  data: {
    ctx: {},
    imgArr: [],   //节点图片信息数组
    contentArr: [],  //节点页面信息数组
    fstNodePos: {    //初始节点位置
      x : 200,
      y : 400
    },
    nodeSize: {    //节点图片大小
      width: 80,
      height: 80
    },
    serverPos: {   //节点服务器位置
      x: 430,
      y: 80
    },
    serverSize: {   //节点服务器大小
      width: 100,
      height: 120
    },
    serverIP: '45.32.57.46',   //服务器IP地址
    ipAdds: '111,222,333,444',   //响应式节点ip
    nodeUrl: './icon/pc.jpg',    //节点图片url
    serverUrl: './icon/server.png',  //服务器url
    isReload: false      //是否刷新页面
  },
  methods: {
    initHTML() {
      if(sessionStorage.imgArr) {
        let ary = JSON.parse(sessionStorage.imgArr);
        for(let i in ary) {
          if (i == 0) {
            this.initNode(ary[i].startPos, ary[i].size, this.serverUrl)
            console.log('a+'+ i)
          }
          else {
            this.initNode(ary[i].startPos, ary[i].size, this.nodeUrl)
            console.log('b+'+ i)
          }
        }
      }
      else {
        this.initNode(this.serverPos, this.serverSize, this.serverUrl);
      }
      const canvas = document.getElementById('myCanvas');
      this.ctx = canvas.getContext('2d');
    },
    initNode(pos, size, url) {
      let node = new Image();
      node.src = url;
      node.startPos = pos;
      node.size = size;
      this.imgArr.push(node);
    },
    handleAddNode() {
      let addPos = {};
      this.isReload = true;
      if(this.imgArr.length == 1) {
        addPos.x = this.fstNodePos.x;
        addPos.y = this.fstNodePos.y;
      }
      else {
        addPos.x = this.imgArr[this.imgArr.length - 1].startPos.x + 50;
        addPos.y = this.imgArr[this.imgArr.length - 1].startPos.y;
      }
      this.initNode(addPos, this.nodeSize, this.nodeUrl);
    },
    handleDelNode() {
      if (this.imgArr.length > 1) {
        this.isReload = true;
        this.imgArr.pop()
      }
    }
  },
  mounted() {
    this.initHTML();
    window.onload = () => {
      for(let i in this.imgArr) {
        if (i !== 0) {
          drawLine(this.imgArr[0], this.imgArr[i], this.ctx)
        }
      }
      for(let i in this.imgArr) {
        console.log(this.imgArr[i].startPos)
        this.ctx.drawImage(this.imgArr[i], this.imgArr[i].startPos.x , this.imgArr[i].startPos.y, this.imgArr[i].size.width, this.imgArr[i].size.height);
      }
    }
  },
  watch: {
    imgArr() {
      sessionStorage.imgArr = JSON.stringify(this.imgArr);
      if (this.isReload) {
        location.reload();
        this.isReload = false;
      }
      
    }
  }
})




