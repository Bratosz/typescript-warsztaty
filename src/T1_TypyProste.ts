const aName: string = "Jan";
const aName2 = "Jan";

const aAge: number = 42;
const isOld = true;


//array T[]
const numbers: readonly number[] = [1, 2, 3];
// numbers[0] = 4;

//tuple - para
const tuple: readonly [string, number] = ["Jan", aAge]
// const tuple2 = ["Jan", aAge]

const int: number = 1235666666666666

const big: bigint = 1235666666666666666666666666666n


const sym: symbol = Symbol("test")
const sym2: symbol = Symbol("test")

const s:string = "test"
const s2:string = "test"


export function funT1() {
    console.log(s === s2);
}