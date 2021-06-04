function convertToRoman(num) {
    const newArr = Array.from(num.toString()).map(Number)
    const symbols = ['I', 'V', 'X', 'L', 'C', 'D',' M']
    if (newArr.length == 1) {
      //write for loop with newArr[i]
      if (newArr[0] <= 3) {
        console.log(symbols[0].repeat(newArr[0]))
        return symbols[0].repeat(newArr[0])
      } else if (newArr[0] == 4) {
        console.log(symbols[0]+symbols[1])
        return symbols[0]+symbols[1]
      } else if (newArr[0] == 5) {
        return symbols[1]
      } else if (newArr[0] < 9) {
        console.log(symbols[1] + symbols[0].repeat(newArr[0] - 5))
        return symbols[1] + symbols[0].repeat(newArr[0] - 5)
      } else if (newArr[0] == 9) {
        return symbols[0] + symbols[2]
      }
    }
    
   return num;
  }
  
  convertToRoman(9);


  function convertToRoman(num) {
    const newArr = Array.from(num.toString()).map(Number)
    const symbols = ['I', 'V', 'X', 'L', 'C', 'D',' M']
    const romanArr = []
    console.log(newArr)
      for(let i = 0; i <= newArr.length; i++)
      if (newArr[i] == 1 || newArr[i] == 6) {
        console.log(symbols[i])
        romanArr.unshift(symbols[i])
        console.log(romanArr)
      } else if (newArr[i] == 2 || newArr[i] == 7) {
        romanArr.unshift(symbols[i].repeat(2))
      } else if (newArr[i] == 3 || newArr[i] == 8) {
        romanArr.unshift(symbols[i].repeat(3))
      } else if (newArr[i] == 4) {
        console.log(symbols[i+1])
        romanArr.unshift(symbols[i] + symbols[i + 1])
      } else if (newArr[i] == 9) {
        console.log(symbols[i+2])
        romanArr.unshift(symbols[i] + symbols[i + 2])
      }
        else if (newArr[i] == 10 || newArr[i] == 5) {
        console.log(symbols[i] + symbols[i + 2])
        romanArr.unshift(symbols[i] + symbols[i + 2])
      }
      const result = romanArr.join('')
      console.log(result)
    return result
  }
  
  convertToRoman(10);

  function convertToRoman(num) {
    const newArr = Array.from(num.toString()).map(Number)
    const myNumerals = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M',
    }
    const romanArr = []
    console.log(newArr[0])
    console.log(myNumerals[num])
    for (var value in newArr){
      romanArr.push(myNumerals[num])
      console.log(romanArr)
    } 
    const result = romanArr.join('')
    return result
  }
  
  convertToRoman(3);