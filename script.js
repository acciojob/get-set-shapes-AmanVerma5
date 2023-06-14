//complete this code
class Rectangle {
	let width=0;
	let height=0;
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	function getArea(){
		return width*height;
	}
}

class Square extends Animal {
	function getPerimeter(){
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
