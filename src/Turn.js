class Turn {
	constructor(answer, card) {
		this.answer = answer;
		this.card = card;
	}

	returnGuess() {
		return this.answer;
	}

}

module.exports = Turn;
