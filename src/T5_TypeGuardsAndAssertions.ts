function isString(x: any): x is string {
    return typeof x === 'string';
}

export const checkType = (x: any) => {
    let x1 = isString(x)
    if (isString(x)) {
        let s = x;
    }

    if (x instanceof Number) {
        let n = x;
    }
}

let someValue: any = "5"

export const fun5 = () => {

    let stringLenght = someValue as number
    let result = 5 + stringLenght
    console.log(result)
    // console.log(stringLenght.toFixed())
}
