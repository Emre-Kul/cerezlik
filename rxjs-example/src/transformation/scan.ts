import {from} from "rxjs";
import {scan} from "rxjs/operators";


export const sumWithScan = (inp: number[]) => {
    let data: number = 0;
    from(inp).
    pipe(scan((acc, curr) => acc + curr)).
    subscribe((val) => {
        data = val;
    });
    return data;
};


