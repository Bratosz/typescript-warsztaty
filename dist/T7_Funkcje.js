"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetIng2 = exports.greeting = void 0;
function add(x, y) {
    return "";
}
function greeting(message = "Hej", name) {
    if (name) {
        console.log(message + " " + name);
    }
    else {
        console.log(message);
    }
}
exports.greeting = greeting;
function greet(value) {
    if (typeof value === "string") {
        return `Hello, ${value}`;
    }
    else {
        return `You are ${value} years old`;
    }
}
const create = (name) => ({
    name: name
});
const fun1 = (name1) => (name) => {
    return name + name1;
};
const greetIng2 = (message = "Hej") => (name) => {
    if (name) {
        console.log(message + " " + name);
    }
    else {
        console.log(message);
    }
};
exports.greetIng2 = greetIng2;
(0, exports.greetIng2)("Cześć")("Bartek");
const names = ["Bartek", "Jan", "Kasia"];
function mapName(n) {
    return n + "Hej";
}
names.map((0, exports.greetIng2)("Cześć"));
//# sourceMappingURL=T7_Funkcje.js.map