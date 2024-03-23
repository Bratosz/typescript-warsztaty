function identity<T>(arg: T): T {
    return arg
}

type Printable = {
    print(): string
}

type ADocument = Printable & {
    getContent(): string
}

const documment: ADocument = {
    print: () => "print",
    getContent: () => "content"
}

const pdf: Printable = {
    print: ()  => {
        return "asdf"
    }
}

function printDocument<T extends Printable>(doc: T){
    return "Treść: " + doc.print();
}

printDocument(documment)
printDocument(pdf)