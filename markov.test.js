const stuff = require('./markov.js')

describe ("check markovMachine class", function(){
    test('new Markov Instance should have words items made up of words in constructor data', function(){
        const testex = new stuff.MarkovMachine("This is a classy test we have")
        expect(testex.words).toBeInstanceOf(Array)
        expect("This is a classy test we have").toContain(testex.words[Math.floor(Math.random()*testex.words.length)])
    }) })
    test ('markovMachine output should follow markov rules', function(){
        const testex2 = new stuff.MarkovMachine("This is a very very classy test we have here Mister Mouse")
        const result = testex2.makeText()
        const resultArray = result.split(' ')
        const randNum = Math.floor(Math.random()* resultArray.length) 
        const word = resultArray[randNum]
        expect(testex2.makeChains()[`${word}`]).toContain(resultArray[randNum+1])
    })