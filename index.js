//Function to calculate tax
function calculateTax(amount) {
  if (amount === 0) {
    return 0;
  }
  if (amount < 0) {
    return amount;
  }
  return amount * 0.1;
}
console.log(calculateTax(100));
console.log(calculateTax(0));
console.log(calculateTax(-5));
console.log(calculateTax(10000000000000000000000000000000));

//Function to convert to upper case
function convertToUpperCase(text) {
  if (typeof text !== 'string') {
    return '';
  }
  return text.toUpperCase();
}
console.log(convertToUpperCase("hello world"));      
console.log(convertToUpperCase("HELLO WORLD"));      
console.log(convertToUpperCase("hElLo WoRlD"));      
console.log(convertToUpperCase(123)); 

//Function to find maximum
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}
console.log(findMaximum(12, 45));   
console.log(findMaximum(-25, -5));  
console.log(findMaximum(10, -50));  
console.log(findMaximum(8, 8));

//function to find is palindrome
function isPalindrome(word) {
  if (typeof word !== 'string') {
    return false;
  }
  
  const cleaned = word.toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   
console.log(isPalindrome("a"));       
console.log(isPalindrome(""));

//function to calculate the discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice * (1 - discountPercentage / 100);
}
console.log(calculateDiscountedPrice(100, 20));  
console.log(calculateDiscountedPrice(100, 0)); 
console.log(calculateDiscountedPrice(100, 100)); 
console.log(calculateDiscountedPrice(100, 150)); 

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };