class Circle extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<circle cx="50" cy="50" r="50" fill=${this.shapeColor}"/>`;
    }
}
class Triangle extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<ploygon points="100 0, 0, 0 50, 100" fill=${this.shapeColor}"/>`;
    }
}

class Square extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<rect width="100" height="100" rx="15" fill=${this.shapeColor}"/>`;
    }
}

module.exports = {Circle, Triangle, Square};