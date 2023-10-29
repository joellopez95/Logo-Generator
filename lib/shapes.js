class Circle {
//used radius to generate svg
    constructor(radius) {
        this.radius = radius;
    }
    getSVG(){
        //got circle property info from w3 schools
        return `<circle cx="50" cy="50" r="${this.radius}" stroke="black" stroke-width="3" fill="red" />`;
    }
}

class Triangle {
    constructor() {
        this.points = points;
    }
    getSVG(){
        //got polygon property info from w3 schools
        return `<polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />`;
    }
}

class Square {
    constructor(side) {
        this.side = side;
    }
    getSVG(){
        //got rectangle property info from w3 schools
        return `<rect width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />`;
    }
}

module.exports = { Circle, Triangle, Square };
