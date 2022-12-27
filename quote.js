var arrayOfQuotes = [
    {
        "author":"Jin Robn",
        "quote":" beware what you became in pursuit of what you want."
    
    },
    {
        "author":"Confucius.",
        "quote":" silence is a true friend never betray."
    
    },
    {
        "author":"Frank Sinatra",
        "quote":" the best revenge is massive success."
    
    },
    
    {
        "author":"Wayne Gratzy",
        "quote":" you miss 100% of the shoots you don't take."
    
    }
]
function randomSelector(arrayLength){
    return Math.floor(Math.random()*arrayLength);
}

function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML ='"'+ arrayOfQuotes[randomNumber].quote+ '"';
    document.getElementById("authorOutput").innerHTML= "-"  + arrayOfQuotes[randomNumber].author;

}