function max(num1, num2, num3){
    var max = 0;
    if((num1 >= num2) && (num1 >= num3)){
        max = num1;
    }
    else if((num2 >= num1) && (num2 >= num3)){
        max = num2;
    }
    else{
        max = num3;
    }
return max;
}

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));