// DECORATOR DESIGN PATTERN

interface PriceCalculate {
    calculatePrice: () => number;
}


class Car implements PriceCalculate {
    
    calculatePrice(): number {
        return 100;
    }

}

abstract class CarDecorator implements PriceCalculate {

    private car: Car;

    constructor(car: Car) {
        this.car = car;
    }
    
    calculatePrice() {
        return this.car.calculatePrice() + 1;
    }

}

class HybridDecorator extends CarDecorator {
    
    calculatePrice() {
        return super.calculatePrice() + 1;
    }

}

class NiceWindowDecorator extends CarDecorator {

    calculatePrice() {
        return super.calculatePrice() + 2;
    }

}


// RUN PATTERN
const car = new Car();
const hybridCar = new HybridDecorator(car);
const hybridCarWithNiceWindow = new NiceWindowDecorator(hybridCar);
const carWithNiceWindow = new NiceWindowDecorator(car);

console.log("Car Price : ", car.calculatePrice());
console.log("Hybrid Car Price : ", hybridCar.calculatePrice());
console.log("Car With Nice Window Price : ", carWithNiceWindow.calculatePrice());
console.log("Hybrid Car With Nice Window Price : ", hybridCarWithNiceWindow.calculatePrice());
