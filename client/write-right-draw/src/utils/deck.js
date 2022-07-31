const SUITS = [
  { Noun: "Tool or Toy" },
  { Noun: "Animal or Mythical Creature" },
  { Noun: "Fruit or Vegetable" },
  { Noun: "Hero or Villain" },
  { Verb: "Relaxing or Movement" },
  { Verb: "Loud or Silent" },
  { Preposition: "Above or Below" },
  { Preposition: "Before or After" },
];
const VALUES = [1, 2];

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  get numberOfCards() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get color() {
    return this.suit === { Noun: "Tool or Toy" } ||
      this.suit === { Noun: "Animal or Mythical Creature" }
      ? "black"
      : "red";
  }

  getHTML() {
    const cardDiv = document.createElement("div");
    cardDiv.innerText = this.suit;
    cardDiv.classList.add("card", this.color);
    cardDiv.dataset.value = `${this.value} ${this.suit}`;
    return cardDiv;
  }
}

function freshDeck() {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(suit, value);
    });
  });
}
