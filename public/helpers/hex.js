"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexTABLE = exports.hexB = exports.hexA = void 0;
const hexTABLE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
exports.hexTABLE = hexTABLE;
function hexA(num) {
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
exports.hexA = hexA;
function hexB(num) {
    let res = [];
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < hexTABLE.length; j++) {
            if (Number(num[i]) === j) {
                res.push(hexTABLE[j]);
            }
        }
    }
    res.reverse().shift();
    return '0x' + res.join().replace(/,/g, '');
}
exports.hexB = hexB;
