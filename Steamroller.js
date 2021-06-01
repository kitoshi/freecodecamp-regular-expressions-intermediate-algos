function steamrollArray(arr) {
    const result = []
    arr.forEach(function(i) {
      if (Array.isArray(i)) {
        result.push(...steamrollArray(i))
      } else {
        result.push(i)
      }})
      console.log(result)
      return result
      }
  
   
  
  steamrollArray([1, [], [3, [[4]]]]);
  
  /*taken from mozilla documentation
  https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
  Flatten a nested array. You must account for varying levels of nesting.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  */