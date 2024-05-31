function reverse(string){
    return Array.from(string).reverse().join("")
}


String.prototype.isPalindrome = function palindrome(){
    return this.toLowerCase() === reverse(this.toLowerCase())
}



function Phrase(content){
    this.content = content
    this.processcontent = function processcontent(){
        return this.content.toLowerCase()
    }
    this.palindrome = function palindrome (){
        return this.processcontent() === reverse(this.processcontent())
    }
}


module.exports = {Phrase}