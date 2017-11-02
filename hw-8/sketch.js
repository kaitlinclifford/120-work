//creating variables
//
var x = 0;
var y = 0;
var x_x = 0;
var y_y = 0;


// creating the canvas
function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(15);

}

//setting up the background
function draw(){
  //making background change color when going across screen
  if(mouseX < width*1/3){
    background('rgb(156, 156, 255)');
  } else if(mouseX < width*2/3){
    background('rgb(106, 255, 224)');
  } else {
    background('rgb(144, 15, 79)');
  }


//   //drawing loops to make squares across the screen
if(mouseX < width * 1/2 ){
  for ( var x = 0; x <= mouseX; x = x + 50 ){
    for ( var y = 0; y <= mouseY; y = y + 50 ){
      //draw the squares
      fill( 0, random(200), random(175) );
      rect( x, y, 25, 25 );
    }
  }
//changing squares to circles halfway across screen  
} else if( mouseX < width ){
  for ( var x_x = 0; x_x <= mouseX; x_x = x_x + 50 ){
    for ( var y_y = 0; y_y <= mouseY; y_y = y_y + 50 ){
      fill( random(255), 0, random (100) );
      ellipse( x_x, y_y, 25, 25);
      //for inner for
    }
    //for 'for' under if
  }

}

  //this is the closing bracket for draw function
}
