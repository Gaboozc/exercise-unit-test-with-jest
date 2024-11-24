
const fromEuroToDollar = function(valueInEuro) {

    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
   
    let valueInYen = valueInDollar * 156.5;
    
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
 
    let valueInPound = valueInYen * 0.87;
   
    return valueInPound;
}
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)


// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen }