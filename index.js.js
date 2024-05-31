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


function Translated(content,translation){
    this.content = content
    this.translation = translation
}

Translated.prototype = new Phrase()

exports = {Phrase}