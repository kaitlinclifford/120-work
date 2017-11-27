//creating the arrays
let squares = [];
let circles = [];
let ballColor = 0;

//create a canvas the size of the window
//add for function for squares
//add for function for circles
function setup() {
    createCanvas( windowWidth, windowHeight );
    for (let i = 0; i < 50; i++) {
      let x = random(width);
      let y = random(height);
      let w = random(10, 75);
      let h = random(10, 75);
      squares[i] = new Square( x, y, w, h );

    for (let i = 0; i < 50; i++) {
      let a = random(width);
      let b = random(height);
      let c = random(5, 50);
      circles[i] = new Circle( a, b, c );
    }//end of circle one
  }//end of square one
} //end of the setup function

function draw(){
    background( 'rgb(143, 144, 251)' );
    for ( let i = 0; i < squares.length; i++ ){
      squares[i].move();
      squares[i].show();
  } //end of for function
    for ( let i = 0; i < circles.length; i++ ){
      circles[i].move();
      circles[i].show();
    }//end of for function
} //end of the draw function


class Square{
  //x=x coordinate, y= ycoordinate, w= width h= height
    constructor( x, y, w, h ) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    } //end of constructor

    move() {
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-10, 10);
    } //end of move

    show() {
      stroke('black');
      strokeWeight(4);
      fill( random(255), random(255), random(255));
      rect( this.x, this.y, this.w, this.h );

    } //end of show
} //end of class

class Circle {
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
  }//end of constructor

  move() {
    this.a = this.a + random(-20, 20);
    this.b = this.b + random(-20, 20);
  }//end of move

  show() {
    if (frameCount % 25 == 0){
      ballColor = random(255)
    }
    stroke(random(255));
    strokeWeight(4);
    fill(ballColor)
    // noFill();
    ellipse(this.a, this.b, this.c * 2);
  }//end of show
}//end of Circle class
