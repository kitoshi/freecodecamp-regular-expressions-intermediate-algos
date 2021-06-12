function checkCashRegister(price, cash, cid) {
  const newArr = []
  const number = [
    ["PENNY", .01],
    ["NICKEL", .05],
    ["DIME", .1],
    ["QUARTER", .25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]
  const reversedLegend = number.reverse() //legend
  const drawer = { status: "CLOSED", change: cid }
  var change = cash - price
  var decimal = parseFloat((change - Math.floor(change)).toPrecision(2))
  var returnchange = Math.trunc(change)
  const reversed = cid.reverse() //100 to penny actual register
  do {
    switch (true) {
      case (returnchange >= 100):
        var output = Math.floor(returnchange / reversedLegend[0][1])
        newArr.push(reversed[0][0], output * reversedLegend[0][1])
        var returnchange = (returnchange - (output * 100)).toFixed(2)
        break;
      case (returnchange >= 20 && reversed[1][1] >= 20 && newArr.includes('TWENTY') == false):
      console.log(returnchange)
        var output = Math.floor(returnchange / reversedLegend[1][1])
        if (reversed[1][1] < output * reversedLegend[1][1]) {
          var remainder = returnchange - output * reversedLegend[1][1] // remainder needs to be
          //in all combos
          console.log(remainder)
          var difference = output * reversedLegend[1][1] - reversed[1][1]
          newArr.push(reversed[1][0], reversed[1][1])
          var returnchange = difference + remainder // remainder added here
          break;
        } else if (newArr.includes('TWENTY') == false){
        newArr.push(reversed[1][0], output * reversedLegend[1][1])
        var returnchange = (returnchange - (output * 20)).toFixed(2)
        break;
        }
     case (returnchange >= 10 && reversed[2][1] >= 10 && newArr.includes('TEN') == false):
     var output = Math.floor(returnchange / reversedLegend[2][1])
        if (reversed[2][1] < output * reversedLegend[2][1]) {
          var difference = output * reversedLegend[2][1] - reversed[2][1]
          newArr.push(reversed[2][0], reversed[2][1])
          var returnchange = difference
          break;
        } else if (newArr.includes('TEN') == false){
        newArr.push(reversed[2][0], output * reversedLegend[2][1])
        var returnchange = (returnchange - (output * 10)).toFixed(2)
        break;
        }
     case (returnchange >= 5 && reversed[3][1] >= 5 && newArr.includes('FIVE') == false):
     var output = Math.floor(returnchange / reversedLegend[3][1])
        if (reversed[3][1] < output * reversedLegend[3][1]) {
          var difference = output * reversedLegend[3][1] - reversed[3][1]
          newArr.push(reversed[3][0], reversed[3][1])
          var returnchange = difference
          break;
        } else if (newArr.includes('FIVE') == false){
        newArr.push(reversed[3][0], output * reversedLegend[3][1])
        var returnchange = (returnchange - (output * 5)).toFixed(2)
        break;
        }
       case (returnchange >= 1 && reversed[4][1] >= 1 && newArr.includes('ONE') == false):
       var output = Math.floor(returnchange / reversedLegend[4][1])
        if (reversed[4][1] < output * reversedLegend[4][1]) {
          var difference = output * reversedLegend[4][1] - reversed[4][1]
          newArr.push(reversed[4][0], reversed[4][1])
          var returnchange = difference
          break;
        } else if (newArr.includes('ONE') == false){
        newArr.push(reversed[4][0], output * reversedLegend[4][1])
        var returnchange = (returnchange - (output * 1)).toFixed(2)
        break;
        }
      default:
    }
  } while (returnchange > 0) 
  do {
    switch (true) {
      case (decimal >= 0.25 && reversed[5][1] >= 0.25 && newArr.includes('QUARTER') == false):
        var output = Math.floor(decimal / reversedLegend[5][1])
        if (reversed[5][1] < output * reversedLegend[5][1]) {
        var difference = output * reversedLegend[5][1] - reversed[5][1]
        newArr.push(reversed[5][0], reversed[5][1])
        var decimal = difference
        break;
        } else if (newArr.includes('QUARTER') == false){
        newArr.push(reversed[5][0], output * reversedLegend[5][1])
        var decimal = (decimal - (output * 0.25)).toFixed(2)
        break;
        }
      case (decimal >= 0.1 && reversed[6][1] >= 0.1 && newArr.includes('DIME') == false):
        var output = Math.floor(decimal / reversedLegend[6][1])
        if (reversed[6][1] < output * reversedLegend[6][1]) {
        var difference = output * reversedLegend[6][1] - reversed[6][1]
        newArr.push(reversed[6][0], reversed[6][1])
        var decimal = difference
        break;
        } else if (newArr.includes('DIME') == false){
        newArr.push(reversed[6][0], output * reversedLegend[6][1])
        var decimal = (decimal - (output * 0.10)).toFixed(2)
        break
        }
      case (decimal >= 0.05 && reversed[7][1] >= 0.05 && newArr.includes('NICKEL') == false):
        var output = Math.floor(decimal / reversedLegend[7][1])
        if (reversed[7][1] < output * reversedLegend[7][1]) {
        var difference = output * reversedLegend[7][1] - reversed[7][1]
        newArr.push(reversed[7][0], reversed[7][1])
        var decimal = difference
        break;
        } else if (newArr.includes('NICKEL') == false){
        newArr.push(reversed[7][0], output * reversedLegend[7][1])
        var decimal = (decimal - (output * 0.05)).toFixed(2)
        break
        }
    case (decimal >= 0.01 && reversed[8][1] >= 0.01 && newArr.includes('PENNY') == false):
        var output = Math.floor(decimal / reversedLegend[8][1])
        if (reversed[8][1] < output * reversedLegend[8][1]) {
        var difference = output * reversedLegend[8][1] - reversed[8][1]
        newArr.push(reversed[8][0], reversed[8][1])
        var decimal = difference
        break;
        } else if (newArr.includes('PENNY') == false){
        newArr.push(reversed[8][0], output * reversedLegend[8][1])
        var decimal = (decimal - (output * 0.01)).toFixed(2)
        break
        }
      default:
    }
  } while (decimal > 0.00)
  {
    const opendrawer = { status: "OPEN", change: [newArr] }
    //testing if cash register has enough in bills
      if (false) {
        const bankrupt = { status: "INSUFFICIENT_FUNDS", change: [] }
        return Object.assign(drawer, bankrupt)
      } else {
        console.log(opendrawer)

        return Object.assign(drawer, opendrawer);
      }
    }
  }


 
  


checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])