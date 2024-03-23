"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fun5 = exports.checkType = void 0;
function isString(x) {
    return typeof x === 'string';
}
const checkType = (x) => {
    let x1 = isString(x);
    if (isString(x)) {
        let s = x;
    }
    if (x instanceof Number) {
        let n = x;
    }
};
exports.checkType = checkType;
let someValue = "5";
const fun5 = () => {
    let stringLenght = someValue;
    let result = 5 + stringLenght;
    console.log(result);
};
exports.fun5 = fun5;
//# sourceMappingURL=T5_TypeGuardsAndAssertions.js.map