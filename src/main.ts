



const hexTABLE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G',]

function hexTranslate (num: string): Array<string> {
    var x: Array<string> = [] 

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
    var num 
        = num.replace(/(^0b|0x)/g, '')

    switch (sys) {
        case '0b':
            sys = 2

            var exp: number = num.length - 1
            var ind: number = 0
        
            var res: number = 0
        
            while (exp >= 0) {
                res += Number(num[ind]) * Math.pow(Number(sys), exp)
        
                exp--
                ind++
            }
        
            console.log(res)
            break
        case '0x':
            sys = 16

            const hexNUM = hexTranslate(num)

            var exp: number = num.length - 1
            var ind: number = 0
        
            var res: number = 0
        
            while (exp >= 0) {
                res += Number(hexNUM[ind]) * Math.pow(Number(sys), exp)
        
                exp--
                ind++
            }
        
            console.log(res)
            break
    }



}

toDecim('0xA9')




