function palindrome(num) { 
  if (typeof(num) === 'number' &&
            isFinite(num) &&
            Math.round(num) === num && num > 0){
     let convertedNumber = num.toString();
    let reverseString = convertedNumber.split("").reverse().join("");
    return reverseString === convertedNumber ? true : false;
  }else{
    return 'Not valid'
  }
} 
