

//variables: var ball is all the details for the ball
var ball = {};
ball.width = 60;
ball.x = 10;
ball.y = 10;
ball.delta_x = 3;
ball.delta_y = 3;
ball.scale_x = 1;
ball.scale_y = 1;

var color = {};
  r = 0;
  g = 0;
  b = 0;


function setup() {
    createCanvas(windowWidth, 400);
    background('0');
    }


function draw() {


  ball.x += ball.delta_x * ball.scale_x;
  ball.y += ball.delta_y * ball.scale_y;


  if (ball.x >= width || ball.x <= 0) {
    ball.delta_x = -1 * ball.delta_x;
  }
  if (ball.y >= height || ball.y <= 0) {
    ball.delta_y = -1 * ball.delta_y;
  }


  //background changes color when going across screen
  if (mouseX < width*1/3) {
    background('rgb(13, 180, 180)');
  } else if(mouseX < width*2/3) {
    background('rgb(133, 174, 241)');
  } else {
    background('rgb(249, 150, 192)');
  }


//text to tell viewer to click Mouse
var textString = 'Click the Mouse!';
push();
    fill('white');
    textSize(40);
        text(textString, 50, 350);
pop();


    //details about the ball and making the
    //mouseIsPressed function
    if (mouseIsPressed) {
      color.r = random( 256 );
      color.g = random( 256 );
      color.b = random( 256 );
      fill(color.r, color.g, color.b);
        ellipse(ball.x, ball.y, ball.width, ball.width);
    } else {
          fill('black');
        ellipse(ball.x, ball.y, ball.width, ball.width);
    }

}


//what to do to change the ball
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
