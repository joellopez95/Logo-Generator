class Cirlce {
//used radius to generate svg
    constructor(radius) {
        this.radius = radius;
    }
    SVG(){
        //got circle property info from w3 schools
        return `<circle cx="50" cy="50" r="${this.radius}" stroke="black" stroke-width="3" fill="red" />`;
    }
}

class Triangle {
    constructor() {
        this.points = points;
    }
    SVG(){
        //got polygon property info from w3 schools
        return `<polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />`;
    }
}

class Square {
    constructor(side) {
        this.side = side;
    }
    SVG(){
        //got rectangle property info from w3 schools
        return `<rect width="15" height="15" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />`;
    }
}