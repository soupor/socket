let app = new Vue({
  el: '#app',
  data: {
    ctx: {},
    imgArr: [],   //节点图片信息数组
    nodeInfo: [
      {
        ipAdds: '111.222.333.444',
        status: '传输中'
      },
      {
        ipAdds: '111.222.333.444',
        status: '传输完成'
      },
      {
        ipAdds: '111.222.333.444',
        status: '传输失败'
      },
      {
        ipAdds: '111.222.333.444',
        status: '离线'
      },  
    ],
    contentArr: [],  //节点页面信息数组
    initPos: {
      x: 0,
      y: 400
    },
    nodeSize: {    //节点图片大小
      width: 80,
      height: 80
    },
    serverPos: {   //节点服务器位置
      x: 420,
      y: 80
    },
    serverSize: {   //节点服务器大小
      width: 100,
      height: 120
    },
    serverIP: '45.32.57.46',   //服务器IP地址
    nodeUrl: './static/icon/pc.jpg',    //节点图片url
    serverUrl: './static/icon/server.png',  //服务器url
  },
  methods: {
    initHTML() {
      for (let i = 0; i < this.nodeInfo.length; i++) {
        this.createContent(this.imgArr[i+1].startPos, this.nodeInfo[i].status, this.nodeInfo[i].ipAdds);
      }
    },
    initDom() {
      for (let i = 0; i < this.nodeInfo.length; i++) {
        let dom = document.getElementsByClassName('content')
        dom[i].style.top = this.contentArr[i].top;
        dom[i].style.left = this.contentArr[i].left;
        if(this.contentArr[i].status === '传输中') {
          dom[i].children[0].style.backgroundColor = '#ffc107';
          dom[i].children[0].children[0].style.backgroundColor = '#ffc107';
        }
        else if(this.contentArr[i].status === '传输完成') {
          dom[i].children[0].style.backgroundColor = '#198754';
          dom[i].children[0].style.color = '#F8F8FF';
          dom[i].children[0].children[0].style.backgroundColor = '#198754';
        }
        else if(this.contentArr[i].status === '传输失败') {
          dom[i].children[0].style.backgroundColor = '#dc3545';
          dom[i].children[0].children[0].style.backgroundColor = '#dc3545';

        }
        else {
          dom[i].children[0].style.backgroundColor = '#DCDCDC';
          dom[i].children[0].children[0].style.backgroundColor = '#DCDCDC';
        }
      }
    },
    initNode() {
      const canvas = document.getElementById('myCanvas');
      this.ctx = canvas.getContext('2d');
      let nodeCount = this.nodeInfo.length;
      let nodeSec = canvas.width / (nodeCount + 1);

      this.createNode(this.serverPos, this.serverSize, this.serverUrl);
      let _thisPos = {};
      for (let i in this.nodeInfo) {
        if(i == 0) {
          this.initPos.x += nodeSec - this.nodeSize.width / 2;
        }
        else {
          this.initPos.x += nodeSec;
        }
        _thisPos = JSON.parse(JSON.stringify(this.initPos));  
        //引用类型深拷给另一个对象防止数据被覆盖
        this.createNode(_thisPos, this.nodeSize, this.nodeUrl);
        // console.log(`imgARR:${this.imgArr[1].startPos.x}`)
      }
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
    createNode(pos, size, url) {
      let node = new Image();
      node.src = url;
      node.startPos = pos;
      node.size = size;
      this.imgArr.push(node);
    },
    createContent(nodePos, status, ipAdds) {
      let content = {};
      content.top = nodePos.y - 40 + 'px';
      content.left = nodePos.x - 25 + 'px';
      content.status = status;
      content.ipAdds = ipAdds;
      this.contentArr.push(content);
    }
  },
  
  mounted() {
    this.initNode();
    this.initHTML();
  },
  watch: {
    contentArr() {
      this.$nextTick(() => {
        this.initDom();
      })
    }
  }
})




