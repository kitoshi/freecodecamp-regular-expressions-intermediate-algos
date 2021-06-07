function spinalCase(str) {
    const newArr = str.split(/(?=[A-Z])/)
    const blankArr =[]
    console.log(newArr)
    for (const word in newArr){
        blankArr.push(newArr[word].toLowerCase())
    }
    const regex = /[.*+?^${}()|[\]\\\s\_]/g
    const result = blankArr.join(' ')
    console.log(result)
    const clean = result.replaceAll(regex, "-")
    const duplicates = clean.replaceAll(/[-][-]/g, "-")
    console.log(duplicates)
    return duplicates
        
  }
  
  spinalCase('Teletubbies say Eh-oh');

  /*
  Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

  */