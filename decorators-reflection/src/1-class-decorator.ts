/*
A Class Decorator is declared just before a class declaration. The class decorator is applied to
the constructor of the class and can be used to observe, modify, or replace a class definition.
A class decorator cannot be used in a declaration file, or in any other ambient context (such as on a declare class).
The expression for the class decorator will be called as a function at runtime, with the constructor of the decorated class as its only argument.
*/

// Basic
const AddId = (constructor: Function) => {
    constructor.prototype.id = '1111';
};

// Basic Factory
const AddName = (name: string) => {
    return function (constructor: Function) {
        constructor.prototype.name = name;
    }
};

// Extend
function ExtendToAudi<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        name: string = 'Audi';

        getLogo() {
            return 'Audi Logo';
        }
    }
}

// Extend Factory
function ExtendTo(name: string, logo: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            name: string = name;
            getLogo() {
                return logo;
            }
        }
    }
}

// Wrap
function log<T extends { new(...constructorArgs: any[]): any }>(constructorFunction: T) {

    //new constructor function
    let newConstructorFunction: any = function (...args: any[]) {
        let func: any = function () {
            return new constructorFunction(...args);
        };
        func.prototype = constructorFunction.prototype;
        let result: any = new func();
        return result;
    };
    newConstructorFunction.prototype = constructorFunction.prototype;
    return newConstructorFunction;
}
// Wrap factory
// will add

@AddId
@AddName('Nissan')
@ExtendTo('Mercedes', 'Mercedes Logo')
@ExtendToAudi
export class Car {
    speed: number;
    inc: number;

    constructor(speed: number) {
        this.speed = speed;
        this.inc = 0;
    }

    public up(u: number) {
        this.speed += u;
    }

    public getSpeed(): number {
        return this.speed;
    }
}
