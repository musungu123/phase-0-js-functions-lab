//Function to calculate tax
function calculateTax(amount) {
    return amount * 0.1;
}
console.log(calculateTax(100));

//Function to convert to upper case
function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase('john doe'));

//Function to find maximum
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}
console.log(findMaximum(100, 1000));

//Function to is palindrome
function isPalindrome(word) {
    let cleaned = word.toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
console.log(isPalindrome('Madam'));

//function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice * (1 - discountPercentage / 100);
}
console.log(calculateDiscountedPrice(100, 20));

// This is required for the test to function properly  
//module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice 