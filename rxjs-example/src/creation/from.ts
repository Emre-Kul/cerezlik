import {from} from "rxjs";

export const fromArr = (arr: number[]) => {
    const data: number[] = [];
    from(arr).subscribe(val => {
        data.push(val);
    });
    return data;
};

export const fromPromise = async (p: any) => {
    let data;
    await from(p).subscribe(val => {
        data = val;
    });
    console.log(data);
    return data;
};


export const fromMap = (m: any) => {
    let data: any = [];
    from(m).subscribe( (v) => {
        data = data.concat(v);
    });
    return data;
};


export const fromString = (s: string) => {
    const data: string[] = [];
    from(s).subscribe( v => {
       data.push(v);
    });
    return data;
};
