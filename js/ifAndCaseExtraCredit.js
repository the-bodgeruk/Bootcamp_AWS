// Declare Constants
const VatPercentage = 20;

//Set Variables
let Item = "Shoes";
let Quantity = 3;
let ItemCost = 5;
let DeliveryDay = "Wednesday";


//Calculate Total Item cost 
TotalItemCost = ItemCost * Quantity

//Calculate VAT cost
VatCost = ((TotalItemCost) /100) * (VatPercentage);

//Calculate Postage Percentage
if (TotalItemCost < 50) {PostagePercentage = 20;}
else
    if (TotalItemCost >=50 && TotalItemCost < 100) {PostagePercentage=10;}
        else if (TotalItemCost >= 100) {PostagePercentage =0;}


//Test Output   console.log(`PostalPercentage is ${PostagePercentage}`);

PostageCost = (TotalItemCost * PostagePercentage)/100;


//Calculate Delivery Charge
switch(DeliveryDay)
{
    case 'Monday': DeliveryCharge = 0; break;
    case 'Tuesday': DeliveryCharge = 0; break;
    case 'Wednesday': DeliveryCharge = 2.50; break;
    case 'Thursday': DeliveryCharge = 0; break;
    case 'Friday': DeliveryCharge = 0; break;
    case 'Saturday': DeliveryCharge = 5; break;
    case 'Sunday': DeliveryCharge = 20; break;
}

//Calculate Total Order Cost

TotalOrderCost = TotalItemCost + PostageCost + DeliveryCharge;


console.log(`Item:  ${Item}`);
console.log(`Item Cost: £${ItemCost}`);
console.log(`Quantity: ${Quantity}`);
console.log(`The Delivery Charge is £ ${DeliveryCharge.toFixed(2)} for Delivery on ${DeliveryDay}`)
console.log(`The VAT Cost is £${VatCost.toFixed(2)}`);
console.log(`Your postage cost is £${PostageCost.toFixed(2)}`);
console.log(`The total cost of your order of ${Quantity} * ${Item} is £${TotalOrderCost.toFixed(2)}`);


