const assert = require('assert');
const Calculator = require('../models/calculator.js');
const Journeys = require('../models/journeys.js');

describe("Calculator", function(){

  let journey1;
  // let journey2;
  // let journey3;
  // let journey4;

  beforeEach(function(){
    journey1 = new Journey("car", 30, "petrol");
    // journey2 = new Journey();
    // journey3 = new Journey();
    // journey4 = new Journey();

    calculator = new Calculator();
    // check if capital letter
  })

  it("should calculate emissions of a single journey", function(){
    const actual = calculator.calculateEmissions(journey1);
    assert.strictEqual(actual, 456);
  })

});
