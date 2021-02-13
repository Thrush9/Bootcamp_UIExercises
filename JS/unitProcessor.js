function findUnitRate(units) {
  if (units > 100) return 15;
  else return 10;
}

console.log(findUnitRate(50));

function calculateAmount(units, rate) {
  rate = findUnitRate(units);
  return units * rate ;
}

console.log(calculateAmount(150, findUnitRate));

function findTotalAmount(units, unitRate, amount) {
  unitRate = findUnitRate(units);
  amount = calculateAmount(units);
  return "unit Rate is " + unitRate + "and  Amount to be paid " +amount;
}

console.log(findTotalAmount(120, findUnitRate, calculateAmount));
