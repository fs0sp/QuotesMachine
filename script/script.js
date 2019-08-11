var val=[
{quote:"A champion is defined not by their wins but by how they can recover when they fall.",
author:"Serena Williams"
},{quote:"A man who dares to waste one hour of time has not discovered the value of life.",
author:"Charles Darwin"
},{quote:"However difficult life may seem, there is always something you can do and succeed at",
        author:"Stephen Hawkings"
},{quote:"The truth is you don’t know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
        author:"Eminem"
},{quote:"Don’t Let Yesterday Take Up Too Much Of Today.",
        author:"Will Rogers"
},{quote:"Never stop learning, because life never stops teaching.",
        author:"anonymous"
},{quote:"If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
        author:"Steve Jobs"

},{quote:"Creativity Is Intelligence Having Fun.",
        author:"Albert Einstein"
},{quote:"When something is important enough, you do it even if the odds are not in your favor.",
        author:"Elon Musk"
},{quote:"Some people dream of success, while others wake up and work hard at it.",
        author:"Mark Zuckerberg"
}]



function randomQuote(){
    return Math.floor(Math.random()*10);
}

function changeText(){
    var value=val[randomQuote()];

    var a=document.getElementById('author');
    a.innerHTML = value.author;

    var q=document.getElementById('quote');
    q.innerHTML = '" '+value.quote;
}