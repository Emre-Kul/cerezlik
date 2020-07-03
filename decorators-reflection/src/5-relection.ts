import "reflect-metadata";
export const run = () => {

    const metadataKey = Symbol('XD');

    const obj = { name: 'emre' };
    Reflect.defineMetadata(metadataKey, 'deneme0', obj);
    Reflect.defineMetadata(metadataKey, 'deneme', obj, 'x');
    Reflect.defineMetadata(metadataKey, 'deneme-2', obj, 'y');

    console.log('-----SYMBOLS-----');
    console.log(Symbol('XD') == Symbol('XD'));
    console.log(Symbol('XD') === Symbol('XD'));

    console.log('-----OBJ-----');
    console.log(obj);

    console.log('-----HAS-----');
    console.log(Reflect.hasMetadata(metadataKey, obj));
    console.log(Reflect.hasMetadata(metadataKey, obj, 'x'));
    console.log(Reflect.hasMetadata(metadataKey, obj, 'y'));
    console.log(Reflect.hasMetadata(metadataKey, obj, 'z'));

    // https://stackoverflow.com/questions/48509376/whats-the-difference-between-reflect-getmetadata-and-reflect-getownmetadata
    // console.log('-----HAS OWN-----');
    // console.log(Reflect.hasOwnMetadata(metadataKey, obj));
    // console.log(Reflect.hasOwnMetadata(metadataKey, obj, 'x'));
    // console.log(Reflect.hasOwnMetadata(metadataKey, obj, 'y'));
    // console.log(Reflect.hasOwnMetadata(metadataKey, obj, 'z'));

    console.log('-----GET-----');
    console.log(Reflect.getMetadata(metadataKey, obj));
    console.log(Reflect.getMetadata(metadataKey, obj, 'x'));
    console.log(Reflect.getMetadata(metadataKey, obj, 'y'));
    console.log(Reflect.getMetadata(metadataKey, obj, 'z'));

    console.log('-----GET KEYS-----');
    console.log(Reflect.getMetadataKeys(obj));
};
