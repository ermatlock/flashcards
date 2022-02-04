const Turn = require("./Turn");

class Round {
	constructor(deck) {
		this.deck = deck;
		this.turns = 0;
		this.incorrectGuesses = [];
		this.newTurn = {};
	}

	returnCurrentCard() {
		return this.deck.cards[this.turns];
	}

	takeTurn(guess) {
		this.newTurn = new Turn(guess, this.deck.cards[this.turns]);
		if (!this.newTurn.evaluateGuess()) {
			this.incorrectGuesses.push(this.deck.cards[this.turns].id);
		}
		this.turns++;
		return this.newTurn.giveFeedback();
	}

	calculatePercentCorrect() {
		const percentage = 100 - (this.incorrectGuesses.length / this.turns) * 100;
		return Math.round(percentage);
	}

	endRound() {
		const percentage = this.calculatePercentCorrect();
		console.log(
			`** Round over! ** You answered ${percentage}% of the questions correctly!`
		);
		return `** Round over! ** You answered ${percentage}% of the questions correctly!`;
	}
}

module.exports = Round;
