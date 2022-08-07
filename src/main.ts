const readArguments = require('@zeropxwz/read-arguments')

import {hexA, hexB, hexTABLE} from "./helpers/hex"



const args: Array<string> = readArguments(process.argv)

let sysA: string = args[0].match(/^(0x|0b)/g)!.join() 
let sysB: string = args[1]
let num:  string = args[0].replace(/^(0x|0b)/, '')

class Converter {

    static toDecim (num: string, sys: string | number): void {
        switch (sys) {
            case '0b':
                sys = 2
                break
            case '0x':
                sys = 16
                break
        }

        var exp: number = num.length - 1
        var ind: number = 0

        var res: number = 0

        while (exp >= 0) {
            
            sys === 2 
                ? res += Number(num[ind])       * Math.pow(Number(sys), exp)
                : res += Number(hexA(num)[ind]) * Math.pow(Number(sys), exp)

            exp--
            ind++
        }

        console.log(res)
    }
    static toOther (num: number, sys: string) {
        var res: string = ''
        
        switch (sys) {
            case 'bin':
                while (num !== 0) {
                    res += String(num % 2) + '|'
                    num  = Math.floor(num / 2)
                }
            
                console.log(res.split('|').reverse().join().replace(/,/g, ''))
                break
            case 'hex':
                while (num !== 0) {
                    res += String(num % 16) + '|'
                    num  = Math.floor(num / 16)
                }
    
                console.log(hexB(res.split('|')))
                break
        }
    }
}

function convert (from: string, to: string, num: string): void {

    if (to === '0b' || to === '0x') {
        Converter.toOther(Number(num), to)
    }
    else {
        Converter.toDecim(num, from)
    }

}

convert(sysA, sysB, num)













