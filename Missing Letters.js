function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphaArr = alphabet.split('')
  const wordArr = str.split('')
  const length = wordArr.length - 1
  const start = alphaArr.indexOf(wordArr[0]) //index of first letter in word in alphabet
  const end = alphaArr.indexOf(wordArr[length]) // index of last letter in word in alphabet
  const newAlpha = alphaArr.slice(start, end)
  for (let i = 0; i < wordArr.length; i++){
  if (newAlpha[i] !== wordArr[i]) {
    const blankArr = newAlpha.slice(i)
    return blankArr[0]
  }
  }

  return undefined;
}

fearNotLetter("abcefg");

/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters



Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.



*/