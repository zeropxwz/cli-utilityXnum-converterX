



const hexTABLE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G',]

function hex (num: string): Array<string> {
    const x: Array<string> = [] 

    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < hexTABLE.length; j++) {
            if (num[i] === hexTABLE[j]) {
                x.push(`${j}`)
            }
        }
    }

    return x
}


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

function toOther (num: string): void {

}


