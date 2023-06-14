//complete this code
class Rectangle {
constructor (width ,height){
	this._height=height;
	this._width=width;
}
	// getter

	get width()
	{
		return this._width;		
	}
	get height()
	{
		return this._height;		
	}
	 getArea(){
		return this._width*this._height;
	}
	


	
}

class Square extends Rectangle {
	constructor(wid) {
    super(wid, wid);
  }
	 getPerimeter() {
    return 4 * this._width;
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
