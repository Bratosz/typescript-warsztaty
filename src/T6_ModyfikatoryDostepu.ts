class Animal {
    private colour: string
    public name: string
    name2: string
    protected name3: string


    constructor() {
        this.colour = "red"
        this.name = "red"
        this.name2 = "red"
        this.name3 = "red"
    }
}

class Snake extends Animal implements CanMove{
    move(): number {
        return 0;
    }
}

type CanMove = {
    move(): number
}

let s1 = new Snake();


