const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");

describe("Game", () => {
	beforeEach(() => {
		game = new Game();
	});

	it("should be a function", () => {
		expect(Game).to.be.a("function");
	});

	it("should be an instance of Round", () => {
		expect(game).to.be.an.instanceof(Game);
	});

	it("should store the current round", () => {
		expect(game.currentRound).to.eql({});
	});
});
