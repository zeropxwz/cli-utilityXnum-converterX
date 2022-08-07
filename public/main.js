"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumConver = void 0;
const hex_1 = require("./helpers/hex");
class Parser {
    static parse(n) {
        const result = ['0d', ''];
        let sys = '';
        let num = '';
        if (n.search(/(0b|0x)/) === 0) {
            sys = n.match(/(0b|0x)/).join().replace(/(,(0b|0x))/, '');
            num = n.replace(/(0b|0x)/, '');
            result[0] = sys;
            result[1] = num;
        }
        else {
            result[1] = n;
        }
        return result;
    }
}
class Converter extends Parser {
    static toBin(n) {
        let [sys, num] = this.parse(n);
        if (sys === '0b') {
            return new Error('convert from same type');
        }
        if (sys === '0x') {
            num = String(this.toDec(`0x${num}`));
        }
        let res = '';
        while (Number(num) !== 0) {
            res += String(Number(num) % 2) + '|';
            num = String(Math.floor(Number(num) / 2));
        }
        return res.split('|').reverse().join().replace(/,/g, '');
    }
    static toHex(n) {
        let [sys, num] = this.parse(n);
        if (sys === '0x') {
            return new Error('convert from same type');
        }
        if (sys === '0b') {
            num = String(this.toDec(`0b${num}`));
        }
        let res = '';
        while (Number(num) !== 0) {
            res += String(Number(num) % 16) + '|';
            num = String(Math.floor(Number(num) / 16));
        }
        return (0, hex_1.hexB)(res.split('|'));
    }
    static toDec(n) {
        let [sys, num] = this.parse(n);
        if (sys === '0d') {
            return new Error('convert from same type');
        }
        switch (sys) {
            case '0b':
                sys = String(2);
                break;
            case '0x':
                sys = String(16);
                break;
        }
        let exp = num.length - 1;
        let ind = 0;
        let res = 0;
        while (exp >= 0) {
            sys === String(2)
                ? res += Number(num[ind]) * Math.pow(Number(sys), exp)
                : res += Number((0, hex_1.hexA)(num)[ind]) * Math.pow(Number(sys), exp);
            exp--;
            ind++;
        }
        return String(res);
    }
}
exports.NumConver = Converter;
