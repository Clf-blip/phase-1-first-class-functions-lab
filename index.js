// Code your solution in this file!
// Returns the first two drivers from the array
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

// Returns the last two drivers from the array
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

// Array containing both functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that returns a function to multiply fares
const createFareMultiplier = (multiplier) => {
  return (fare) => fare * multiplier;
};

// Doubles the fare
const fareDoubler = createFareMultiplier(2);

// Triples the fare
const fareTripler = createFareMultiplier(3);

// Function that selects different drivers based on the function passed as argument
const selectDifferentDrivers = (drivers, driverFunction) => driverFunction(drivers);

// Export functions for testing
module.exports = { 
  returnFirstTwoDrivers, 
  returnLastTwoDrivers, 
  selectingDrivers, 
  createFareMultiplier, 
  fareDoubler, 
  fareTripler, 
  selectDifferentDrivers 
};

