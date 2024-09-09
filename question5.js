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