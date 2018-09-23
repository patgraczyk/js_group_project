const assert = require('assert');
const Calculator = require('../models/calculator.js');
const Journeys = require('../models/journeys.js');

describe("Calculator", function(){

  let journey1;
  let journey2;
  // let journey3;
  // let journey4;

  beforeEach(function(){
    journey1 = new Journeys(30, 'car', 'diesel');
    journey2 = new Journeys(30, 'motorbike', 'petrol');
    // journey3 = new Journey(100, 'ferry', 'petrol');
    // journey4 = new Journey();

    calculator = new Calculator();
    // check if capital letter
  })

  it("should calculate emissions of a single journey", function(){
    const actual = calculator.calculateEmissions(journey1);
    assert.strictEqual(actual, 3.3434999999999997);
  })

  it("should get the conversion factor of a car", function(){
    const actual = calculator.getConversionFactor(journey1);
    assert.strictEqual(actual, 0.11145);
  })

  it("should get the conversion factor of a motorbike", function(){
    const actual = calculator.getConversionFactor(journey2);
    assert.strictEqual(actual, 0.12953);
  })

  it("should get the total emissions of all journeys", function(){
    const actual = calculator.calculateTotalEmissions([journey1, journey2]);
    assert.strictEqual(actual, 7.2294)
  })

  it('should divide emissions by fuel type', function(){
    const actual = calculator.splitCalculationByFuel([journey1, journey2]);
    assert.strictEqual(actual, 7.2294)
  })

  it('should be able to calculate average emissions per journey', function(){
    const actual = calculator.calculateAvarageEmissionsPerJourney([journey1, journey2]);
    assert.strictEqual(actual, 7.2294)
  })

  it('should be able to calculate yearly emissions projections', function(){
    const actual = calculator.yearlyEmissionProjection([journey1, journey2]);
    assert.strictEqual(actual, 2638.731)
  })

  it('should be able to calculate total distance', function(){
    const actual = calculator.calculateTotalDistance([journey1, journey2]);
    assert.strictEqual(actual, 60);
  })

  it('should be able to calculate yearly distance projections', function(){
    const actual = calculator.yearlyDistanceProjection([journey1, journey2]);
    assert.strictEqual(actual, 21900);
  })

  it('should be able to calculate ten year distance projections', function(){
    const actual = calculator.tenYearsDistanceProjection([journey1, journey2]);
    assert.strictEqual(actual, 219000);
  })

});
