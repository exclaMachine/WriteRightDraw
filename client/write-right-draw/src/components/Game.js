import React, {useState, useEffect } from 'react'
import Deck from '../utils/deck'


const Game = () => {

    //initialize game state
    const[player1Deck, setPlayer1Deck] = useState([])
    const[player2Deck, setPlayer2Deck] = useState([])
    const[drawCardPile, setDrawCardPile] = useState([])

    useEffect(() => {
        let deck = new Deck()
        // console.log('1', deck);
        deck.shuffle()

        let player1StartHand = new Deck(deck.cards.splice(0, 7))
        let player2StartHand = new Deck(deck.cards.splice(0, 7))
        // console.log('p1', player1Deck)
        // console.log('p2', player2Deck)
        const drawCardPile = deck
        // console.log('draw', drawCardPile)

    })

  return (
    <div>
        Game
    </div>
  )
}

export default Game
