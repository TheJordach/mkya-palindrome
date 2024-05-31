const assert = require("assert")
const {Phrase} = require("../index.js")

describe("Phrase", function(){

    //Testing the .palindrome method
    describe("#palindrome",function(){

        it("should return false for a non-palindrome", function(){
            let nonPlalindrome = new Phrase("apple")
            assert(!nonPlalindrome.palindrome())
        });

        it("should return true for a plain palindrome", function(){
            let aPlalindrome = new Phrase("racecar")
            assert(aPlalindrome.palindrome())
        });

        it("should return true for a mixed-case palindrome", function(){
            let mixedCase = new Phrase("RaceCar")
            assert(mixedCase.palindrome())
        });
        it("should return true for palindrome with ponctuation",function(){
            let ponctuatedPalindrome = new Phrase("Madam, I'm Adam.")
            expect(ponctuatedPalindrome.palindrome()).to.be.true
        });
        
        
        // Testing the .letters method
        describe("#letters",function(){
            it("should return only letters", function(){
                let punctuatedPalindrome = new Phrase("Madam, I'm Adam.")
                let result = punctuatedPalindrome.letters();
                assert.strictEqual(result,"MadamImAdam") 
            })
        })
    })
})