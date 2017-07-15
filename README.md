# test game

Setting up
----------

The test game is based on the built-in [Pixijs 4.5.3](http://www.pixijs.com/) and [jQuery 1.4.4 minified](https://blog.jquery.com/2010/11/11/jquery-1-4-4-release-notes/) and written using the MVC structure.

* [Learning Pixi](https://github.com/kittykatattack/learningPixi/blob/master/README.md#learning-pixi)
* [Learning jQuery](http://api.jquery.com/category/version/1.4.4/)

The application can be used offline and does not require a web-server.

The project contains such files:

file name                | Contents of the file
-------------------------|----------------------
/src/css/style.css    	 | Cascading style sheet file
/src/js/pixi.js  	       | Pixijs library
/src/js/jquery.js 	     | jQuery library
/src/js/game.js	 	       | File with a javascript application code
index.html      	       | Index Markup File

To clone test game repository with Git,  `cd`
into your root project directory and type:
```
git clone git@github.com:imhul/test_game.git
```

How to play
----------

To start the game, just run the index.html file in your browser.

If Pixi is linking correctly, something like this will be displayed in your web browser's JavaScript console by default:
```
 Pixi.js 4.0.0 - ✰ WebGL ✰      http://www.pixijs.com/    ♥♥♥ 
``` 
### Interface

![interface scheme](https://raw.githubusercontent.com/imhul/test_game/master/scheme.jpg)

* By clicking on the stage, there is a new figure and upper counter counts the number of added shapes.
* In the upper checkboxes you can select which shapes will appear when clicking on the stage:
 1. All shapes
 2. Triangles only
 3. Rectangles only
 4. Ellipses only
 5. Circles only
 6. Stars only
* When added, the shapes begin to fall and disappear outside the stage. The counter removes the missing shape.
* At the bottom you can specify gravity number from 1 to 100 for new shapes.

Screenshots
----------

#### Screenshot 1
![interface scheme](https://raw.githubusercontent.com/imhul/test_game/master/screen_01.jpg)
#### Screenshot 2
![interface scheme](https://raw.githubusercontent.com/imhul/test_game/master/screen_02.jpg)
