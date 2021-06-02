function palindrome(str) {
    const lowerstr = str.toLowerCase()
    const regexp = /[a-z0-9]/gi
    const found = lowerstr.match(regexp)
    console.log(found)
    const newArr = found
    const oldArr = []
    for (let i = newArr.length - 1; i >= 0; i--) {
      oldArr.push(newArr[i]);
    };
    console.log(newArr)
    console.log(oldArr)
  
    function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
  
    if (arrayEquals(newArr, oldArr) == true ){
      return true
    } else  {
      return false;
    }
  }
  
  
  
  palindrome("My  0, 0  ym.");

  /*
  https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
  

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/