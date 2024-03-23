"use strict";
function identity(arg) {
    return arg;
}
const documment = {
    print: () => "print",
    getContent: () => "content"
};
const pdf = {
    print: () => {
        return "asdf";
    }
};
function printDocument(doc) {
    return "Treść: " + doc.print();
}
printDocument(documment);
printDocument(pdf);
//# sourceMappingURL=T8_TypyOgolne.js.map