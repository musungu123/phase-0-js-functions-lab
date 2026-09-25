//Function to calculate tax
function calculateTax(amount) {
  // Return 0 if the amount is less than or equal to 0 (handles 0 and negative numbers)
  if (amount <= 0) {
    return 0;
  }
  
  // Calculate 10% tax for positive amounts
  return amount * 0.1;
}
console.log(calculateTax(100));
console.log(calculateTax(0));
console.log(calculateTax(-50));
console.log(calculateTax(10000000000000000000000000000000));

//Function to convert to upper case
function convertToUpperCase(text) {
  // Check if input is a valid string; return empty string or non-string inputs safely
  if (typeof text !== 'string') {
    return '';
  }
  
  return text.toUpperCase();
}
console.log(convertToUpperCase("hello world"));      // "HELLO WORLD" (lowercase string)
console.log(convertToUpperCase("HELLO WORLD"));      // "HELLO WORLD" (already uppercase)
console.log(convertToUpperCase("hElLo WoRlD"));      // "HELLO WORLD" (mixed case)
console.log(convertToUpperCase("user_123! @#$"));
console.log(convertToUpperCase(123)); 
/*function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase('john doe'));*/

//Function to find maximum
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}
// 1. Two positive numbers
console.log(findMaximum(12, 45));   // 45

// 2. Two negative numbers
console.log(findMaximum(-25, -5));  // -5

// 3. Positive and negative number
console.log(findMaximum(10, -50));  // 10

// 4. Equal numbers
console.log(findMaximum(8, 8));

//Function to is palindrome
/*function isPalindrome(word) {
    let cleaned = word.toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
console.log(isPalindrome('Madam'));*/

function isPalindrome(word) {
  // Return false if input is not a string
  if (typeof word !== 'string') {
    return false;
  }
  
  const cleaned = word.toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
// 1. Simple palindrome
console.log(isPalindrome("racecar")); // true

// 2. Non-palindrome
console.log(isPalindrome("hello"));   // false

// 3. Single character
console.log(isPalindrome("a"));       // true

// 4. Empty string
console.log(isPalindrome(""));

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  // If discount is 0% or less, return original price
  if (discountPercentage <= 0) {
    return originalPrice;
  }
  
  // If discount is 100% or greater, the item is free (price is 0)
  if (discountPercentage >= 100) {
    return 0;
  }
  
  // Calculate price after applying discount percentage
  return originalPrice * (1 - discountPercentage / 100);
}
// 1. Correctly calculates discounted price
console.log(calculateDiscountedPrice(100, 20));  // 80

// 2. Returns original price when discount is 0%
console.log(calculateDiscountedPrice(100, 0));   // 100

// 3. Handles 100% discount percentage
console.log(calculateDiscountedPrice(100, 100)); // 0

// 4. Handles discount percentage greater than 100%
console.log(calculateDiscountedPrice(100, 150)); // 0
//function to calculate discounted price
/*function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice * (1 - discountPercentage / 100);
}
console.log(calculateDiscountedPrice(100, 20));*/

// This is required for the test to function properly  
//module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice 