"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divideEither = exports.divide = exports.throwError = void 0;
const purify_ts_1 = require("purify-ts");
function throwError(message) {
    throw new Error(message);
}
exports.throwError = throwError;
function infiniteLoop() {
    while (true) {
    }
}
const divide = (a, b) => {
    if (b != 0) {
        return a / b;
    }
    else {
        throw new Error("Nie dziel przez zero!");
    }
};
exports.divide = divide;
const divideEither = (a, b) => {
    if (b != 0) {
        return (0, purify_ts_1.Right)(a / b);
    }
    else {
        return (0, purify_ts_1.Left)(new Error("Nie dziel przez zero!"));
    }
};
exports.divideEither = divideEither;
//# sourceMappingURL=T9_ObslogaBlendow.js.map