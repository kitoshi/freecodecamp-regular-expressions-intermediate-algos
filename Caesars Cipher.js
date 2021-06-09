function rot13(str) {
    const newArr = str.split('')
    const alphabetstr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const alphabetArr = alphabetstr.split('')
    const resultArr = []
    for (const letter of newArr) {
           if ((/[A-M]/).test(letter) == true){
           resultArr.push(alphabetArr[alphabetArr.indexOf(letter) + 13])
           console.log(resultArr)
         } else if ((/[N-Z]/).test(letter) == true){
           resultArr.push(alphabetArr[alphabetArr.indexOf(letter) - 13])
         }  else {
           resultArr.push(letter)
         }
    
    }
      const result = resultArr.join('')
      console.log(result)
      return result;
    }
    
    rot13("SERR PBQR PNZC");

    /*
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

    */