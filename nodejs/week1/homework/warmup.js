console.log("inside warmup file");

/*------------------------------------------------------------------------------------
Create a class called Circle. It should have one property called radius.
The Circle class should have the following methods:
getDiameter
getCircumference
getArea
Instantiate a couple of circles and log out their diameter, circumference and area.
---------------------------------------------------------------------------------------*/

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        const circleDiameter = this.radius * 2;
        console.log(circleDiameter);
    }
    getCircumference() {
        const circleCircumference = 2 * Math.PI * this.radius;
        console.log(circleCircumference);
    }
    getArea() {
        const circleArea = Math.PI * this.radius * this.radius;
        console.log(circleArea);
    }
}

const smallCircle = new Circle(10);
const mediumCircle = new Circle(25);
const largeCircle = new Circle(50);

smallCircle.getDiameter();
mediumCircle.getCircumference();
largeCircle.getArea();