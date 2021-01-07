let ctx = {}

function initPath() {
  const can = document.getElementById('myCanvas')  
  ctx = can.getContext('2d')
  drawArrow(0, 0, 500, 5, 200, 200, 'red')
  drawArrow(0, 0, 500, 5, 500, 200 , 'green')
  drawArrow(0, 0, 500, 5, 800, 200, 'green')
}

function drawArrow(ox, oy, x1, y1, x2, y2, color) {
  ctx.fillStyle = color
  let sta = new Array(x1,y1)
  let end = new Array(x2,y2)
  //画线 
  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.translate(ox,oy,0) //坐标源点 
  ctx.moveTo(sta[0],sta[1])
  ctx.lineTo(end[0],end[1])
  ctx.fill()
  ctx.stroke()
  ctx.save()
  // (x1, y1)是线段起点  (x2, y2)是线段终点
  // 反正切函数计算夹角
  let endRadians = Math.atan((y2 - y1) / (x2 - x1));
  // 三角形的底边与线段垂直，所以还要再转 π / 2
  endRadians += ((x2 >= x1) ? 90 : -90) * Math.PI / 180
  ctx.save()
  ctx.beginPath()
  // 坐标原点 => (x2, y2)
  ctx.translate(x2, y2)
  ctx.rotate(endRadians)
  ctx.moveTo(0, 0)
  ctx.lineTo(5, 15)
  ctx.lineTo(-5, 15)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}