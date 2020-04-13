import {from} from "rxjs";
import {mapTo} from "rxjs/operators";

export const ex1 = (inp: any) => {
    let data: string = '';
    from(inp).pipe(
        mapTo('emre')
    ).subscribe((val) => { data = val} )
    return data;
};
