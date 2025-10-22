let a = document.getElementById("firstCard");
let b = document.getElementById("secondCard");
let sumDisplay = document.getElementById("cardSum");
let btn1 = document.getElementById("getCard1");
let btn2 = document.getElementById("newCard");
let message = document.getElementById("message");
let thirdDiv = document.getElementById("thirdCard");
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let cards = [], cardSum=0;

function checkWinner() {
  if (cardSum < 21) {
    message.textContent = "Pick a new card n best of luck";
    message.style.color = "#ffe5b0";
    message.style.fontSize = "18px";
    message.style.paddingTop = "10px";
  } else if (cardSum === 21) {
    message.textContent = "Perfect, You got Jackpot";
    hasBlackJack = true;
    message.style.color = "green";
  } else {
    message.textContent = "Retry later, You've lost";
    isAlive = false;
    message.style.color = "red";
  }

  if (!isAlive) {
    return;
  }
}

function startGame() {
  let card1 = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  let card2 = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  cardSum = card1 + card2;
  cards.push(card1);
  cards.push(card2);
  thirdDiv.textContent = "Cards ";
  displayCards(card1);
  displayCards(card2);
  a.textContent = "First Card " + card1;
  b.textContent = "Second Card " + card2;
  // sum = sum + cardSum;
  sumDisplay.textContent = "Strength " + cardSum;
  checkWinner();
}

function displayCards(val) {
  thirdDiv.textContent += val + " ";

  // return thirdDiv.textContent;
}
function newCard() {
  let c = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  cardSum += c;
  sumDisplay.textContent = "Strength " + cardSum;

  cards.push(c);

  displayCards(c);

  checkWinner();
}

function newGame() {
  sum = 0;
  hasBlackJack = false;
  isAlive = true;

  a.textContent = "First card ";
  b.textContent = "Second card ";
  thirdDiv.textContent = "Cards ";
  sumDisplay.textContent = "Strength ";
  message.textContent = "New game started, Best of Luck!";
}
