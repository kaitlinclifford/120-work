//creating variables
//
// ||
var x = 0;
var y = 0;
var x_x = 0;
var y_y = 0;

//create the array
var num = [200, 400, 10, -6];
var i = 0;


// creating the canvas
function setup(){
  createCanvas(windowWidth, windowHeight);

} // end of setup function

//setting up the background
function draw(){
  //making background change color when going across screen
  //added another background color and changed them all
  if(mouseX < width*1/4){
    background('rgb(62, 155, 255)');
  } else if(mouseX < width*1/2){
    background('rgb(215, 155, 249)');
  } else if(mouseX < width*3/4){
    background('rgb(190, 255, 196)');
  }  else {
    background('rgb(0, 0, 0)');
  }

        //calling functions to make ball bounce across screen
        drawBall(45);
        ballMove();
        ballBounce();


//   //drawing loops to make squares across the screen
// now making circles instead of squares
if(mouseX < width * 1/2 ){
  for ( var x = 0; x <= mouseX; x = x + 50 ){
    for ( var y = 0; y <= mouseY; y = y + 50 ){
      //draw the squares
      fill( random(255), 0, random (100) );
      ellipse( x, y, 25, 25);
    }
  }
//changing squares to circles halfway across screen
//now making circles into squares halfway
} else if( mouseX < width ){
  for ( var x_x = 0; x_x <= mouseX; x_x = x_x + 50 ){
    for ( var y_y = 0; y_y <= mouseY; y_y = y_y + 50 ){
      fill( 0, random(200), random(175) );
      rect( x_x, y_y, 25, 25 );
      //for inner for
    }
    //for 'for' under if
  }

}

} //this is the closing bracket for draw function

//*******************************************************

//creating the functions for the ball

function drawBall( diameter ){
    fill( random(255) );
    stroke( 'black' );
    strokeWeight(5);
    ellipse( num[0], num[1], diameter );
} //end of the drawBall function


//code to make the ball move
function ballMove(){
  num[0] = num[0] + num[2];
  num[1] = num[1] + num[3];
}//end of ballMove function


//code to make ball bounce
function ballBounce(){
  if ( num[0] > width || num[0] < 0 ){
    num[2] = num[2] * -1;
  }
  if ( num[1] > height || num[1] < 0 ){
    num[3] = num[3] * -1;
  }
} //end of ballBounce function
