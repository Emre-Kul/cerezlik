import {from, of} from "rxjs";
import {map, mapTo, pluck} from "rxjs/operators";


const simpleLog = (v: any) => console.log(v);

const mapExample = () => {
    from([1, 2, 3, 4, 5]).pipe(
        map( (val) => val * 10)
    ).subscribe(simpleLog);
};

const pluckExample = () => {
    from(
        [
            {
                'name': 'a-xd',
                'age': 1,
            },
            {
                'name': 'b-xd',
                'age': 2
            },
        ]
    ).pipe(
        pluck('name')
    ).subscribe(simpleLog);

    from(
        [
            {
                'name': 'a-xd',
                'age': 1,
                'props': {
                    'a': '1-props-aaaa',
                    'b': '1-props-bbbb'
                }
            },
            {
                'name': 'b-xd',
                'age': 2,
                'props': {
                    'a': '2-props-aaaa',
                    'b': '2-props-bbbb'
                }
            },
        ]
    ).pipe(
        pluck('props', 'a')
    ).subscribe(simpleLog);
};



const mapToExample = () => {
  from([1, 3, 5]).pipe(
      mapTo('No matter what the input is, i return this :D')
  ).subscribe(simpleLog);
};


export function run() {
    // mapExample();
    // pluckExample();
    mapToExample();
}

