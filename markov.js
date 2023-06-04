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
    
  }
}

test = new MarkovMachine("This is nice said the mouse to the mouse house in which she lived as long as in her life it was a good mouse life thats what the mouse said she did")

console.log(test.makeChains())