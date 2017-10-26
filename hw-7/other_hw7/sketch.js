
//declaring variable for ball
var ball = {};
//declaring ball width
ball.width = 40;
//starting position of 10 on x axis
ball.x = 10;
//starting position of 10 on y axis
ball.y = 10;
//changing position on x axis by 1 pixel each frame
ball.delta_x = 1;
//changing position on the y axis by 1 pixel each frame
ball.delta_y = 1;
//scale of trail to be left on x axis if conditions are met
ball.scale_x = 1;
//scale of trail to be left on y axis if conditions are met
ball.scale_y = 1;

//setting up canvas with windowWidth and 400
//pixel height, and a white background
function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}


//continuous loop of all things inside curly brackets
function draw() {

//position on x axis, adding the changing position
//on the x axis, which is 1, multplied by scale_x
//which is also 1
    ball.x += ball.delta_x * ball.scale_x;
//same as the explanation above, except about
//the y axis values
    ball.y += ball.delta_y * ball.scale_y;

//conditional statements about where the ball goes based
//on above statements and whether the statement itself
//is true or false.
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
//same as the one before
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

//ellipse color: white
    fill(255);
//ellipse trail will start at 10, 10, with width
//of 40 for both the x and y axis
    ellipse(ball.x, ball.y, ball.width, ball.width);
//this bracket closes the draw function
}
//function that says when the mouse is pressed,
//an action will occur
function mousePressed() {
  //variable mapped to movement of mouse on x axis
  //with minimum and maximum values
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
  //same as above but for y axis
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
//bracket to close the whole fucntion
}
