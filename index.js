let sentenceElem = document.getElementById("sentence");
const amazingSentences = [
  "You are the best person ever",
  "HAPPY BIRTHDAY!!!!",
  "You make my day better",
  "You are amazing",
  "HAPPY BIRTHDAY!!!!",
  "You are super nice",
  "HAPPY BIRTHDAY!!!!",
  "You are very very cool",
  "You are the best JJK player I know",
  "You are ultra tuff",
  "HAPPY BIRTHDAY!!!!",
  "You are skibidi cool",
  "You make everyone happy",
  "HAPPY BIRTHDAY!!!!"
];
function changeSentenceRandomly() {
  let fontRange = [24, 48]
  let randomIndex = Math.floor(Math.random() * amazingSentences.length);
  sentenceElem.textContent = amazingSentences[randomIndex];
  sentenceElem.style.fontSize = `${fontRange[Math.floor(Math.random() * fontRange.length)]}px`;
}

setInterval(changeSentenceRandomly, 500);

const decorationImages = [
  "images/cake.svg",
  "images/cupcake.svg",
  "images/candle.svg"
];

function spawnDecoration() {
  const img = document.createElement("img");
  img.src = decorationImages[Math.floor(Math.random() * decorationImages.length)];
  img.className = "decoration";
  const size = 220 + Math.random() * 100;
  img.style.width = `${size}px`;
  img.style.left = `${Math.random() * (window.innerWidth - size)}px`;
  img.style.top = `${Math.random() * (window.innerHeight - size)}px`;
  document.body.appendChild(img);
  setTimeout(() => img.remove(), 3000);
}

function scheduleNextDecoration() {
  const delay = 2000 + Math.random() * 4000;
  setTimeout(() => {
    spawnDecoration();
    scheduleNextDecoration();
  }, delay);
}

scheduleNextDecoration();
