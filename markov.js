/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const chains = {}

    for (let i = 0; i< this.words.length; i++){
        if (!chains[`${this.words[i]}`]){
            if (i< this.words.length-1){
            chains[`${this.words[i]}`] = [`${this.words[i+1]}`]
            }
            else {
                chains[`${this.words[i]}`] = [null]
            }
        }
        else {
            if (i< this.words.length-1){
                chains[`${this.words[i]}`].push(this.words[i+1])
                }
                else {
                    chains[`${this.words[i]}`].push(null)
                }
        }

   }
   return chains
    
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    const chain = this.makeChains()
    const chainkeys = Object.keys(chain)
    const chainLen = chainkeys.length
    let word = chainkeys[Math.floor(Math.random()*chainLen)]
    let nextWord = chain[word][Math.floor(Math.random()*chain[word].length)]
    let text = `${word}`
    
    while(nextWord != null){
        text = text + " " + nextWord
        word = nextWord
        nextWord = chain[word][Math.floor(Math.random()*chain[word].length)]  
    }
    return text
    
    }
}

