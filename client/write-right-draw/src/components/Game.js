import React, { useState, useEffect } from "react";
import Deck from "../utils/deck";
import PlayersCards from "./PlayersCards";

const Game = () => {
  //initialize socket state

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  //initialize game state
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);
  const [drawCardPile, setDrawCardPile] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);
  const [playedCardsPile1, setPlayedCardsPile1] = useState([]);
  const [playedCardsPile2, setPlayedCardsPile2] = useState([]);

  useEffect(() => {
    let deck = new Deck();
    console.log("1", deck);
    deck.shuffle();

    let player1StartHand = new Deck(deck.cards.splice(0, 4));
    // console.log("p1", player1StartHand);

    // let player2StartHand = new Deck(deck.cards.splice(0, 4))

    const drawCardPile = deck;
    console.log("handuse", player1Hand);

    setPlayer1Hand(player1StartHand);

    setDrawCardPile(drawCardPile);
  }, []);

  //List out the players hand on the screen

  //Draw a card out of the drawCardPile

  //Also need a discard pile

  //have each element in array represent a different card on the screen [ [], [], [], [] ]

  //if that card is clicked depending on if it is noun (placed in playedCardsPile[0] || [3] etc)

  //Play a card and we can set the playedCardsPile to verb, noun or prep
  console.log("hand", player1Hand);
  console.log("first", player1Hand?.cards);
  // console.log("maybe", player1Hand.cards[0]);
  let handArr = player1Hand?.cards;

  // handArr.map((card) => console.log(card));
  return (
    <>
      {handArr.map((card) => {
        return <div>{card}</div>;
      })}
      {/* <PlayersCards player1Hand={player1Hand}></PlayersCards> */}
    </>
  );
};

export default Game;
