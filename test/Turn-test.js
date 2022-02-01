const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Turns');

describe('Turns', function() {

  it('should be a function', function() {
    const card = new Turns();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });
