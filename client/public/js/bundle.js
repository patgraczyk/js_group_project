/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Calculator = __webpack_require__(/*! ./models/Calculator */ \"./client/src/models/Calculator.js\");\nconst Journeys = __webpack_require__(/*! ./models/journeys */ \"./client/src/models/journeys.js\");\nconst JourneysAllView = __webpack_require__(/*! ./views/journeys_all_view */ \"./client/src/views/journeys_all_view.js\");\nconst JourneysFormView = __webpack_require__(/*! ./views/journeys_form_view */ \"./client/src/views/journeys_form_view.js\");\nconst JourneysImpactView = __webpack_require__(/*! ./views/journeys_impact_view */ \"./client/src/views/journeys_impact_view.js\");\n\ndocument.addEventListener ('DOMContentLoaded', () => {\n  console.log('js loaded')\n  \n  const journeys = new Journeys();\n  journeys.bindEvents();\n  journeys.getData();\n  \n  const journeysForm = document.querySelector('form#add-journey-form');\n  const journeysFormView = new JourneysFormView(journeysForm);\n  journeysFormView.bindEvents();\n\n  const calclculator = new Calculator();\n  calclculator.bindEvents();\n\n}) \n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n    publish: function (channel, payload) {\n      const event = new CustomEvent(channel, {\n        detail: payload\n      });\n      document.dispatchEvent(event);\n    },\n  \n    subscribe: function (channel, callback) {\n      document.addEventListener(channel, callback);\n    }\n  };\n  \n  module.exports = PubSub;\n  \n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request.js":
/*!***************************************!*\
  !*** ./client/src/helpers/request.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n    this.url = url;\n  };\n  \n  Request.prototype.get = function () {\n    return fetch(this.url)\n      .then((response) => response.json());\n  };\n  \n  Request.prototype.post = function (payload) {\n    return fetch(this.url, {\n      method: 'POST',\n      body: JSON.stringify(payload),\n      headers: { 'Content-Type': 'application/json' }\n      // console.log(`Payload: ${payload}, posted to: ${this.url});\n      \n    })\n      .then((response) => response.json());\n  };\n\n  // ADD PUT HERE.\n  \n  Request.prototype.delete = function (id) {\n    return fetch(`${this.url}/${id}`, {\n      method: 'DELETE'\n    })\n      .then((response) => response.json());\n  };\n  \n  module.exports = Request;\n  \n\n//# sourceURL=webpack:///./client/src/helpers/request.js?");

/***/ }),

/***/ "./client/src/models/Calculator.js":
/*!*****************************************!*\
  !*** ./client/src/models/Calculator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./client/src/helpers/request.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst Calculator = function(){\nthis.conversionFactors = [];\n}\n\n// gets on hold of the data of all journeys\nCalculator.prototype.bindEvents = function (){\n  PubSub.subscribe('Journeys:data-loaded', (evt) => {\n\n    const carbonData = this.calculateTotalEmissions(evt.detail);\n    console.log(evt.detail)\n    console.log(carbonData)\n    const carnbonDataFuel = this.splitCalculationByFuel(evt.detail);\n  });\n  // PubSub.publish('Journeys:carbon-data-loaded', carbonData);\n  // PubSub.publish('Journeys:carbon-data-by-fuel', carnbonDataFuel);\n}\n\n// takes a total of all journeys and looks at the overall emissions\nCalculator.prototype.calculateTotalEmissions = function(allJourneys){\n  let emissionsTotal = 0;\n  allJourneys.forEach ((journey )=> {\n    console.log(journey)\n    emissionsTotal += this.calculateEmissions(journey);\n  })\n  return emissionsTotal;\n};\n\nCalculator.prototype.calculateTotalDistance = function(allJourneys){\n  let distanceTotal = 0;\n  allJourneys.forEach ((journey )=> {\n    distanceTotal += journey.distance\n  })\n  return distanceTotal;\n}\n\n// once form updated replace one with journey.numberOfJourneys;\nCalculator.prototype.calculateEmissions = function(journey) {\n    return journey.distance  * this.getConversionFactor(journey);\n  };\n\n// starts a function with a data of all journeys\n// for each journey if fuel type and vehicle type are right returns a conversion factor\n\nCalculator.prototype.getConversionFactor = function(journeySubmitted){\n  console.log(journeySubmitted.vehicleType)\n    if (journeySubmitted.vehicleType === 'car') {\n      // return this.carJourneyFactor(journeySubmitted)\n      return 45\n    } else if (journeySubmitted.vehicleType === 'airplane') {\n      return 0.11529\n    }\n      else if (journeySubmitted.vehicleType === 'train') {\n      // return this.trainJourneyFactor(journeySubmitted)\n      return 0.1465\n    } else if (journeySubmitted.vehicleType === 'ferry') {\n      return 0.12953\n    } else if (journeySubmitted.vehicleType === 'motorbike'){\n      return 0.12953\n    }\n  }\n\n// emissions of a car / fuel type / this part does not link yet\nCalculator.prototype.carJourneyFactor = function(journeySubmitted){\n  if (journeySubmitted.fuelType === 'Petrol') {\n    return 0.11529;\n  } else if (journeySubmitted.fuelType === 'Diesel') {\n    return 0.11145;\n  } else if (journeySubmitted.fuelType === 'Hybrid') {\n    return 2.2 +0.00622;\n  }\n};\n\nCalculator.prototype.airplaneJourneyFactor = function(journeySubmitted){\n  if (journeySubmitted.flightType === 'long-haul') {\n    return 0.11529;\n  } else if (journeySubmitted.flightType === 'international') {\n    return 0.11145;\n  }\n};\n// this is to fix\nCalculator.prototype.calculateAvarageEmissionsPerJourney = function(allJourneys){\n  let averageEmissions = 0; \n  for (journey of allJourneys) {\n    (averageEmissions += this.calculateEmissions(journey)) / allJourneys.size\n  }\n  return averageEmissions ;\n}\n\n\nCalculator.prototype.yearlyEmissionProjection = function(allJourneys){\n  return this.calculateTotalEmissions(allJourneys) * 365;\n}\n\nCalculator.prototype.yearlyDistanceProjection = function(allJourneys){\n  return this.calculateTotalDistance(allJourneys) * 365;\n}\n\nCalculator.prototype.tenYearsEmissionProjection = function(allJourneys){\n  return this.yearlyProjection(allJourneys) * 10;\n}\n\nCalculator.prototype.tenYearsDistanceProjection = function(allJourneys){\n  return this.yearlyDistanceProjection(allJourneys) * 10;\n}\n\n// creates a hash of all emissions by fuel type\nCalculator.prototype.splitCalculationByFuel = function(allJourneys) {\n  const emissionsByFuelType = {}\n  for (const journey of allJourneys) {\n    if (emissionsByFuelType[journey.fuel]) {\n      emissionsByFuelType[journey.fuel] += this.calculateEmissions(journey);\n    }\n    else {\n      emissionsByFuelType[journey.fuel] = this.calculateEmissions(journey);\n    }\n  }\n  return emissionsByFuelType;\n}\n\nCalculator.prototype.splitCalculationByModeOfTransport = function(allJourneys) {\n  const emissionsByVehicleType = {};\n\n  for (const journey of allJourneys) {\n    if (emissionsByVehicleType[journey.vehicle]) {\n      emissionsByVehicleType[journey.vehicle] += this.calculateEmissions(journey);\n    }\n    else {\n      emissionsByVehicleType[journey.vehicle] = this.calculateEmissions(journey);\n    }\n  }\n  return emissionsByVehicleType;\n}\n\nCalculator.prototype.splitCalculationByUseType= function(allJourneys) {\n  const emissionsByUseType = {};\n\n  for (const journey of allJourneys) {\n    if (emissionsByUseType[journey.useType]) {\n      emissionsByUseType[journey.useType] += this.calculateEmissions(journey);\n    }\n    else {\n      emissionsByUseType[journey.useType] = this.calculateEmissions(journey);\n    }\n  }\n  return emissionsByUseType;\n}\n\n\n\n\n\n\n\n\n// gets on hold of the data from the DB\n// CarbonCalculator.prototype.allEmissionsConversionFactors = function() {\n//   this.request\n//     .get()\n//     .then(() => {\n//       this.conversionFactors = conversionFactors;\n//     })\n//     .catch((err) => console.error(err));\n// };\n\n\nmodule.exports = Calculator;\n\n\n//# sourceURL=webpack:///./client/src/models/Calculator.js?");

/***/ }),

/***/ "./client/src/models/journeys.js":
/*!***************************************!*\
  !*** ./client/src/models/journeys.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./client/src/helpers/request.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\n\nconst Journeys = function(distance, vehicle, fuel){\nthis.request = new Request('http://localhost:3000/api/journeys')\nthis.journeys = [];\nthis.categories = [];\nthis.distance = distance;\nthis.vehicle = vehicle;\nthis.fuel = fuel;\n// this.useType = useType;\n}\n\nJourneys.prototype.bindEvents = function () {\n    PubSub.subscribe('Form-view:journey-submitted', (event) => {\n        this.postJourney(event.detail);\n        console.log(`journeys received event: ${event.detail}`);\n    });\n\n};\n\nJourneys.prototype.getData = function () {\n    this.request.get()\n      .then((journeys) => {\n        PubSub.publish('Journeys:data-loaded', journeys);\n        console.log(`Journeys published all data: ${journeys}`)\n      })\n      .catch(console.error);\n};\n\n// ** GARY this is a simple GET request, this will be to extract categories, edit as you wish, uncomment when you want\n\n// Journeys.prototype.all = function() {\n//   this.request\n//     .get()\n//     .then((categoriesList) => {\n//       this.categories = categoriesList;\n//       PubSub.publish('Form-view:all-data-loaded', this.categories);\n//     })\n//     .catch((err) => console.error(err));\n// };\n\nJourneys.prototype.postJourney = function (newJourney) {\n    this.request.post(newJourney)\n      .then((journeys) => {\n        PubSub.publish('Journeys:data-loaded', journeys);\n      })\n      .catch(console.error);\n};\n\n//  *GARY thisis a simple UPDATE request, edit as you wish\n// Journeys.prototype.update = function(editedJourney) {\n//   const id = editedJourney._id;\n//   this.request\n//     .put(editedJourney, id)\n//     .then((allJourneys) => {\n//       this.journeys = allJourneys;\n//       PubSub.publish('Journeys:all-data-loaded', this.journeys);\n//     })\n//     .catch((err) => console.error(err));\n// };\n//\n// This is a simple delete request, edit as you wish\n// BucketList.prototype.delete = function(itemToDelete) {\n//   const id = itemToDelete._id;\n//   this.request\n//     .delete(id)\n//     .then((allJourneys) => {\n//       this.journeys = allJourneys;\n//       PubSub.publish('Journeys:all-data-loaded', this.journeys);\n//     })\n//     .catch((err) => console.error(err));\n// };\n\n\nmodule.exports = Journeys;\n\n\n// publish to 'Form-view:all-data-loaded'\n// subscribe to 'Form-view:journey-submitted'\n//  request GET\n//  request POST\n// publish to 'Journeys:all-data-loaded'\n\n\n//# sourceURL=webpack:///./client/src/models/journeys.js?");

/***/ }),

/***/ "./client/src/views/journeys_all_view.js":
/*!***********************************************!*\
  !*** ./client/src/views/journeys_all_view.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst JourneysAllView = function() {\n\n}\n\nmodule.exports = JourneysAllView;\n\n\n//subscribe to: 'Journeys:all-data-loaded'\n\n\n//# sourceURL=webpack:///./client/src/views/journeys_all_view.js?");

/***/ }),

/***/ "./client/src/views/journeys_form_view.js":
/*!************************************************!*\
  !*** ./client/src/views/journeys_form_view.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst JourneysFormView = function(form){\n    this.form = form;\n};\n\n// subscribes to 'Form-view:all-data-loaded'\n// publish to 'Form-view:journey-submitted'\n\n\n\nJourneysFormView.prototype.bindEvents = function () {\n  this.form.addEventListener('submit', (event) => {\n    this.handleSubmit(event);\n    console.log(`event submitted: ${event}`)\n  });\n};\n\nJourneysFormView.prototype.handleSubmit = function (event) {\n  event.preventDefault();\n  const newJourney = this.createJourney(event.target);\n  console.log(`new journey object created: ${newJourney}`)\n  PubSub.publish('Form-view:journey-submitted', newJourney);\n  console.log(`journey published: ${newJourney}`)\n  event.target.reset();\n};\n\nJourneysFormView.prototype.createJourney = function (form) {\n  const newJourney = {\n    distance: form.distance.value,\n    vehicleType: form.vehicleType.value,\n    fuelType: form.fuelType.value\n  };\n  console.log(`new journey object: ${newJourney}`)\n  return newJourney;\n};\n\nmodule.exports = JourneysFormView;\n\n//# sourceURL=webpack:///./client/src/views/journeys_form_view.js?");

/***/ }),

/***/ "./client/src/views/journeys_impact_view.js":
/*!**************************************************!*\
  !*** ./client/src/views/journeys_impact_view.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\n\nconst JourneysImpactView = function(){\n\n}\n\nmodule.exports = JourneysImpactView;\n// main display\n// subscribe to: 'Journeys:all-data-loaded'\nJourneysImpactView.prototype.bindEvents = function(){\n  PubSub.subscribe('Journeys:carbon-data-loaded')\n  PubSub.subscribe('Journeys:carbon-data-by-fuel')\n}\n\n\n//  \n\n// text content, grab, display\n\n\n//# sourceURL=webpack:///./client/src/views/journeys_impact_view.js?");

/***/ })

/******/ });