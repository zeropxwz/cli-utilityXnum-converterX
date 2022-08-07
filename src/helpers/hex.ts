const hexTABLE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G']

function hexA (num: string): Array<string> {
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

function hexB (num: string[]): string {
    let res: string[] = []

    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < hexTABLE.length; j++) {
            if (Number(num[i]) === j) {
                res.push(hexTABLE[j])
            }
        }
    }
    res.reverse().shift()

    return '0x' + res.join().replace(/,/g, '')
}

export {hexA, hexB, hexTABLE}