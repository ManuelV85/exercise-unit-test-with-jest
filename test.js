// import the function sum from the app.js file
const { sum } = require('./app.js');

//start your first test
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    //use the funtion like its suppoed to be used
    const dollars = fromEuroToDollar(3.5);

    // if 1 euro are 1.2 dollars, then 3.5 euros should be (3.5*1.2)
    //const expect = 3.5*1.2;

    //this is the comparasion for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5*1.2)
});

test(" 10 dollars should be 1534 yen", function(){
    // import the function from app.js
    const{ fromDollarToYen} = require('./app.js');

    //const expect= 10 * 153.4

    expect(fromDollarToYen(10)).toBe(1534); // 1 dollar is equal to 153.4 yen 
});

test("1000 yen shoul be 6,25 pound", function(){

    const { fromYenToPound} = require('./app.js');

    expect(fromYenToPound(1000)).toBe(6.25); //1000 yen should be 6.25 pund
});