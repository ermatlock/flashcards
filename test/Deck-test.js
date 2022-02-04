const chai = require("chai");
const expect = chai.expect;

const data = require("../src/data");
const prototypeQuestions = data.prototypeData;
const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Deck", () => {
	beforeEach(() => {
		cards = prototypeQuestions.map(
			card => new Card(card.id, card.question, card.answers, card.correctAnswer)
		);
		deck = new Deck(cards);
	});

	it("should be a function", () => {
		expect(Deck).to.be.a("function");
	});

	it("should be an instance of Deck", () => {
		expect(deck).to.be.an.instanceof(Deck);
	});

	it("should have an array of cards", () => {
		expect(deck.cards).to.deep.equal(cards);
	});

	it("should know how many cards are in the deck", () => {
		deck.countCards();

		expect(deck.countCards()).to.equal(30);
	});
});
