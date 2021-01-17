class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }
  createDeck(suits, values) {
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push(new Card(suit, value));
      }
    }
    return this.deck.length;
  }
  shuffle() {
    let counter = this.deck.length,
      temp,
      i;

    while (counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;
    }
    return this.deck;
  }

  deal() {
    let hand = [];
    while (hand.length < 5) {
      hand.push(this.deck.pop());
    }
    return hand;
  }
}

let suits = ["red", "blue", "green", "yellow"];
let value = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let deck = new Deck();
deck.createDeck(suits, value);

console.log("player1:");
console.log(deck.shuffle().slice(0, 5));
console.log("player2:");
console.log(deck.shuffle().slice(5, 10));
console.log("First card in deck:");
