"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
exports.validate = function (input1) {
    var specialChar = [
        "!",
        "=",
        "'",
        "*",
        "$",
        "%",
        "@"
    ];
    for (var i in specialChar) {
        if (input1.indexOf(specialChar[i])) {
            input1.replace(specialChar[i], "");
        }
    }
    return input1;
};
