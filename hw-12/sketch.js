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
    background( 'rgb(125, 255, 252)' );
    for ( let i = 0; i < squares.length; i++ ){
      squares[i].move();
      squares[i].show();
      squares[i].edgeCheck();
  } //end of for function
    for ( let i = 0; i < circles.length; i++ ){
      circles[i].move();
      circles[i].show();
      circles[i].edgeCheck();
    }//end of for function
} //end of the draw function


class Square{
  //x=x coordinate, y= ycoordinate, w= width h= height
    constructor( x, y, w, h ) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.deltaX = random(-2, 2);
        this.deltaY = random(-2, 2);
        // this.color = 'blue';
    } //end of constructor

    move() {
        this.x = this.x + this.deltaX;
        this.y = this.y + this.deltaY;
    } //end of move

    show() {
      stroke('black');
      strokeWeight(4);
      fill( random(255), random(255), random(255) );
      rect( this.x, this.y, this.w, this.h );

    } //end of show

    edgeCheck() {
      //have squares get sucked away when they reach left/right walls
      if (this.x + this.w + this.h >= width || this.x - this.w -this.h <= 0) {
         this.deltaX *= 2;
        } //end of if function

      //have squares get sucked away when they reach top/bottom walls
      if (this.y + this.w + this.h >= height || this.y - this.w - this.h <= 0) {
         this.deltaY *= 2;
        }//end of if function
    } //end of edgeCheck

} //end of class

class Circle {
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.deltaA = random(-5, 5);
    this.deltaB = random(-5, 5);
  }//end of constructor

  move() {
    this.a = this.a + this.deltaA;
    this.b = this.b + this.deltaB;
  }//end of move

  show() {
    // if (frameCount % 25 == 0){
    //   ballColor = random(255)
    // }
    stroke(random(255));
    strokeWeight(4);
    fill(random(255));
    ellipse(this.a, this.b, this.c * 2);
  }//end of show

  edgeCheck() {
      // have circles get sucked away when they reach left/right walls
      if (this.a + this.c >= width || this.a - this.c <= 50){
        this.deltaA *= 2;
      } //end of if function

      // have circles get sucked away when they reach top/bottom walls
      if (this.b + this.c >= height || this.b - this.c <= 50){
        this.deltaB *= 2;
      } //end of if function
  } //end of edgeCheck
}//end of Circle class
