function calculateSum (num1, num2, displaySum){
    let x=num1+num2;
    displaySum(x);
}

function displaySum(x){
    console.log(x);
}

calculateSum(883,64,displaySum);