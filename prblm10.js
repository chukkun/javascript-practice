let items=7;
let amount=200;
let dis=20;
if(items>5 || amount>100){
    discount=amount-((amount*dis)/100);
    console.log(discount);
}
else{
    console.log("no discount");
}