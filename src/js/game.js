// Test game by Tkachuk Zakhar

var game = document.getElementById('game');
var app = new PIXI.Application(800, 600, { backgroundColor: 0xFFFFFF, antialias: true });
var gravity = 50;
var color = '0x666666';
var shapesCount = 0;
var gravityInput = document.getElementById('gravity-input');
var gravityBox = document.getElementById('gravity-cast');
var shapesCountBox = document.getElementById('shapes-cast');
gravityBox.innerHTML = 'Current gravity is: ' + gravity;
game.appendChild(app.view);
app.stage.interactive = true;
app.stage.buttonMode = true;
app.stage.containsPoint = () => true;
app.stage.on('pointerdown', onClick);

gravityInput.onchange = function() {
  gravity = this.value;
  gravityBox.innerHTML = 'Current gravity is: ' + gravity;
}

// Triangle
function triangleInit(x, y, color) {
  var triangle = new PIXI.Graphics();
  triangle.beginFill(color);
  triangle.lineStyle(1, color, 1);
  triangle.moveTo(x, y);
  triangle.lineTo(x + 100, y + 100);
  triangle.lineTo(x, y + 100);
  triangle.lineTo(x, y);
  // triangle.interactive = true;
  // triangle.buttonMode = true;
  // triangle.containsPoint = () => true;
  // triangle.on('pointerdown', shapeOnClick);
  triangle.endFill();
  app.stage.addChild(triangle);
  shapesCount++;
  var timer = setInterval(function () {
    triangle.position.y++;
    if(triangle.position.y > 400) {
      clearTimeout(timer);
      app.stage.removeChild(triangle);
      triangle.position.y = 0;
      shapesCount--;
      shapesCountBox.innerHTML = 'Shapes: ' + shapesCount;
    }
  }, gravity);
  return shapesCount;
}

// Rectangle
function rectangleInit(x, y, color) {
  var rectangle = new PIXI.Graphics();
  rectangle.beginFill(color);
  rectangle.lineStyle(1, color, 1);
  rectangle.drawRect(x, y, 120, 120);
  rectangle.endFill();
  app.stage.addChild(rectangle);
  shapesCount++;
  var timer = setInterval(function () {
    rectangle.position.y++;
    if(rectangle.position.y > 400) {
      clearTimeout(timer);
      app.stage.removeChild(rectangle);
      rectangle.position.y = 0;
      shapesCount--;
      shapesCountBox.innerHTML = 'Shapes: ' + shapesCount;
    }
  }, gravity);
  return shapesCount;
}

// Ellipse
function ellipseInit(x, y, color) {
  var ellipse = new PIXI.Graphics();
  ellipse.beginFill(color);
  ellipse.lineStyle(1, color, 1);
  ellipse.drawEllipse(x, y, 80, 40);
  ellipse.endFill();
  app.stage.addChild(ellipse);
  shapesCount++;
  var timer = setInterval(function () {
    ellipse.position.y++;
    if(ellipse.position.y > 400) {
      clearTimeout(timer);
      app.stage.removeChild(ellipse);
      ellipse.position.y = 0;
      shapesCount--;
      shapesCountBox.innerHTML = 'Shapes: ' + shapesCount;
    }
  }, gravity);
  return shapesCount;
}

// Circle
function circleInit(x, y, color) {
  var circle = new PIXI.Graphics();
  circle.beginFill(color);
  circle.lineStyle(1, color, 1);
  circle.drawCircle(x, y, 60);
  circle.endFill();
  app.stage.addChild(circle);
  shapesCount++;
  var timer = setInterval(function () {
    circle.position.y++;
    if(circle.position.y > 400) {
      clearTimeout(timer);
      app.stage.removeChild(circle);
      circle.position.y = 0;
      shapesCount--;
      shapesCountBox.innerHTML = 'Shapes: ' + shapesCount;
    }
  }, gravity);
  return shapesCount;
}

// Star
function starInit(x, y, color) {
  var star = new PIXI.Graphics();
  star.beginFill(color);
  star.lineStyle(1, color, 1);
  star.drawPolygon([x, y, x+20, y+50, x+80, y+55, x+35, y+95, x+50, y+150, x, y+120, x-50, y+150, x-35, y+95, x-80, y+55, x-20, y+50]);
  star.endFill();
  app.stage.addChild(star);
  shapesCount++;
  var timer = setInterval(function () {
    star.position.y++;
    if(star.position.y > 400) {
      clearTimeout(timer);
      app.stage.removeChild(star);
      star.position.y = 0;
      shapesCount--;
      shapesCountBox.innerHTML = 'Shapes: ' + shapesCount;
    }
  }, gravity);
  return shapesCount;
}

function onClick (e) {
    var rondomInt = (Math.random()*5)+1|0;
    var x = e.data.originalEvent.pageX - 550;
    var y = e.data.originalEvent.pageY - 150;
    function getColor() {
      var letters = '0123456789ABCDEF';
      var color = '0x';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    if(rondomInt === 1) {
      triangleInit(x, y, getColor());
    } else if(rondomInt === 2) {
      rectangleInit(x, y, getColor());
    } else if(rondomInt === 3) {
      ellipseInit(x, y, getColor());
    } else if(rondomInt === 4) {
      circleInit(x, y, getColor());
    } else if(rondomInt === 5) {
      starInit(x, y, getColor());
    }
    shapesCountBox.innerHTML = 'Shapes: ' + shapesCount;
}

shapesCountBox.innerHTML = 'Shapes: ' + shapesCount;
