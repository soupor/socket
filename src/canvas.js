// let ctx = {}

// function initPath() {
//   const can = document.getElementById('myCanvas')  
//   ctx = can.getContext('2d')
//   drawArrow(0, 0, 500, 5, 200, 200, 'red')
//   drawArrow(0, 0, 500, 5, 500, 200 , 'green')
//   drawArrow(0, 0, 500, 5, 800, 200, 'green')
// }

// function drawArrow(ox, oy, x1, y1, x2, y2, color) {
//   ctx.fillStyle = color
//   let sta = new Array(x1,y1)
//   let end = new Array(x2,y2)
//   //画线 
//   ctx.beginPath()
//   ctx.strokeStyle = color
//   ctx.translate(ox,oy,0) //坐标源点 
//   ctx.moveTo(sta[0],sta[1])
//   ctx.lineTo(end[0],end[1])
//   ctx.fill()
//   ctx.stroke()
//   ctx.save()
//   // (x1, y1)是线段起点  (x2, y2)是线段终点
//   // 反正切函数计算夹角
//   let endRadians = Math.atan((y2 - y1) / (x2 - x1));
//   // 三角形的底边与线段垂直，所以还要再转 π / 2
//   endRadians += ((x2 >= x1) ? 90 : -90) * Math.PI / 180
//   ctx.save()
//   ctx.beginPath()
//   // 坐标原点 => (x2, y2)
//   ctx.translate(x2, y2)
//   ctx.rotate(endRadians)
//   ctx.moveTo(0, 0)
//   ctx.lineTo(5, 15)
//   ctx.lineTo(-5, 15)
//   ctx.closePath()
//   ctx.fill()
//   ctx.restore()
// }

const canvas = document.getElementById('myCanvas');

const canvasLeft = canvas.getBoundingClientRect().left;
const canvasTop = canvas.getBoundingClientRect().top;
const ctx = canvas.getContext('2d');

let imgServer = new Image();
let mouseStart = {  //记录鼠标点击坐标
  x: null,
  y: null
};

let startPos = {  //记录图片移动起始点 
  x: 50,
  y: 50
}

let img
let imgArr = []
let diff
  

imgServer.src = './icon/server.jpg';
imgArr.push(imgServer)


window.onload = () => {
  ctx.rect(startPos.x, startPos.y, 120, 150)
  ctx.drawImage(imgArr[0], startPos.x , startPos.y, 120, 150);
};


function positionInCanvas(e, canvasLeft, canvasTop) {
  return {
      x: e.clientX - canvasLeft,
      y: e.clientY - canvasTop
  }
}

canvas.onmousedown = e => {
  let posStart = positionInCanvas(e, canvasLeft, canvasTop);
  //记录鼠标起始点
  mouseStart.x = posStart.x;
  mouseStart.y = posStart.y;
  console.log(`mouseStart.x:${mouseStart.x},mouseStart.y:${mouseStart.y}`);
 
  
  if (ctx.isPointInPath(mouseStart.x, mouseStart.y)) {
    console.log("a")
    canvas.onmousemove = e => {   
      let posMove = positionInCanvas(e, canvasLeft, canvasTop);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      console.log(`x:${startPos.x},y:${startPos.y}`);
      ctx.drawImage(imgArr[0], startPos.x - (mouseStart.x - posMove.x), startPos.y - (mouseStart.y - posMove.y), 120, 150);
      // startPos.x += posMove.x - mouseStart.x 
      // startPos.y += posMove.y - mouseStart.y
    }
  }
};
canvas.onmouseup = (e) => {
  canvas.width = canvas.width  //刷新画布
  let posUp = positionInCanvas(e, canvasLeft, canvasTop);
  startPos.x += posUp.x - mouseStart.x 
  startPos.y += posUp.y - mouseStart.y
  console.log(`posUp.x:${posUp.x}, startPos.x:${startPos.x}`)
  ctx.rect(startPos.x, startPos.y, 120, 150);
  ctx.drawImage(imgArr[0], startPos.x, startPos.y, 120, 150);
  ctx.stroke();
  canvas.onmousemove = null;
  canvas.onmouseup = null;
};

    