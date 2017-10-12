// making of the cow

// CREATED A VARIABLE THAT IS VERY DIFFICULT TO WORK WITH
var cow = 'MOOOOOO';

//declare that 30 is the rounded corners of cacti
var cactus = '30';

//declare color for cacti
var green_val = '255';

function setup(){
  createCanvas( windowWidth, windowHeight );
  frameRate(40);
    angleMode(DEGREES);

}

function draw(){
  background( 'rgb(83, 255, 234)' );
  //text to move with cursor
  //don't forget to move this so the mooo goes behind the cow
push();
  textSize(150);
  fill('black');
  // translate( mouseX, mouseY );
  // didn't need that piece, it just
  // helped me figure everything out
  text( cow , mouseX, mouseY );
pop();


// ********************************
//line behind the cow
push();
  line(0, 580, windowWidth, 580 );
pop();
// ********************************



// ********************************
// cactus that changes color over time
push();
  fill( 0, green_val, 33 );
  //following the example online
  green_val = green_val + 1;
  green_val = green_val % 255;
  // fill( 'rgb(0, 70, 33)' );
  noStroke();
  //main
  rect( 800, 320, 50, 300, cactus );
  //right horizontal
  rect( 800, 475, 150, 50, cactus );
  //left horizontal
  rect( 700, 400, 150, 50, cactus );
  //left vertical
  rect( 700, 340, 50, 100, cactus );
  //right vertical
  rect( 900, 415, 50, 100, cactus );
pop();

// second cactus to change color
push();
  fill( 0, green_val, 33 );
  //doing the same as the other
  green_val = green_val + 1;
  green_val = green_val % 255;
  // fill('rgb(0, 70, 33)');
  noStroke();
  //main
  rect( 1250, 320, 50, 300, cactus );
  //right horizontal
  rect( 1250, 475, 150, 50, cactus );
  //left horizontal
  rect( 1150, 400, 150, 50, cactus );
  //left vertical
  rect( 1150, 340, 50, 100, cactus );
  //right vertical
  rect( 1350, 415, 50, 100, cactus );
  pop();
// *******************************



// *******************************
  // creating the cow

  // creating the NECK
  push();
    fill( 'black' );
    noStroke();
    rotate( 15 );
    rect( 280, 350, 40, 100 );
  pop();
// **************************
  // creating the legs
  push();
  fill( 'black' );
  noStroke();
  //left most leg
  rect( 20, 500, 30, 100 );
  //next from left
  rect( 60, 490, 30, 100 );
  //next from left
  rect( 130, 500, 30, 100 );
  //right most leg
  rect( 170, 490, 30, 100 );
  pop();
// ***************************
  //creating the feet
  push();
  fill( 'white' );
  noStroke();
  //left most foot
  ellipse( 37, 600, 40, 30 );
  //next from left
  ellipse( 77, 590, 40, 30 );
  //next from left
  ellipse( 147, 600, 40, 30 );
  //right most foot
  ellipse( 187, 590, 40, 30 );
  pop();
// ***************************
  // creating the BODY
  push();
    fill( 'black' );
    noStroke();
  ellipse( 110, 500, 200, 100 );
  pop();

  //circles for the BODY
  push();
    fill('white');
    noStroke();
    ellipse( 60, 490, 40, 30 );
    ellipse( 110, 520, 50, 40 );
    ellipse( 150, 480, 40, 30 );
  pop();
// **************************
  //creating the HEAD
  push();
    fill( 'black' );
    noStroke();
  ellipse( 200, 400, 90, 90 );
  pop();
// **************************

  //creating the tail
  push();
    fill( 'black' );
    noStroke();
  rect( 10, 450, 10, 50 );
  pop();
// ***************************

  //making the face
  //creating the ears
  push();
    fill( 'black' );
    noStroke();
    //left ear
  triangle( 150, 350, 180, 370, 160, 380 );
    //right ear
  triangle( 245, 350, 235, 380, 210, 370 );
  pop();

  //the rest of the face
  push();
    fill('white');
    noStroke();
  //left eye
  ellipse( 180, 385, 15, 15 );
  //right eye
  ellipse( 220, 385, 15, 15 );
  //nose
  ellipse( 200, 415, 30, 20 );
  pop();

  //eye pupil
  push();
    fill('black');
  ellipse( 180, 385, 10, 10 );
  ellipse( 220, 385, 10, 10 );
  //nose holes
  ellipse( 190, 415, 5, 5 );
  ellipse( 210, 415, 5, 5 );
  pop();
// ********************************
}
