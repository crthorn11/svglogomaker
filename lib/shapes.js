


class Shape {
    constructor(text, shapeColor, textColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

class Circle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, textColor, shapeColor);

    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<rect x="25" y="25" width="200" height="200" fill="${this.shapeColor}" />`;
    }
}

const newTriangle = new Triangle(
    "",
    "",
    "",
);

const newCircle = new Circle(
    "SVG",
    "GREEN",
    "WHITE",
);

const newSquare = new Square(
    "exm",
    "exp",
    "exp",
);

function addShape(shape) {
    this.shape.push(createdSVG);
}

module.exports = { Triangle, Square, Circle };