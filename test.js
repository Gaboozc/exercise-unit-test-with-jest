// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("One USD should be 156.5 JPY", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

   
    const JPY = fromDollarToYen(3.5);

 
    const expected = 3.5 * 156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(547.75); // 1 dollar is 156.5 Yens, then 3.5 USD should be = (3.5 * 156.5)
})
test("One Yen should be 0.87 GBP", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

   
    const JPY = fromYenToPound(3.5);

 
    const expected = 3.5 * 0.87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(3.045); // 1 Yen is 0.87 Pounds, then 3.5 Yens should be = (3.5 * 0.87)
})