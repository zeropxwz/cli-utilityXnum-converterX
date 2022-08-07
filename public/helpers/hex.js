"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hexTABLE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G',];
function hex(num) {
    var x = [];
    for (var i = 0; i < num.length; i++) {
        for (var j = 0; j < hexTABLE.length; j++) {
            if (num[i] === hexTABLE[j]) {
                x.push("".concat(j));
            }
        }
    }
    return x;
}
exports.default = hex;
