function truthCheck(collection, pre) {
    for (const value in collection) {
      if (collection[value][pre] == null || collection[value][pre] == "" || Number.isNaN(collection[value][pre])){
        console.log('blank')
        return false
      }
     
    }
    console.log('true')
    return true
  }
  
  
  truthCheck([{"single": "double"}, {"single": NaN}], "single");

  /*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.


  */