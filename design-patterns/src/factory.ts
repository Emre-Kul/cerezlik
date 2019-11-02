
abstract class Mapper {

    process(input: string[]): string[] {
        return input;
    }

}

class MapperFactory {

    private type: string;

    constructor(type: string) {
        this.type = type;
    }

    // this can be static no need to get type from constructor
    createMapper(): Mapper {
        if(this.type === "StringMapper") {
            return new StringMapper();
        } else if(this.type === "NumberMapper") {
            return new NumberMapper();
        }
        throw Error("Mapper type does not exists!")    
    }

}

class StringMapper extends Mapper {
    process(input: string[]): string[] {
        return input.filter( (item) => isNaN(Number(item)));
    }
}

class NumberMapper extends Mapper {
    process(input: string[]): string[] {
        return input.filter( (item) => !isNaN(Number(item)));
    }
}

/// RUN 
const exampleInput = ["emre", "1", "a", "3", "4"];
const stringMapper = (new MapperFactory("StringMapper")).createMapper();
const numberMapper = (new MapperFactory("NumberMapper")).createMapper();
console.log("String Mapper Process Result : ", stringMapper.process(exampleInput));
console.log("Number Mapper Process Result : ", numberMapper.process(exampleInput));