

//any
let withAnyone: any = "Jan"
withAnyone = 234

let stranger: unknown = "Jan"


export function funT2(){
    let s = stranger
    if (typeof s === 'string') {
        let s1 = s
    }
    let s1 = s
}

