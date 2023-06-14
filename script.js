//complete this code
class Rectangle {
	constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this.width;
  }

  get height() {
    return this.height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle  {
	constructor(sideLength) {
    super(sideLength, sideLength);
  }
	function getPerimeter(){
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;


const rect_w = 5; 
const rect_h = 10; 
const sq_s = 7; 
const rectangle = new Rectangle(rect_w, rect_h);
const square = new Square(sq_s); 
square.getPerimeter();
rectangle.getArea();
