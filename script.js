

//fetch api return promise
//for checking status code in the range of 200-299 and true
// let p=fetch(" https://type.fit/api/quotes")
// p.then((value1)=>{
//     console.log(value1.status)
//     console.log(value1.ok)
//     return value1.json()
// }).then((value2)=>{
// console.log(value2)
// })



let p = fetch("https://type.fit/api/quotes");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const body=document.getElementById("body")
const btn=document.getElementById("btn")
const btn1=document.getElementById("btn1")


function displayQuote() {
  p.then((response) => {
    return response.json();
  }).then((data) => {
    const quotes = data;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    console.log(randomQuote);

    // Update the text and author of the quote
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = randomQuote.author || "Unknown";

    // Generate a random color code and update the background color of the quote
   funcColor(quoteText,quoteAuthor,body,btn,btn1);

  }).catch((error) => {
    console.log(error);
  });
}

displayQuote();




function funcColor(quoteText,quoteAuthor,body,btn,btn1){
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    quoteText.style.color = randomColor;
    quoteAuthor.style.color=randomColor;
    body.style.backgroundColor=randomColor;
    btn.style.backgroundColor = randomColor;
    btn1.style.backgroundColor = randomColor;

}


//for refresh the page
function refresh(){
    location.reload();
}

//for copy
function copy(){
    navigator.clipboard.writeText(quoteText.textContent)
    btn1.innerHTML="Copied!!"
}