
interface Ape {
    weight: string
    climb(speed: number): number
}

interface Human extends Ape {
    speak(): string
}

class Employee implements Human {
    weight: string;

    constructor() {
    this.weight = "123"
    }

    climb(speed: number): number {
        return 0;
    }

    speak(): string {
        return "";
    }
}

type StringType = string
type ObjectType = { name: string, age: number }
type FunctionType = () => string

type Ape1 = {
    climb(): void
}

type Human1 = {
    speak(): string
}

type Emp = Ape1 & Human1 & { work(): void }

const e: Emp = {
    climb: () => {},
    speak: () => "",
    work: () => {}
}

export function funT2(){

}