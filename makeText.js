/** Command-line tool to generate Markov text. */

const argv = process.argv;
let fs = require ('fs')
const stuff = require('./markov.js')
const axios = require ('axios')

try {
    const data = fs.readFileSync(argv[2], {encoding: 'utf8', flag: 'r'})
    markov = new stuff.MarkovMachine(data)
    console.log(markov.makeText())
}
catch(err){
    console.log("Sorry Something went wrong reading that file", err)

}