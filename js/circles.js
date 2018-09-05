  // var canvas = document.getElementById("displayCanvas");
  // var context = canvas.getContext("2d");
  // var displayWidth = canvas.width;
  // var displayHeight = canvas.height;
  
  // init();
  
  // function init() {
        
  //   generate();
    
  // //  canvas.addEventListener("click", clickListener, false);
  // // }
    
  // function clickListener(evt) {
  //   generate();
    
  //   //code below prevents the mouse down from having an effect on the main browser window:
  //   if (evt.preventDefault) {
  //     evt.preventDefault();
  //   } //standard
  //   else if (evt.returnValue) {
  //     evt.returnValue = false;
  //   } //older IE
  //   return false;
  // }
  
  // function setLinePoints(iterations) {
  //   var pointList = {};
  //   pointList.first = {x:0, y:1};
  //   var lastPoint = {x:1, y:1}
  //   var minY = 1;
  //   var maxY = 1;
  //   var point;
  //   var nextPoint;
  //   var dx, newX, newY;

  //   pointList.first.next = lastPoint;
  //   for (var i = 0; i < iterations; i++) {
  //     point = pointList.first;
  //     while (point.next != null) {
  //       nextPoint = point.next;
        
  //       dx = nextPoint.x - point.x;
  //       newX = 0.5*(point.x + nextPoint.x);
  //       newY = 0.5*(point.y + nextPoint.y);
  //       newY += dx*(Math.random()*2 - 1);
        
  //       var newPoint = {x:newX, y:newY};
        
  //       //min, max
  //       if (newY < minY) {
  //         minY = newY;
  //       }
  //       else if (newY > maxY) {
  //         maxY = newY;
  //       }
        
  //       //put between points
  //       newPoint.next = nextPoint;
  //       point.next = newPoint;
        
  //       point = nextPoint;
  //     }
  //   }
    
  //   //normalize to values between 0 and 1
  //   if (maxY != minY) {
  //     var normalizeRate = 1/(maxY - minY);
  //     point = pointList.first;
  //     while (point != null) {
  //       point.y = normalizeRate*(point.y - minY);
  //       point = point.next;
  //     }
  //   }
  //   //unlikely that max = min, but could happen if using zero iterations. In this case, set all points equal to 1.
  //   else {
  //     point = pointList.first;
  //     while (point != null) {
  //       point.y = 1;
  //       point = point.next;
  //     }
  //   }
    
  //   return pointList;   
  // }
    
  // function generate() {
  //   context.clearRect(0,0,displayWidth,displayHeight);
  //   var centerX, centerY;
  //   var r,g,b,a;
  //   var color;
  //   var lineW;
  //   var maxRad, minRad;
  //   var phase;
    
  //   var columns = 5;
  //   var rows = 1;
  //   for (var i = 0; i < columns; i++) {
  //     for (var j = 0; j < rows; j++) {
  //       maxRad = 0.5*displayWidth/columns;
  //       minRad = 0.88*maxRad;
  
  //       centerX = maxRad + 2*maxRad*i;
  //       centerY = maxRad + 2*maxRad*j;
        
  //       r = Math.floor(Math.random()*192);
  //       g = Math.floor(Math.random()*192);
  //       b = Math.floor(Math.random()*192);
  //       a = 0.5;
  //       color = "rgba("+r+","+g+","+b+","+a+")";
        
  //       phase = Math.random()*Math.PI*2;
        
  //       drawCircle(centerX, centerY, minRad, maxRad, phase, color);
  //     }
  //   }
  // }
  
  // function drawCircle(centerX, centerY, minRad, maxRad, phase, color) {
  //   var point;
  //   var rad, theta;
  //   var twoPi = 2*Math.PI;
  //   var x0,y0;
    
  //   //generate the random function that will be used to vary the radius, 9 iterations of subdivision
  //   var pointList = setLinePoints(9);
    
  //   context.strokeStyle = color;
  //   context.lineWidth = 1.01;
  //   context.fillStyle = color;
  //   context.beginPath();
  //   point = pointList.first;
  //   theta = phase;
  //   rad = minRad + point.y*(maxRad - minRad);
  //   x0 = centerX + rad*Math.cos(theta);
  //   y0 = centerY + rad*Math.sin(theta);
  //   context.lineTo(x0, y0);
  //   while (point.next != null) {
  //     point = point.next;
  //     theta = twoPi*point.x + phase;
  //     rad = minRad + point.y*(maxRad - minRad);
  //     x0 = centerX + rad*Math.cos(theta);
  //     y0 = centerY + rad*Math.sin(theta);
  //     context.lineTo(x0, y0);
  //   }
  //   context.stroke();
  //   context.fill();   
  // }
