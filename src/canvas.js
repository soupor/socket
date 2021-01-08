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


let mouseStart = {  //记录鼠标点击坐标
  x: null,
  y: null
};
let imgArr = [];
let targetImg = null;  //记录正在拖拽的图片
let targetIndex = null;  //记录正在拖拽的图片在数组的下标
let colorType = {
  'run': 'green',
  'stop': 'red',
  'trans': 'yellow'
}

/***************
 + 初始化图片
 * *************/
let imgServer = new Image();
imgServer.src = './icon/server.jpg';
imgServer.startPos = {  //记录图片移动起始点 
  x: 50,
  y: 400
};
imgServer.size = {
  width: 120,
  height: 150
};
imgArr.push(imgServer);

let imgPc1 = new Image();
imgPc1.src = './icon/pc1.png';
imgPc1.startPos = {
  x: 500,
  y: 100
};
imgPc1.size = {
  width: 100,
  height: 130
};
imgArr.push(imgPc1);

let imgPc2 = new Image();
imgPc2.src = './icon/pc2.jpg';
imgPc2.startPos = {
  x: 500,
  y: 400
};
imgPc2.size = {
  width: 120,
  height: 130
};
imgArr.push(imgPc2);

let imgPc3 = new Image();
imgPc3.src = './icon/pc3.png';
imgPc3.startPos = {
  x: 500,
  y: 700
};
imgPc3.size = {
  width: 120,
  height: 130
};
imgArr.push(imgPc3);


function positionInCanvas(e, canvasLeft, canvasTop) {
  return {
      x: e.clientX - canvasLeft,
      y: e.clientY - canvasTop
  }
};

function drawLine(startImg, endImg, color) {
  let centerStartX = startImg.startPos.x + startImg.size.width / 2
  let centerStartY = startImg.startPos.y + startImg.size.height / 2
  let centerEndX = endImg.startPos.x + endImg.size.width / 2
  let centerEndY = endImg.startPos.y + endImg.size.height / 2

  ctx.beginPath();
  ctx.lineWidth = '2';
  ctx.strokeStyle = color;
  ctx.moveTo(centerStartX, centerStartY);
  ctx.lineTo(centerEndX, centerEndY);
  ctx.stroke();
}



window.onload = () => {
  for(let i in imgArr) {
    if (i !== 0) {
      drawLine(imgArr[0], imgArr[i], colorType['run'])
    }
    ctx.drawImage(imgArr[i], imgArr[i].startPos.x , imgArr[i].startPos.y, imgArr[i].size.width, imgArr[i].size.height);
    
  }
};

canvas.onmousedown = e => {
  console.log('单击')
  
  let posStart = positionInCanvas(e, canvasLeft, canvasTop);
  //记录鼠标起始点
  mouseStart.x = posStart.x;
  mouseStart.y = posStart.y;
  console.log(`mouseStart.x:${mouseStart.x},mouseStart.y:${mouseStart.y}`);
  for(let i in imgArr) {
    ctx.rect(imgArr[i].startPos.x, imgArr[i].startPos.y, imgArr[i].size.width, imgArr[i].size.height);
    if (ctx.isPointInPath(mouseStart.x, mouseStart.y)) {
      console.log('enter')
      targetImg = imgArr[i];
      targetIndex = i;
      console.log(targetIndex);
      return;
    }
  }
};
canvas.onmousemove = e => {   
  if(targetImg !== null) {
    let posMove = positionInCanvas(e, canvasLeft, canvasTop);
    let diff = {
      disX: mouseStart.x - posMove.x,
      disY: mouseStart.y - posMove.y
    };
    
    let tempStartX = targetImg.startPos.x;
    let tempStartY = targetImg.startPos.y;

    targetImg.startPos.x -= diff.disX;
    targetImg.startPos.y -= diff.disY

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i in imgArr) {
      if (i !== 0) {
        drawLine(imgArr[0], imgArr[i], colorType['run'])
      }
      ctx.drawImage(imgArr[i], imgArr[i].startPos.x , imgArr[i].startPos.y, imgArr[i].size.width, imgArr[i].size.height);
    }
    targetImg.startPos.x = tempStartX;
    targetImg.startPos.y = tempStartY;
  
  }
 };
canvas.onmouseup = (e) => {
  if(targetImg !== null) {
    canvas.width = canvas.width  //刷新画布
    let posUp = positionInCanvas(e, canvasLeft, canvasTop);
    let diff = {
      disX: mouseStart.x - posUp.x,
      disY: mouseStart.y - posUp.y
    }; 
    imgArr[targetIndex].startPos.x -= diff.disX;
    imgArr[targetIndex].startPos.y -= diff.disY;
    targetImg = null
    for (let i in imgArr) {
      if (i !== 0) {
        drawLine(imgArr[0], imgArr[i], colorType['run'])
      }
      ctx.drawImage(imgArr[i], imgArr[i].startPos.x , imgArr[i].startPos.y, imgArr[i].size.width, imgArr[i].size.height);
    }
  }
};
canvas.ondblclick = () => {
  console.log('双击')
};


    