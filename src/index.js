
function test () {
  console.log('test')
}

let app = new Vue({
  el: '#app',
  // data: {
  //   ctx: {}
  // },
  mounted() {
   initPath()
  },
  methods: {
    // initPath() {
    //   const can = this.$refs.myCanvas
    //   this.ctx = can.getContext('2d')
    //   this.drawArrow(0, 0, 500, 5, 200, 200, 'red')
    //   this.drawArrow(0, 0, 500, 5, 500, 200 , 'green')
    //   this.drawArrow(0, 0, 500, 5, 800, 200, 'green')
    // },
    // drawArrow(ox, oy, x1, y1, x2, y2, color) {
    //   this.ctx.fillStyle = color
    //   let sta = new Array(x1,y1)
    //   let end = new Array(x2,y2)
    //   //画线 
    //   this.ctx.beginPath()
    //   this.ctx.strokeStyle = color
    //   this.ctx.translate(ox,oy,0) //坐标源点 
    //   this.ctx.moveTo(sta[0],sta[1])
    //   this.ctx.lineTo(end[0],end[1])
    //   this.ctx.fill()
    //   this.ctx.stroke()
    //   this.ctx.save()
    //   // (x1, y1)是线段起点  (x2, y2)是线段终点
    //   // 反正切函数计算夹角
    //   let endRadians = Math.atan((y2 - y1) / (x2 - x1));
    //   // 三角形的底边与线段垂直，所以还要再转 π / 2
    //   endRadians += ((x2 >= x1) ? 90 : -90) * Math.PI / 180
    //   this.ctx.save()
    //   this.ctx.beginPath()
    //   // 坐标原点 => (x2, y2)
    //   this.ctx.translate(x2, y2)
    //   this.ctx.rotate(endRadians)
    //   this.ctx.moveTo(0, 0)
    //   this.ctx.lineTo(5, 15)
    //   this.ctx.lineTo(-5, 15)
    //   this.ctx.closePath()
    //   this.ctx.fill()
    //   this.ctx.restore()
    // },
    handleServerClick() {
      console.log('server')
    },
    handleTargetClick(target) {
      console.log(target)
    }
  }
})

