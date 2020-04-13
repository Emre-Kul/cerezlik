import {from} from "rxjs";
import {map} from "rxjs/operators";

export const ex1 = (arr: number[]) => {
    const data: number[] = [];
    from(arr).pipe(
        map( (val) => val + 1)
    ).subscribe( (val) => {data.push(val)} );
    return data;
};
