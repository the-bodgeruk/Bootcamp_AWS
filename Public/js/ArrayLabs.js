// Lab 1. Create an array with months of the year. Create a random number to access the array to pull out a month then output: my favourite month is – whatever month comes up
//
//
//
console.log(`=================================================`);
console.log(`Array Labs 1 `);
console.log(`=================================================`);

// Create Array
let monthsOfYear = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]

//Generate random number within range of 0 and array length -1
let ranNum = Math.floor(Math.random() * monthsOfYear.length) + 1 // Generate a number from 0 to 99 then add 1
//output array position of random number
console.log(`My favourite month of the year is ${monthsOfYear[ranNum]}`);


//------------------------------------------------------------------------------------------------

console.log(` `);
console.log(` `);


// 2. Create an array of prices of goods. Output the prices of each one with 20% vat added
// 
// 
// 
console.log(`=================================================`);
console.log(`Arrays Lab 2`);
console.log(`=================================================`);
// Create arrays
let goods = [`Shoes`, `Shirts`, `Trousers`, `Skirts`, `Ties`, 'Jackets'];
let netPrice = [25, 50, 100, 75, 12.50, 123.75];


// Output the prices of each one with 20% vat added

for (let i = 0; i < goods.length; i++)
{
    grossPrice = netPrice[i] * 1.2;
    console.log(`The Gross Price of ${goods[i]} is £${grossPrice.toFixed(2)}`);
}

//----------------------------------------------------------------------------------------------------
console.log(` `);
console.log(` `);
// 3. Write a function called vat. Pass it a value and it returns the total after vat is added. Output: the total value of the product is £x
console.log(`=================================================`);
console.log(`Arrays Lab 3`);
console.log(`=================================================`);


function vat (netValue)
{
totalValue = netValue * 1.2;

return totalValue;
}



let net = [25, 50, 100, 75, 12.50, 123.75,0.33];
for (let i = 0; i < net.length; i++)
{
gross = vat(net[i]);
console.log(`The total value of ${net[i]} is ${gross.toFixed(2)} `);
};






console.log(` `);
console.log(` `);

// Lab 4
console.log(`=================================================`);
console.log(`Arrays Lab 4`);
console.log(`=================================================`);



// 4. Write a function called taxDeduction. Pass it an annual salary and it returns the amount of tax you pay base on the HMRC tax rates below:
//
//  Band                    Taxable Income          Tax Rate
//  =============================================================
//  Personal Allowance      <£12,571                    0%
//  Basic Rate              >=£12,571 & <£50,271        20%
//  Higher Rate             >=£50,271 & <= £150,000     40%
//  Additional Rate         > £150,000                  45%
//

function taxDeduction(annualSalary)
{


const additionalTaxRate = 0.45;
const additionalTaxThreshold = 150000;
const higherTaxRate = 0.4;
const higherTaxThreshold = 50270;
const basicTaxRate = 0.2;
const basicTaxThreshold = 12570;


let additionalTax = 0;
let higherTax = 0;
let basicTax = 0;
let totalTax = 0;

if (annualSalary >= additionalTaxThreshold)
    { 
    additionalTax = ((annualSalary - additionalTaxThreshold)*additionalTaxRate) ;
    higherTax = ((additionalTaxThreshold * higherTaxRate));
    basicTax = 0;

}
    else
        if (annualSalary >= higherTaxThreshold)
        {
            higherTax = ((annualSalary-higherTaxThreshold)*higherTaxRate);
            basicTax = ((basicTaxThreshold * basicTaxRate));
        }
        else
        if (annualSalary >= basicTaxThreshold)
        {
            basicTax = ((annualSalary-basicTaxThreshold)*basicTaxRate);
        }

// };

// Calculate totalTax
totalTax = (additionalTax + higherTax + basicTax);

return totalTax;

};


// Array to test function
let salary = [10000, 12571, 32500, 50270, 50271, 64728, 150000, 150000.1, 175482.56];

// Array of manually calculated Tax
let calculatedTax = [0 ,0 , 6627, 12535 ,12536  ,18594 ,60696 , 60696, 72996 ];

for (let i = 0; i < salary.length; i++)
{
annualTax = taxDeduction(salary[i]);
console.log(`Based on an Annual Salary of £${salary[i]} the function taxDeduction calcualtes an Annual Tax  of £ ${annualTax.toFixed(2)}. Manually Calculated Tax is ${calculatedTax[i]} `);
};



