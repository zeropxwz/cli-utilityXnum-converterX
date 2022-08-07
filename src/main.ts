import hex from "./helpers/hex"



function toDecim (num: string): void {

    var sys: string | number = num.match(/(^0b|0x)/g)!.join()
    var num = num.replace(/(^0b|0x)/g, '')

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
            ? res += Number(num[ind])      * Math.pow(Number(sys), exp)
            : res += Number(hex(num)[ind]) * Math.pow(Number(sys), exp)

        exp--
        ind++
    }

    console.log(res)
}
toDecim('0b10111')

function toOther (num: string, sys: string): void {

}


