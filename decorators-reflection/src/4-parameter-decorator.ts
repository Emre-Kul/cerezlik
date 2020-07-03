/*
A Parameter Decorator is declared just before a parameter declaration. The parameter decorator is applied to the function for a class constructor or method declaration.
A parameter decorator cannot be used in a declaration file, an overload, or in any other ambient context (such as in a declare class).
*/
function NotNull(target: any, propertyKey: string, parameterIndex: number) {
    // console.log(target);
    // console.log(propertyKey);
    // console.log(parameterIndex);
}


export class Animal {

    public name: string;

    constructor(@NotNull name: string) {
        this.name = name;
    }
}


