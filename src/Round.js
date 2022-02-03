const Turn = require("./Turn");

class Round {
	constructor(deck) {
		this.deck = deck;
		this.turn = 0;
		this.incorrectGuesses = [];
		this.newTurn = {};
	}

	returnCurrentCard() {
		return this.deck.cards[0];
	}

	takeTurn(guess) {
		this.newTurn = new Turn(guess, this.deck.cards[0]);
		if (!this.newTurn.evaluateGuess()) {
			this.incorrectGuesses.push(this.deck.cards[0].id);
		}
		this.turn++;
		this.deck.cards.shift();
		return this.newTurn.giveFeedback();
	}
}

module.exports = Round;
