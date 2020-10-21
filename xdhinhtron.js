let Circle = function(radius) {
    this.radius = radius;

    this.getRadius = function() {
        return radius;
    };

    this.getArea = function() {
        return Math.PI * radius ** 2;
    };
};
let circle1 = new Circle(2);
let circle2 = new Circle(4);
let circle3 = new Circle(5);
let circle4 = new Circle(7);
alert("radius 1: " + circle1.getRadius() + "; area 1" + circle1.getArea());
alert("radius 2: " + circle2.getRadius() + "; area 2" + circle2.getArea());
alert("radius 3: " + circle3.getRadius() + "; area 3" + circle3.getArea());
alert("radius 4: " + circle4.getRadius() + "; area 4" + circle4.getArea());