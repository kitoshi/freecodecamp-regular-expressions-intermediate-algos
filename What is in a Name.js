function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    for (const prop in collection) {
      const keys1 = Object.keys(collection[prop])
      const keys1str = keys1.join()
      const keys2 = Object.keys(source)
      const keys2str = keys2.join()
  
    console.log(collection[0]['apple'])
      if (keys1str.includes(keys2str) == true) {
  
        arr.push(collection[prop])
      }
    }
  
  
  
  
    // Only change code above this line
  
  
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })