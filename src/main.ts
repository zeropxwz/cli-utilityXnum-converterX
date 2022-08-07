import {hex, hexTABLE} from "./helpers/hex"





class Parser {

    static parse (n: string): [string, string] {

        const result: [string, string] = ['0d', '']

        let sys: string = ''
        let num: string = ''

        if (n.search(/(0b|0x)/) === 0) {
            sys = n.match(/(0b|0x)/)!.join().replace(/(,(0b|0x))/, '')
            num = n.replace(/(0b|0x)/, '')

            result[0] = sys
            result[1] = num
        }
        else {
            result[1] = n
        }
    
        return result
    }
}

class Converter extends Parser {

    static toBin (n: string): string | object {

        let [sys, num] = this.parse(n)

        if (sys === '0b') {
            return new Error('convert from same type')
        }

        if (sys === '0x') {
            num = String(this.toDec(num))
        }

        let res: string = ''   

        while (Number(num) !== 0) {
            res += String(Number(num) % 2) + '|'
            num  = String(Math.floor(Number(num)  / 2))
        }
    
        return res.split('|').reverse().join().replace(/,/g, '')
    }

    static toHex (n: string) {

    }

    static toDec(n: string): string | object {

        let [sys, num] = this.parse(n)

        if (sys === '0d') {
            return new Error('convert from same type')
        }

        switch (sys) {
            case '0b':
                sys = String(2)
                break
            case '0x':
                sys = String(16)
                break
        }

        let exp: number = num.length - 1
        let ind: number = 0
    
        let res: number = 0
    
        while (exp >= 0) {
            
            sys === String(2)
                ? res += Number(num[ind])      * Math.pow(Number(sys), exp)
                : res += Number(hex(num)[ind]) * Math.pow(Number(sys), exp)
    
            exp--
            ind++
        }

        return String(res)
    }
}


console.log(
    Converter.toBin('10')
)












