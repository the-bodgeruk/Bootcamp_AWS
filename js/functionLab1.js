// // Function to accept an agrument(multiplicand) and produce a 12 times table

function timesTable (multiplicand, multiplier )
{
   if (multiplicand == 1)
    {
        console.log(` ${multiplicand} time table! Are you having a laugh!?`)

    }
    else
    {
        for (let i = 1; i <= multiplier; i++)
            {
                let product = 0;
            product = i * multiplicand;
            console.log(`${multiplicand} * ${i} = ${product}`);
            }
    }
}

// testing for if statement on multiplicand = 1
timesTable(5,1);

// //testing for miltiplicand = 0 and mulitplier to test loop
// timesTable(0,10);

// //testing for multiplicand being negative and mulitplier to test for loop
// timesTable(-1,5);

// // Testing for nil loop by providing zero as mulitplier
// timesTable(7,0);
