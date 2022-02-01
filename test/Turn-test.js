const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card;

	beforeEach(function() {
	    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
	});

  it('should be a function', () => {
    const turn = new Turn('pug', card);
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn('pug', card);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to return a guess', () => {
    const turn = new Turn('pug', card);

    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should be able to return a card', () => {
    const turn = new Turn('pug', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate a correct guess', () => {
    const turn = new Turn('object', card);

    expect(turn.evaluateGuess()).to.equal(true)
  });

  it('should be able to evaluate an incorrect guess', () => {
    const turn = new Turn('array', card);

    expect(turn.evaluateGuess()).to.equal(false)
  });



});
