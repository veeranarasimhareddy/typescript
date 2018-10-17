var Car = (function () {
    function Car(model, year, mileage, color) {
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.color = color;
    }
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    Car.prototype.setYear = function (year) {
        this.year = year;
    };
    Car.prototype.getMileage = function () {
        return this.mileage;
    };
    Car.prototype.setMileage = function (mileage) {
        this.mileage = mileage;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.specification = function () {
        var spec = "Model : " + this.getModel() + " \n                    Year : " + this.getYear() + " \n                    Mileage : " + this.getMileage() + " \n                    Color : " + this.getColor() + "\n                    ";
        return spec;
    };
    return Car;
}());
var car = new Car('Benz', 2018, '10kmpl', 'black');
var details = car.specification();
console.log(details);
