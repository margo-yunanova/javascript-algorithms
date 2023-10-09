function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) return false;
  return Date.parse(currentDate) <= Date.parse(expirationDate);
}
