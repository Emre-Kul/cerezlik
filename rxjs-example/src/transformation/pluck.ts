import {pluck} from "rxjs/operators";
import {from} from "rxjs";

export const ex1 = (obj: {
    name: string,
    surname: string
}[]) => {
    const data: string[] = [];
    from(obj).pipe(
        pluck('name')
    ).subscribe((d) => { data.push(d) } );
    return data;
};
