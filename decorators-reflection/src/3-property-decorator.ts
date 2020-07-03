/*
A Property Decorator is declared just before a property declaration.
A property decorator cannot be used in a declaration file, or in any other ambient context (such as in a declare class).

With a property decorator, you can change the value that is in a property at runtime. The property decorator is declared before the property declaration

*/
const ChangeIt = (target: any, key: string) => {
    Object.defineProperty(target, key, {
        get: () => {
            // @ts-ignore
            // console.log(target.name);
         return `${key} - XD`;
        }, // surname XD
        set: (x: string) => x,
        enumerable: true,
        configurable: true,
    });
};

const ChangeIt2 = () => {
    return (target: any, key: string) => {
        let value: string;
        Object.defineProperty(target, key, {
            get: () => {
                return `${value} - XD`;
            },
            set: (x: string) => {
                console.log(`Setting to ${x}`);
                value = x;
            },
            enumerable: true,
            configurable: true,
        });
    }
};

export class Plane {
    @ChangeIt2()
    name: string;
    // @ChangeIt
    @ChangeIt2()
    surname: string;

    constructor(name: string = 'lol') {
        this.name = name;
        this.surname = 'emre';
    }

    public printName() {
        console.log(this.surname);
    }

}
