// app.js file content
console.log("Hello World");
// this is my funtión that sums two numers
const sum = (a,b) => {
    return a+ b;
};

console.log(sum(7,3));

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



const fromEuroToDollar = function(valueInEuro){
    // conver the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    // retunr the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar){
    //conver the given valueInDollar to Yen
    let valueInYen = valueInDollar * 153.4;

    //return the Yen value
    return valueInYen;

}

const fromYenToPound = function(valueInYen){

    let valueInPound = valueInYen * 0.00625;

    return valueInPound;
}



module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen};