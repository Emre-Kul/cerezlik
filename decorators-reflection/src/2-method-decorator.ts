// propertyKey => function name
// target => class
// descriptor => function with additional fields


// Basic
const LogArgs2 = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(args);
        return method.apply(this, args);
    }
};
// Basic Factory
const LogArgs = (name: string) => {
    // console.log(`Init [Method] Decorator... ${name}`);
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(args);
            return method.apply(this, args);
        }
    }
};


const Pow2 = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const powArgs = args.map( (x: number) => x * x);
        return method.apply(this, powArgs);
    }
};

// TESTS
type Operator = 'sum' | 'multiplication';
export class Calculator {
    private readonly operator: Operator;

    constructor(operator: Operator) {
        this.operator = operator;
    }

    @LogArgs('CALC')
    public calc(x: number, y: number): number {
        if(this.operator === 'sum') {
            return x+y;
        }
        return x*y;
    }

    @LogArgs2
    @Pow2
    public calc2(x: number, y: number): number {
        if(this.operator === 'sum') {
            return x+y;
        }
        return x*y;
    }
}


/*
class C {
    @f()
    @g()
    method() {}
}

f(): evaluated
g(): evaluated
g(): called
f(): called

*/
