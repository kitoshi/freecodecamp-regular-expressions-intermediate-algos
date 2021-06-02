function binaryAgent(str) {
    const newArr = str.split(" ")
    const result = []
    for (var value of newArr) { //ES6 array iterating loop
      const newstr = String.fromCharCode(parseInt(value, 2))
      result.push(newstr)
    }
    const resultstring = result.join('')
    return resultstring
  }

  
  /*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.


  */