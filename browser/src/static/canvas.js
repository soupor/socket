// const canvas = document.getElementById('myCanvas');

// const canvasLeft = canvas.getBoundingClientRect().left;
// const canvasTop = canvas.getBoundingClientRect().top;
// const ctx = canvas.getContext('2d');


// let mouseStart = {  //记录鼠标点击坐标
//   x: null,
//   y: null
// };
// let imgArr = [];
// let targetImg = null;  //记录正在拖拽的图片
// let targetIndex = null;  //记录正在拖拽的图片在数组的下标
// let colorType = {
//   'run': 'green',
//   'stop': 'red',
//   'trans': 'yellow'
// }

/***************
 + 初始化图片
 * *************/
// let imgServer = new Image();
// imgServer.src = './icon/server.png';
// imgServer.startPos = {  //记录图片移动起始点 
//   x: 480,
//   y: 80
// };
// imgServer.size = {
//   width: 100,
//   height: 130
// };
// imgArr.push(imgServer);

// let imgPc1 = new Image();
// imgPc1.src = './icon/pc.jpg';
// imgPc1.startPos = {
//   x: 200,
//   y: 400
// };
// imgPc1.size = {
//   width: 80,
//   height: 80
// };
// imgArr.push(imgPc1);

// let imgPc2 = new Image();
// imgPc2.src = './icon/pc.jpg';
// imgPc2.startPos = {
//   x: 500,
//   y: 400
// };
// imgPc2.size = {
//   width: 80,
//   height: 80
// };
// imgArr.push(imgPc2);

// let imgPc3 = new Image();
// imgPc3.src = './icon/pc.jpg';
// imgPc3.startPos = {
//   x: 800,
//   y: 400
// };
// imgPc3.size = {
//   width: 80,
//   height: 80
// };
// imgArr.push(imgPc3);




function positionInCanvas(e, canvasLeft, canvasTop) {
  return {
      x: e.clientX - canvasLeft,
      y: e.clientY - canvasTop
  }
};

function drawLine(startImg, endImg, ctx) {
  let centerStartX = startImg.startPos.x + startImg.size.width / 2
  let centerStartY = startImg.startPos.y + startImg.size.height / 2
  let centerEndX = endImg.startPos.x + endImg.size.width / 2
  let centerEndY = endImg.startPos.y 

  ctx.beginPath();
  ctx.strokeStyle = '#808080';
  ctx.lineWidth = '2';
  ctx.moveTo(centerStartX, centerStartY);
  ctx.lineTo(centerEndX, centerEndY);
  ctx.stroke();
}



// window.onload = () => {
//   for(let i in imgArr) {
//     if (i !== 0) {
//       drawLine(imgArr[0], imgArr[i], ctx)
//     }
//   }
//   for(let i in imgArr) {
    
//     ctx.drawImage(imgArr[i], imgArr[i].startPos.x , imgArr[i].startPos.y, imgArr[i].size.width, imgArr[i].size.height);
//     // ctx.rect(imgArr[i].startPos.x, imgArr[i].startPos.y, imgArr[i].size.width, imgArr[i].size.height);
//     // ctx.stroke();
    
//   }
 
 
// };

// canvas.onmousedown = e => {
  
//   let posStart = positionInCanvas(e, canvasLeft, canvasTop);
//   //记录鼠标起始点
//   mouseStart.x = posStart.x;
//   mouseStart.y = posStart.y;
//   console.log(`mouseStart.x:${mouseStart.x},mouseStart.y:${mouseStart.y}`);
//   for(let i in imgArr) {
//     ctx.rect(imgArr[i].startPos.x, imgArr[i].startPos.y, imgArr[i].size.width, imgArr[i].size.height);
//     ctx.stroke();
//     if (ctx.isPointInPath(mouseStart.x, mouseStart.y)) {
//       console.log('enter')
//       targetImg = imgArr[i];
//       targetIndex = i;
//       console.log(targetIndex);
//       return;
//     }
//   }
// };
// canvas.onmousemove = e => {   
//   if(targetImg !== null) {
//     let posMove = positionInCanvas(e, canvasLeft, canvasTop);
//     let diff = {
//       disX: mouseStart.x - posMove.x,
//       disY: mouseStart.y - posMove.y
//     };
    
//     let tempStartX = targetImg.startPos.x;
//     let tempStartY = targetImg.startPos.y;

//     targetImg.startPos.x -= diff.disX;
//     targetImg.startPos.y -= diff.disY

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for(let i in imgArr) {
//       if (i !== 0) {
//         drawLine(imgArr[0], imgArr[i], colorType['run'])
//       }
//       ctx.drawImage(imgArr[i], imgArr[i].startPos.x , imgArr[i].startPos.y, imgArr[i].size.width, imgArr[i].size.height);
//     }
//     targetImg.startPos.x = tempStartX;
//     targetImg.startPos.y = tempStartY;
  
//   }
//  };
// canvas.onmouseup = (e) => {
//   if(targetImg !== null) {
//     // canvas.width = canvas.width  //刷新画布
//     let posUp = positionInCanvas(e, canvasLeft, canvasTop);
//     let diff = {
//       disX: mouseStart.x - posUp.x,
//       disY: mouseStart.y - posUp.y
//     }; 
//     imgArr[targetIndex].startPos.x -= diff.disX;
//     imgArr[targetIndex].startPos.y -= diff.disY;
//     targetImg = null
//     for (let i in imgArr) {
//       if (i !== 0) {
//         drawLine(imgArr[0], imgArr[i], colorType['run'])
//       }
//       ctx.drawImage(imgArr[i], imgArr[i].startPos.x , imgArr[i].startPos.y, imgArr[i].size.width, imgArr[i].size.height);
//     }
//   }
// };
// canvas.ondblclick = () => {
//   console.log('双击')
// };


    