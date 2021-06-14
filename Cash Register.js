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
  const drawer = {status: "CLOSED", change: cid}
  var change = cash - price
  var decimal = parseFloat((change - Math.floor(change)).toPrecision(2))
  var returnchange = Math.trunc(change)
  var totalcidwhole = 0
  var decimalcidwhole = 0
  const reversed = cid.reverse()
  for (let i = 0; i < 4; i++) {
    totalcidwhole += reversed[i][1]
  }
  for (let k = 5; reversed.length > k; k++){
    decimalcidwhole += reversed[k][1]
  }
  if ((returnchange + decimal) == (decimalcidwhole + totalcidwhole)){
    cid.reverse()
    console.log('exact')
    return drawer
  } else if (totalcidwhole < returnchange || decimalcidwhole < decimal) {
    const bankrupt = {status: "INSUFFICIENT_FUNDS", change: []}
    console.log('bankrupt')
    return Object.assign(drawer, bankrupt)
    } else {
   //100 to penny actual register
  do {
    switch (true) {
      case (returnchange >= 100):
        var output = Math.floor(returnchange / reversedLegend[0][1])
        newArr.push(reversed[0][0], output * reversedLegend[0][1])
        var returnchange = (returnchange - (output * 100)).toFixed(2)
        break;
      case (returnchange >= 20 && reversed[1][1] >= 20 && newArr.includes('TWENTY') == false):
        var output = Math.floor(returnchange / reversedLegend[1][1])
        if (reversed[1][1] < output * reversedLegend[1][1]) {
          var remainder = returnchange - output * reversedLegend[1][1] // remainder needs to be
          //in all combos
          var difference = output * reversedLegend[1][1] - reversed[1][1]
          newArr.push(reversed[1][0], reversed[1][1])
          var returnchange = difference + remainder // remainder added here
          break;
        } else if (newArr.includes("TWENTY") == false){
        newArr.push(reversed[1][0], output * reversedLegend[1][1])
        var returnchange = (returnchange - (output * 20)).toFixed(2)
        break;
        }
     case (returnchange >= 10 && reversed[2][1] >= 10 && newArr.includes("TEN") == false):
     var output = Math.floor(returnchange / reversedLegend[2][1])
        if (reversed[2][1] < output * reversedLegend[2][1]) {
          var remainder = returnchange - output * reversedLegend[2][1]
          var difference = output * reversedLegend[2][1] - reversed[2][1]
          newArr.push(reversed[2][0], reversed[2][1])
          var returnchange = difference + remainder
          break;
        } else if (newArr.includes("TEN") == false){
        newArr.push(reversed[2][0], output * reversedLegend[2][1])
        var returnchange = (returnchange - (output * 10)).toFixed(2)
        break;
        }
     case (returnchange >= 5 && reversed[3][1] >= 5 && newArr.includes("FIVE") == false):
     var output = Math.floor(returnchange / reversedLegend[3][1])
        if (reversed[3][1] < output * reversedLegend[3][1]) {
          var remainder = returnchange - output * reversedLegend[3][1]
          var difference = output * reversedLegend[3][1] - reversed[3][1]
          newArr.push(reversed[3][0], reversed[3][1])
          var returnchange = difference + remainder
          break;
        } else if (newArr.includes("FIVE") == false){
        newArr.push(reversed[3][0], output * reversedLegend[3][1])
        var returnchange = (returnchange - (output * 5)).toFixed(2)
        break;
        }
       case (returnchange >= 1 && reversed[4][1] >= 1 && newArr.includes("ONE") == false):
       var output = Math.floor(returnchange / reversedLegend[4][1])
        if (reversed[4][1] < output * reversedLegend[4][1]) {
          var remainder = returnchange - output * reversedLegend[4][1]
          var difference = output * reversedLegend[4][1] - reversed[4][1]
          newArr.push(reversed[4][0], reversed[4][1])
          var returnchange = difference + remainder
          break;
        } else if (newArr.includes("ONE") == false){
        newArr.push(reversed[4][0], output * reversedLegend[4][1])
        var returnchange = (returnchange - (output * 1)).toFixed(2)
        break;
        }
      default:
    }
  } while (returnchange > 0) 
  do {
    switch (true) {
      case (decimal >= 0.25 && reversed[5][1] >= 0.25 && newArr.includes("QUARTER") == false):
        var decoutput = Math.floor(decimal / reversedLegend[5][1])
        if (reversed[5][1] < decoutput * reversedLegend[5][1]) {
        var decremainder = decimal - decoutput * reversedLegend[5][1]
        var difference = decoutput * reversedLegend[5][1] - reversed[5][1]
        newArr.push(reversed[5][0], reversed[5][1])
        var decimal = difference + decremainder
        break;
        } else if (newArr.includes("QUARTER") == false){
        newArr.push(reversed[5][0], decoutput * reversedLegend[5][1])
        var decimal = (decimal - (decoutput * 0.25)).toFixed(2)
        break;
        }
      case (decimal >= 0.1 && reversed[6][1] >= 0.1 && newArr.includes("DIME") == false):
        var decoutput = Math.floor(decimal / reversedLegend[6][1])
        if (reversed[6][1] < decoutput * reversedLegend[6][1]) {
        var decremainder = decimal - decoutput * reversedLegend[6][1]
        var difference = decoutput * reversedLegend[6][1] - reversed[6][1]
        newArr.push(reversed[6][0], reversed[6][1])
        var decimal = difference + decremainder
        break;
        } else if (newArr.includes("DIME") == false){
        newArr.push(reversed[6][0], decoutput * reversedLegend[6][1])
        var decimal = (decimal - (decoutput * 0.10)).toFixed(2)
        break
        }
      case (decimal >= 0.05 && reversed[7][1] >= 0.05 && newArr.includes("NICKEL") == false):
        var decoutput = Math.floor(decimal / reversedLegend[7][1])
        if (reversed[7][1] < decoutput * reversedLegend[7][1]) {
        var decremainder = decimal - decoutput * reversedLegend[7][1]
        var difference = decoutput * reversedLegend[7][1] - reversed[7][1]
        newArr.push(reversed[7][0], reversed[7][1])
        var decimal = difference + decremainder
        break;
        } else if (newArr.includes("NICKEL") == false){
        newArr.push(reversed[7][0], decoutput * reversedLegend[7][1])
        var decimal = (decimal - (decoutput * 0.05)).toFixed(2)
        break
        }
    case (decimal >= 0.01 && reversed[8][1] >= 0.01 && newArr.includes("PENNY") == false):
        var decoutput = Math.floor(decimal / reversedLegend[8][1])
        if (reversed[8][1] < decoutput * reversedLegend[8][1]) {
        var difference = decoutput * reversedLegend[8][1] - reversed[8][1]
        newArr.push(reversed[8][0], reversed[8][1])
        var decimal = difference
        break;
        } else if (newArr.includes("PENNY") == false){
        newArr.push(reversed[8][0], decoutput * reversedLegend[8][1])
        var decimal = (decimal - (decoutput * 0.01)).toFixed(2)
        break
        }
      default:
    }
  } while (decimal > 0.00)
  
    
    
    
  }

    const res = []; //formatting for answers
    for (let i = 0; i < newArr.length; i += 2) {
        const chunk = newArr.slice(i, i + 2);
        res.push(chunk);
    console.log(res)

}

     

  const opendrawer = {status: "OPEN", change: res}
  console.log(opendrawer)
        return opendrawer;
}

/* Cash RegisterPassed
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

*/
  


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])