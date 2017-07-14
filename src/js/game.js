var app;
var gameZone = document.getElementById('game');
var gravityInput = document.getElementById('gravity-input');
var gravityBox = document.getElementById('gravity-cast');
var shapesCountBox = document.getElementById('shapes-cast');

var filterAll = document.getElementById('filter-all');
var filterTriangle = document.getElementById('filter-triangle');
var filterRectangle = document.getElementById('filter-rectangle');
var filterEllipse = document.getElementById('filter-ellipse');
var filterCircle = document.getElementById('filter-circle');
var filterStar = document.getElementById('filter-star');
var gravity = 50;
var color = '0x666666';
var shapesCount = 0;

var model = {
  createGame: function() {
    app = new PIXI.Application(800, 600, { backgroundColor: 0xFFFFFF, antialias: true });
    gameZone.appendChild(app.view);
    app.stage.interactive = true;
    app.stage.buttonMode = true;
    app.stage.containsPoint = () => true;
    app.stage.on('pointerdown', controller.stageClick());
  },
  getColor: function() {
    var letters = '0123456789ABCDEF';
    var color = '0x';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  counterInit: function() {
    shapesCountBox.innerHTML = 'Shapes: ' + shapesCount;
  },
  gravityInit: function() {
    gravityBox.innerHTML = 'Current gravity is: ' + gravity;
    controller.gravityChange();
  },
  filtersInit: function() {
    controller.shapeFilter();
  },
  initTriangle: function(x, y, color) {
    var triangle = new PIXI.Graphics();
    triangle.beginFill(color);
    triangle.lineStyle(0);
    triangle.moveTo(x, y);
    triangle.lineTo(x + 100, y + 100);
    triangle.lineTo(x, y + 100);
    triangle.lineTo(x, y);
    triangle.endFill();
    triangle.interactive = true;
    triangle.buttonMode = true;
    // triangle.containsPoint = () => true;
    // triangle.on('pointerdown', shapeOnClick);
    app.stage.addChild(triangle);
    shapesCount++;
    var timer = setInterval(function() {
      triangle.position.y++;
      if (triangle.position.y > 600) {
        clearTimeout(timer);
        app.stage.removeChild(triangle);
        triangle.position.y = 0;
        shapesCount--;
        model.counterInit();
      }
    }, gravity);
    return shapesCount;
  },
  initRectangle: function(x, y, color) {
    var rectangle = new PIXI.Graphics();
    rectangle.beginFill(color);
    rectangle.lineStyle(0);
    rectangle.drawRect(x, y, 120, 120);
    rectangle.endFill();
    rectangle.interactive = true;
    rectangle.buttonMode = true;
    app.stage.addChild(rectangle);
    shapesCount++;
    var timer = setInterval(function() {
      rectangle.position.y++;
      if (rectangle.position.y > 600) {
        clearTimeout(timer);
        app.stage.removeChild(rectangle);
        rectangle.position.y = 0;
        shapesCount--;
        model.counterInit();
      }
    }, gravity);
    return shapesCount;
  },
  initEllipse: function(x, y, color) {
    var ellipse = new PIXI.Graphics();
    ellipse.beginFill(color);
    ellipse.lineStyle(0);
    ellipse.drawEllipse(x, y, 80, 40);
    ellipse.endFill();
    ellipse.interactive = true;
    ellipse.buttonMode = true;
    app.stage.addChild(ellipse);
    shapesCount++;
    var timer = setInterval(function() {
      ellipse.position.y++;
      if (ellipse.position.y > 600) {
        clearTimeout(timer);
        app.stage.removeChild(ellipse);
        ellipse.position.y = 0;
        shapesCount--;
        model.counterInit();
      }
    }, gravity);
    return shapesCount;
  },
  initCircle: function(x, y, color) {
    var circle = new PIXI.Graphics();
    circle.beginFill(color);
    circle.lineStyle(0);
    circle.drawCircle(x, y, 60);
    circle.endFill();
    circle.interactive = true;
    circle.buttonMode = true;
    app.stage.addChild(circle);
    shapesCount++;
    var timer = setInterval(function() {
      circle.position.y++;
      if (circle.position.y > 600) {
        clearTimeout(timer);
        app.stage.removeChild(circle);
        circle.position.y = 0;
        shapesCount--;
        model.counterInit();
      }
    }, gravity);
    return shapesCount;
  },
  initStar: function(x, y, color) {
    var star = new PIXI.Graphics();
    star.beginFill(color);
    star.lineStyle(0);
    star.drawPolygon([x, y, x + 20, y + 50, x + 80, y + 55, x + 35, y + 95, x + 50, y + 150, x, y + 120, x - 50, y + 150, x - 35, y + 95, x - 80, y + 55, x - 20, y + 50]);
    star.endFill();
    star.interactive = true;
    star.buttonMode = true;
    app.stage.addChild(star);
    shapesCount++;
    var timer = setInterval(function() {
      star.position.y++;
      if (star.position.y > 600) {
        clearTimeout(timer);
        app.stage.removeChild(star);
        star.position.y = 0;
        shapesCount--;
        model.counterInit();
      }
    }, gravity);
    return shapesCount;
  }
}

var view = {
  loadGame: function() {
    model.createGame();
    model.counterInit();
    model.gravityInit();
    model.filtersInit();
  }
}

var controller = {
  gravityChange: function() {
    gravityInput.onchange = function() {
      gravity = this.value;
      gravityBox.innerHTML = 'Current gravity is: ' + gravity;
    }
  },
  shapeFilter: function() {
    filterAll.checked = true;
    $('input:checkbox').click( function() {
      if($(this).attr('name') != $(this).siblings(':checked').attr('name')) {
        $(this).siblings(':checked').attr('checked', false);
      }
    });
  },
  stageClick: function () {
    gameZone.onclick = function() {
      var rondomShape = (Math.random()*5)+1|0;
      var x = (Math.random()*800)+1|0;
      var y = 0;
      if(filterAll.checked) {
          if(rondomShape == 1) {
            model.initTriangle(x, y, model.getColor());
          } else if(rondomShape == 2) {
            model.initRectangle(x, y, model.getColor());
          } else if(rondomShape == 3) {
            model.initEllipse(x, y, model.getColor());
          } else if(rondomShape == 4) {
            model.initCircle(x, y, model.getColor());
          } else if(rondomShape == 5) {
            model.initStar(x, y, model.getColor());
          }
      } else {
          if(filterTriangle.checked) {
            model.initTriangle(x, y, model.getColor());
          } else if(filterRectangle.checked) {
            model.initRectangle(x, y, model.getColor());
          } else if(filterEllipse.checked) {
            model.initEllipse(x, y, model.getColor());
          } else if(filterCircle.checked) {
            model.initCircle(x, y, model.getColor());
          } else if(filterStar.checked) {
            model.initStar(x, y, model.getColor());
          }
      }
      model.counterInit();
    }
  }
}

view.loadGame();
