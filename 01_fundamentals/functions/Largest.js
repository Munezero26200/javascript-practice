
function largest(num1,num2){
    if(num1>num2){
        console.log('the largest is'+ num1);
    }else if(num2> num1){
        console.log('the largest is'+ num2);
    }else {
        if(num1===num2){
            console.log(num1+'is equal to'+ num2);
        }
    }
}
largest(30,30);