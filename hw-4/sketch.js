function setup() {
  //create a canvas to draw on
  createCanvas( 700, 700 );

}

// starting to draw the portrait
function draw() {

  //background
  background( 'rgb(137, 247, 201)' );

  //arm1
  push();
    fill( 'rgb(231, 127, 198)' );
  rotate( radians(-40) );
  rect( -35, 375, 30, 110);
  pop();

  //arm2
  push();
    fill( 'rgb(231, 127, 198)' );
  rect( 400, 370, 110, 30);
  pop();

  //hands
  push();
  ellipse( 219, 290, 40, 40 );
  ellipse( 520, 385, 40, 40 );
  pop();

  // drawing the body
  push();
  fill( 'rgb(231, 127, 198)' );
triangle( 350, 275, 220, 500, 480, 500 );
  pop();

//legs
push();
fill( 'rgb(69, 192, 215)' );
rect( 270, 500, 60, 150 );
rect( 370, 500, 60, 150 );
pop();

//feet
push();
ellipse( 300, 660, 70, 35 );
ellipse( 400, 660, 70, 35 );
pop();

//start of the head
push();
fill( 'rgb(248, 250, 196)' );
ellipse( 350, 230, 175, 175 );
pop();

//hair
push();
noStroke();
fill( 'rgb(255, 212, 5)' );
rect( 250, 140, 180, 40 );
rect( 250, 140, 30, 200 );
rect( 420, 140, 30, 200 );
pop();

//Mouth
push();
arc( 350, 265, 75, 75, 0, PI );
pop();

//eye1
push();
fill( 'white' );
ellipse( 310, 210, 50, 40 );
pop();

//eye pupil1
push();
fill( 'rgb(32, 107, 13)' );
ellipse( 310, 210, 20, 30 );
push();
fill( 'black' );
ellipse( 310, 210, 10, 20 );
pop();
pop();

//eye2
push();
fill( 'white' );
ellipse( 390, 210, 50, 40 );
pop();

//eye pupil2
push();
fill( 'rgb(32, 107, 13)' );
ellipse( 390, 210, 20, 30 );
push();
fill( 'black' );
ellipse( 390, 210, 10, 20 );
pop();
pop();

//nose
push();
line( 350, 210, 370, 240 );
line( 370, 240, 350, 240 );
pop();

}
