function myReplace(str, before, after) {
    const caseReg = new RegExp(/^[A-Z]/)
    const commaReg = new RegExp(/\W/g)
    if (caseReg.test(before) === true) {
      const splitAfter = after.split("")
      const uppercase = splitAfter[0].toUpperCase()
      splitAfter.shift()
      const reJoin = uppercase.concat(splitAfter)
      const replaced = reJoin.replace(commaReg, '')
      console.log(replaced)
      const newArr = str.split(" ")
      const cut = newArr.indexOf(before)
      newArr.splice(cut, 1, replaced)
      const updatedstr = newArr.join(" ")
      console.log(updatedstr)
      return updatedstr;
    } else if (caseReg.test(after) === true) {
      const splitAfter = after.split("")
      const uppercase = splitAfter[0].toLowerCase()
      splitAfter.shift()
      const reJoin = uppercase.concat(splitAfter)
      const replaced = reJoin.replace(commaReg, '')
      console.log(replaced)
      const newArr = str.split(" ")
      const cut = newArr.indexOf(before)
      newArr.splice(cut, 1, replaced)
      const updatedstr = newArr.join(" ")
      console.log(updatedstr)
      return updatedstr;
     } else {
      const newArr = str.split(" ")
      const cut = newArr.indexOf(before)
      newArr.splice(cut, 1, after)
      const updatedstr = newArr.join(" ")
      console.log(updatedstr)
      return updatedstr;
    }
  }
  
  myReplace("I think we should look up there", "up", "Down");
  
/*this is bad code, repeated way too much*/
/*https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


*/
