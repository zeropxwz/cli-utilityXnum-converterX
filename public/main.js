"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readArguments = require('@zeropxwz/read-arguments');
const hex_1 = require("./helpers/hex");
const args = readArguments(process.argv);
let sysA = args[0].match(/^(0x|0b|0d)/g).join();
let sysB = args[1];
let num = args[0].replace(/^(0x|0b|0d)/, '');
class Converter {
    static toDecim(num, sys) {
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
                : res += Number((0, hex_1.hexA)(num)[ind]) * Math.pow(Number(sys), exp);
            exp--;
            ind++;
        }
        console.log(res);
    }
    static toOther(num, sys) {
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
                console.log((0, hex_1.hexB)(res.split('|')));
                break;
        }
    }
}
function convert(from, to, num) {
    if (to === '0b' || to === '0x') {
        Converter.toOther(Number(num), to);
    }
    else {
        Converter.toDecim(num, from);
    }
}
convert(sysA, sysB, num);
