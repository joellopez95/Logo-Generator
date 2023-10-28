const { Circle, Triangle, Square} = require('./shapes');

describe('Circle', ()=> {
    test ('SVG Circle', () => {
        const circle = new Circle(30);
        expect(circle.getSVG()).toMatch('circle');
    });
})

describe('Triangle', ()=> {
    test ('SVG Triangle', () => {
        const triangle = new Triangle();
        expect(triangle.getSVG()).toMatch('triangle');
    });
})

describe('Square', ()=> {
    test ('SVG Square', () => {
        const square = new Square(15);
        expect(square.getSVG()).toMatch('rect');
    });
})