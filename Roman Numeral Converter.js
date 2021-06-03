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