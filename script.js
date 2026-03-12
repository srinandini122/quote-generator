const quotes = [
"Believe in yourself",
"Never give up",
"Dream big work hard",
"Success comes with patience",
"Stay positive and strong"
];

function generateQuote(){

let random = Math.floor(Math.random()*quotes.length);

document.getElementById("quote").innerText = quotes[random];

}