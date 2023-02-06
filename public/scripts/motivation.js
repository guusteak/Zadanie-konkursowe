let ooo;
let quote;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

const feczunio = async()=>{
    await fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data=>{
        ooo = data;
    })
};
const generateQuote = async() =>{
    await feczunio();
    const rand = getRandomInt(0,1640);
    quote = ooo[rand];
}

const postQuote = async() =>{
    await generateQuote();
    console.log(quote);
    const para = document.createElement('div');
    const node = document.createTextNode(`${quote.text} ~${quote.author}`);
    const parent = document.querySelector('.motivationalSpeech');
    para.classList.add('quote');
    para.appendChild(node);
    parent.appendChild(para);
}
postQuote();