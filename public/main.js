"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hex_1 = __importDefault(require("./helpers/hex"));
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
toDecim('0b10111');
function toOther(num, sys) {
}
