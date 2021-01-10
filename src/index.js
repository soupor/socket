let app = new Vue({
  el: '#app',
  data: {
    ctx: {},
    imgArr: [],
    fstNodePos: {
      x : 200,
      y : 400
    },
    lastNodePos: null,
    nodeSize: {
      width: 80,
      height: 80
    },
    serverPos: {
      x: 430,
      y: 80
    },
    serverSize: {
      width: 100,
      height: 120
    },
    nodeUrl: './icon/pc.jpg',
    serverUrl: './icon/server.png',
    isReload: false
  },
  methods: {
    initCanvas() {
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
      console.log('imgArr+', this.imgArr)
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
        // this.lastNodePos = addPos;
        // sessionStorage.lastNodePos = JSON.stringify(this.lastNodePos);
      }
      else {
        console.log('change')
        console.log(this.imgArr[this.imgArr.length - 1])
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
    this.initCanvas();
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




