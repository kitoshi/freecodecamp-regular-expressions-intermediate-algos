function translatePigLatin(str) {
  const letters = str.split("")
  const vowelReg = new RegExp(/^[aeiou]/)
  if (vowelReg.test(letters[0]) === true) {
    letters.push("way")
    const joined = letters.join("")
    return joined
  } else {
    const removed = str.split(/((?=[a-z])[aeiou]+)/)
    console.log(removed)
    removed.push(removed[0], "ay")
    removed.shift()
    const joined = removed.join("")
  return joined;
  }
}

translatePigLatin("glove");

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
/*Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/