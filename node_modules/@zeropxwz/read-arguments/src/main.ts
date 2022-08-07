


/**      signature*/
function readArguments (args: Array<string>): Array<string>
/**      signature*/



/**      implement */
function readArguments (args: Array<string>): Array<string> {

    const result: Array<string> = []

    for (let i = 2; i < process.argv.length; i++) {
        result.push(process.argv[i])
    }

    return result
}

module.exports = readArguments

