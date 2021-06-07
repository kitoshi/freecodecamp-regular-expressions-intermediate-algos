  for (const value in collection) {
    for (const prop in source) {
      console.log(collection[value])
      if (collection[value][prop] == source[prop] && collection[value][prop] !== undefined) {
        arr.push(collection[value])
      }
    }
  }

  console.log(arrayprop)
  console.log(sourceprop)
  console.log(sourceprop.every(ar => arrayprop.includes(ar)))


  function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    for (const prop in collection){
      const arrayprop = Object.getOwnPropertyNames(collection[prop])
      const sourceprop = Object.getOwnPropertyNames(source)
      console.log(arrayprop)
      console.log(sourceprop)
      console.log(sourceprop.every(ar => arrayprop.includes(ar)))
      if (sourceprop.every(ar => arrayprop.includes(ar)) == true) {
        arr.push(collection[prop])
      }
    }
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })


  function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    for (const prop in collection) {
      for (const value in source) {
        for (const item in collection[prop]) {
          const arrayprop = Object.getOwnPropertyNames(collection[prop])
          const sourceprop = Object.getOwnPropertyNames(source)
          console.log(sourceprop.every(ar => arrayprop.includes(ar)))
          if (sourceprop.every(ar => arrayprop.includes(ar)) == true && collection[prop][item] == source[value]) { 
            arr.push(collection[prop])
          }
        }
      }
    }
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })