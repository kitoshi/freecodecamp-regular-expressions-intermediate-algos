function convertToRoman(num) {
  const newArr = Array.from(num.toString()).map(Number)
  const symbols = ['I', 'V', 'X', 'L', 'C', 'D', ' M']
  const revArr = newArr.reverse()
  const romanArr = []

  for (let value = 0; value < revArr.length; value++) {
    let i = newArr.length
    var denseKeys = [...newArr.keys()]
    var v = denseKeys.indexOf(value)
        if (newArr[value] == 0) {
          
        } else if (revArr[value] == 1) {
          if (revArr.length == 1) {
            romanArr.unshift(symbols[value])
          } else {
            romanArr.unshift(symbols[value + v])
          }
        }
         else if (revArr[value] <= 3) {
          romanArr.unshift(symbols[value + v].repeat(revArr[value]))
        } else if (revArr[value] == 4) {
          romanArr.unshift(symbols[value + v] + symbols[value + v + 1])
        } else if (revArr[value] == 5) {
          romanArr.unshift(symbols[value+v+1])
        } else if (revArr[value] < 9) {
          romanArr.unshift(symbols[i+1])
        } else if (revArr[value] == 9) {
          romanArr.unshift(symbols[i] + symbols[i+2])
        } 
    }
    const result = romanArr.join('')
    console.log(result)
    return result
  }
  
    
    
    


convertToRoman(555);