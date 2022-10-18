let SeasonNum = Math.floor(Math.random() * 4) + 1 // Generate a number from 0 to 3 then add 1

console.log(` The Season Number is ${SeasonNum}`); //Output SeasonNum for testing

switch (SeasonNum)
{
case 1 : console.log (`The Season is Winter`); break;
case 2 : console.log (`The Season is Spring`); break;
case 3 : console.log (`The season is Summer`); break;
case 4 : console.log (`The season is Autumn`); break;
}