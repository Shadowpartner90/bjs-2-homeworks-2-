"use strict";

const solveEquation = (a, b, c) => {
  let arr = [];
  let d = (b ** 2) - (4 * a * c);
   if (d == 0) {
    let root1 = -b / (2 * a);
    arr.push(root1)
  } else if (d > 0) {
    let root2 = (-b + Math.sqrt(d)) / (2 * a);
    let root3 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root2, root3)
  }
  return arr
};



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  if ((isNaN(percent)) || (isNaN(contribution)) || (isNaN(countMonths)) || (isNaN(amount))) {
    return false;
  };

  const interestRate = percent / 100 / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate)**countMonths) - 1)));
  const totalAmount = Math.round(monthlyPayment * countMonths * 100) / 100;

  return totalAmount;
};

