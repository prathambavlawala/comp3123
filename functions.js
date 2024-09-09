//Question 2

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


// Question 4

function angle_Type(angle) {
    if (angle < 0 || angle > 180) {
        return "Invalid angle"; 
    }

    if (angle === 90) {
        return "Right angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else {
        return "Invalid angle"; 
    }
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))


//Question 3

function right(str) {
    
    const Char = str.slice(-3);
    const String = str.slice(0, -3);

    return Char + String;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


// Question 5

function array_max_sum(num, k) {
    let result = 0;
    let sum = 0;
    for (var i = 0; i < k - 1; i++) {
      sum += num[i];
    }
    for (var i = k - 1; i < num.length; i++) {
      sum += num[i];
      if (sum > result) {
        result = sum;
      }
      sum -= num[i - k + 1];
    }
    return result;
  }
  
  console.log(array_max_sum([1, 2, 3, 14, 5], 2))
  console.log(array_max_sum([2, 3, 5, 1, 6], 3))
  console.log(array_max_sum([9, 3, 5, 1, 7], 2))

