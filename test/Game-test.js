const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const Game = require("../src/Game");

describe("Game", () => {
	beforeEach(() => {
		game = new Game();
	});

	it("should be a function", () => {
		expect(Game).to.be.a("function");
	});

	it("should be an instance of Game", () => {
		expect(game).to.be.an.instanceof(Game);
	});

	it("should store the current round", () => {
		expect(game.currentRound).to.eql({});
	});

	it("should start game with a round instance with a deck of cards", () => {
		game.start();
		const round = game.currentRound;

		expect(round).to.be.an.instanceof(Round);
		expect(round.deck).to.be.an.instanceof(Deck);
		expect(round.deck.cards.length).to.eql(30);
	});
});
