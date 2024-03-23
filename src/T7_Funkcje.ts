function add(x: number | string, y: number): string {
    return ""
}


export function greeting(message: string = "Hej" , name?: string) {
    if (name) {
        console.log(message + " " + name)
    } else {
        console.log(message)
    }
}
//
// greeting();
// greeting("Witaj");
// greeting("Witaj", "Bartek");


function greet(name: string): string;
function greet(age: number): string;
function greet(value: string | number): string {
    if (typeof value === "string") {
        return `Hello, ${value}`;
    } else {
        return `You are ${value} years old`;
    }
}

const create = (name: string) => ({
    name: name
})

const fun1 = (name1: string) => (name: string) => {
    return name + name1
}


export const greetIng2 = (message: string = "Hej") => (name?: string) => {
    if (name) {
        console.log(message + " " + name)
    } else {
        console.log(message)
    }
}

greetIng2("Cześć")("Bartek")

const names = ["Bartek", "Jan", "Kasia"]

function mapName(n: string) {
    return n + "Hej";
}

names.map(greetIng2("Cześć"))
