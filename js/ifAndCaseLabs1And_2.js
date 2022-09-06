let Num = Math.floor(Math.random() * 100) + 1 // Generate a number from 0 to 99 then add 1

if ( Num < 50 ) console.log(` The Random Number is ${Num}  is less than 50`);

switch(true) {
    case (Num >=20 && Num <= 80): console.log(`The Random Number is ${Num}. This is between 20 and 80 inclusive`); break;
    case Num < 20 : console.log(`The Random Number is ${Num}. This is less than 20`); break;
    case Num > 80 : console.log(`The Random Number is ${Num}. This is greater than 80`); break;
};