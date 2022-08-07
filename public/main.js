"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hex_1 = __importDefault(require("./helpers/hex"));
function toDecim(num) {
    var sys = num.match(/(^0b|0x)/g).join();
    var num = num.replace(/(^0b|0x)/g, '');
    switch (sys) {
        case '0b':
            sys = 2;
            break;
        case '0x':
            sys = 16;
            break;
    }
    var exp = num.length - 1;
    var ind = 0;
    var res = 0;
    while (exp >= 0) {
        sys === 2
            ? res += Number(num[ind]) * Math.pow(Number(sys), exp)
            : res += Number((0, hex_1.default)(num)[ind]) * Math.pow(Number(sys), exp);
        exp--;
        ind++;
    }
    console.log(res);
}
// toDecim('0b111')
const hexTABLE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
function toOther(num, sys) {
    var res = '';
    switch (sys) {
        case 'bin':
            while (num !== 0) {
                res += String(num % 2) + '|';
                num = Math.floor(num / 2);
            }
            console.log(res.split('|').reverse().join().replace(/,/g, ''));
            break;
        case 'hex':
            while (num !== 0) {
                res += String(num % 16) + '|';
                num = Math.floor(num / 16);
            }
            let r = [];
            for (let i = 0; i < res.split('|').length; i++) {
                for (let j = 0; j < hexTABLE.length; j++) {
                    if (Number(res.split('|')[i]) === j) {
                        r.push(hexTABLE[j]);
                    }
                }
            }
            r.reverse().shift();
            console.log('0x' + r.join().replace(/,/g, ''));
            break;
    }
}
toOther(Number('101'), 'hex');
