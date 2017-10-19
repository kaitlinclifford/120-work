// making an arithmatic sketch
// trying to make it look cool

//variables
var pos_x = 20;
var circle_min = 20;
var circle_max;
var green_val = '255';
var ball_x;
var ball_y;
var ball_width = 75;
var ball_moving = 10;
var smiley = {};
  //assigning qualities
smiley.size = 150;
smiley.eye_one = -25;
smiley.color = 'yellow';
smiley.mouth = 90;
smiley.pos_xx = 0;
smiley.pos_yy = 0;

// var xc = constrain(mouseX, leftWall, rightWall);
// var myObj

function setup(){
  createCanvas( windowWidth, windowHeight );
  frameRate(30);

//create the self moving steadyish ball
  ball_x = width * 0.5;
  ball_y = height * 0.5;

//max circle size in relation to width of canvas
  circle_max = width - 100;

  smiley.pos_xx = width/2;
  smiley.pos_yy = height/2;
}

function draw(){
  //create the background
  //make it change color as the mouse moves
r = map( mouseX, windowWidth, windowHeight, 255, 200);
b = map( mouseX, windowWidth, windowHeight, 200, 255);
  background(r, 0, b);

var circle_size = map(mouseX, 0, width, circle_min, circle_max );

//draw the smiley face
push();
  translate( smiley.pos_xx, smiley.pos_yy);
  fill(smiley.color);
  ellipse(0, 0, smiley.size);

  fill('black');
  ellipse( smiley.eye_one, smiley.eye_one, smiley.size * 0.25);
  ellipse( -smiley.eye_one, smiley.eye_one, smiley.size * 0.25);

  arc( 0, -smiley.eye_one, smiley.size * 0.8, smiley.mouth, 0, PI );

  //random moving smiley
  smiley.pos_xx += random(-4, 4);
  smiley.pos_yy += random(-4, 4);
pop();

// draw the ellipse to go across the screen
// make the ellipse change colors as well
push();
//middle circle
  fill( 0, green_val, 33 );
    green_val = green_val + 1;
    green_val = green_val % 255;
  ellipse( width/8, height/8, circle_size );

//bottom circle
var pink = floor( random(256));
var purple = floor( random(256));
var yellow = floor( random(256));
  fill( pink, purple, yellow );
  ellipse(pos_x, 650, 75);
//update the ellipse position on the screen
  pos_x = pos_x + 20;
//bind it to the width of the canvas
  pos_x = pos_x % width;

//top circle
var black = floor( random(256));
var orange = floor( random(256));
var cyan = floor( random(256));
  fill( black, orange, cyan );
  ellipse(ball_x, ball_y, ball_width, ball_width);

  //random moving of the ball
  ball_x += random(-ball_moving, ball_moving);
  ball_y += random(-ball_moving, ball_moving);

pop();
}
