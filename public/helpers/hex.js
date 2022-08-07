"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexTABLE = exports.hex = void 0;
const hexTABLE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
exports.hexTABLE = hexTABLE;
function hex(num) {
    const x = [];
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < hexTABLE.length; j++) {
            if (num[i] === hexTABLE[j]) {
                x.push(`${j}`);
            }
        }
    }
    return x;
}
exports.hex = hex;
