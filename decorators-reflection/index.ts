import { Calculator } from "./src/2-method-decorator";
import { Car } from "./src/1-class-decorator";
import {Plane} from "./src/3-property-decorator";
import {Animal} from "./src/4-parameter-decorator";
import {run} from "./src/5-relection";
// 1
const classExample = () => {
    const car = new Car(5);
    console.log(`Added by decorator [Id] : ${(car as any).id}`);
    console.log(`Added by decorator [Name] : ${(car as any).name}`);
    console.log(`Added by decorator [getLogo] : ${(car as any).getLogo()}`);
};
// 2
const methodExample = () => {
    const calculator = new Calculator('sum');
    console.log(calculator.calc(1, 2));
    console.log(calculator.calc2(3, 5));
};

// 3
const propertyExample = () => {
    const plane = new Plane();
    plane.printName();
};

// 4
const parameterExample = () => {
  const animal = new Animal('xd');

};
const examples = {
    '1': classExample,
    '2': methodExample,
    '3': propertyExample,
    '4': parameterExample,
    '5': run
};


// @ts-ignore
const args = process.argv.slice(2);
if(args.length <= 0) {
    console.log(`Please provide example key!`);
    process.exit(1)
}

// @ts-ignore
examples[args[0]]();
