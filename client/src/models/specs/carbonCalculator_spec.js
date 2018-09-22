const assert = require('assert');
const carbonCalculator = require('../carbonCalculator.js');
const Journeys = require('../models/journeys.js');

describe('carbonCalculator', function(){

  let journey1;
  let journey2;
  let journey3;
  let journey4;

  beforeEach(function(){
    journey1 = new Journey();
    journey2 = new Journey();
    journey3 = new Journey();
    journey4 = new Journey();

    carbonCalculator = new CarbonCalculator();
    // check if capital letter
  })

  it('should calculate emissions of a single journey', function(){
    const actual = carbonCalculator.calculateEmissions(journey1);
    assert.strictEqual(actual, 456);
  })

})
