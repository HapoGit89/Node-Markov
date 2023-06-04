/** Command-line tool to generate Markov text. */

const argv = process.argv;
let fs = require ('fs')
const stuff = require('./markov.js')
const axios = require ('axios')



function makeTextPath(path){
    try {
        const data = fs.readFileSync(path, {encoding: 'utf8', flag: 'r'})
        markov = new stuff.MarkovMachine(data)
        console.log(markov.makeText())
    }
    catch(err){
        console.log("Sorry Something went wrong reading that file", err)
    }
}

async function makeTextURL(url){
    try {
        const data = await axios.get(url)
        markov = new stuff.MarkovMachine(data.data)
        console.log(markov.makeText())
    }
    catch(err){
        console.log("Sorry Something went wrong reading that URL", err)
    }
}

if (argv[2]== "url"){
    makeTextURL(argv[3])
}
else{
    makeTextPath(argv[3])
}