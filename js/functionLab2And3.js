// // Function to accept 2 agruments(a temperature and a conversion e.g. F2C or C2F) and output the comparable temperature in the alternative scale

function convertTemp (inputTemp,tempConvert)
{
   
// Check that tempconvert is within permitted range   
  
    {   
     switch(tempConvert)
        {
        case 'F2C': 
              outputTemp = (((inputTemp-32)*5)/9) ; 
              console.log(` ${inputTemp} Farenheit equals ${outputTemp.toFixed(2)} Centigrade to 2 decimal places`);
             break;
        case 'C2F': 
             outputTemp = (((inputTemp*9)/5)+32) ;  
             console.log(` ${inputTemp} Centigrade equals ${outputTemp.toFixed(2)} Farenheit to 2 decimal places`);
        break; 
        default: 
            console.log(` Error!: You input a tempConvert argument of ${tempConvert}, only "F2C" or "C2F" are permitted`);
            break;
        }

    }
   
    
}

// Test erroneous `tempComvert` argument default case
convertTemp(10,12313);

// Test `C2F` case and test 0 Centigrade = 32 Farenheit
convertTemp(0,`C2F`);

// Test `F2C` case and test 0 Farenheit = -17.78 Centigrade
convertTemp(0,`F2C`);

//Test 100 Centigrade = 212 Farenheit
convertTemp(100,`C2F`);

//Test for -273.15 Centigrade (0 kelvin) = -459.67 Farenheit
convertTemp(-273.15,`C2F`);
