const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Round", () => {
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
		deck = new Deck([card1, card2, card3]);
		round = new Round(deck);
	});

	it("should be a function", () => {
		expect(Round).to.be.a("function");
	});

	it("should be an instance of Round", () => {
		expect(round).to.be.an.instanceof(Round);
	});

	it("should be have a deck", () => {
		expect(round.deck).to.eql(deck);
	});

	it("should be able to return the current card", () => {
		expect(round.returnCurrentCard()).to.eql(card1);
	});

	it("should have a turns counter that starts at 0", () => {
		expect(round.turn).to.eql(0);
	});

	it("should start with an empty array of incorrect guesses", () => {
		expect(round.incorrectGuesses).to.eql([]);
	});

	it("should instantiate a new turn when player guesses", () => {
		round.takeTurn("sea otter");

		expect(round.newTurn).to.be.an.instanceof(Turn);
	});

	it("should count each turn", () => {
		round.takeTurn("sea otter");
		round.takeTurn("spleen");

		expect(round.turn).to.eql(2);
	});

	it("should store incorrect guesses", () => {
		round.takeTurn("sea otter");
		round.takeTurn("spleen");
		round.takeTurn("William");

		expect(round.incorrectGuesses).to.eql([14, 12]);
	});

	it("should be able to say a guess is correct", () => {
		const result = round.takeTurn("sea otter");

		expect(result).to.eql("correct!");
	});

	it("should be able to say a guess is incorrect", () => {
		const result = round.takeTurn("pug");

		expect(result).to.eql("incorrect!");
	});

	it("should be able to calculate the correct percentage", () => {
		round.takeTurn("sea otter");
		round.takeTurn("spleen");
		round.takeTurn("William");

		result = round.calculatePercentCorrect();

		expect(result).to.equal(33.33333333333334);
	});


});
