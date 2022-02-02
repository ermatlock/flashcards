const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Deck", () => {
	beforeEach(() => {
		card1 = new Card(
			1,
			"What is Robbie's favorite animal",
			["sea otter", "pug", "capybara"],
			"sea otter"
		);
		card2 = new Card(
			14,
			"What organ is Khalid missing?",
			["spleen", "appendix", "gallbladder"],
			"gallbladder"
		);
		card3 = new Card(
			12,
			"What is Travis's middle name?",
			["Lex", "William", "Fitzgerald"],
			"Fitzgerald"
		);
	});

	it("should be a function", () => {
		const deck = new Deck();
		expect(Deck).to.be.a("function");
	});

	it("should be an instance of Deck", () => {
		const deck = new Deck();
		expect(deck).to.be.an.instanceof(Deck);
	});

	it("should have an array of cards", () => {
		const deck = new Deck([card1, card2, card3]);

		expect(deck.cards).to.deep.equal([card1, card2, card3]);
	});

	it("should know how many cards are in the deck", () => {
		const deck = new Deck([card1, card2, card3]);

		deck.countCards();

		expect(deck.countCards()).to.equal(3);
	});
});
