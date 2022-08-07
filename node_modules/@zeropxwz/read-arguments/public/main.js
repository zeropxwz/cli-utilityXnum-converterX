"use strict";
/**      signature*/
/**      implement */
function readArguments(args) {
    const result = [];
    for (let i = 2; i < process.argv.length; i++) {
        result.push(process.argv[i]);
    }
    return result;
}
module.exports = readArguments;
