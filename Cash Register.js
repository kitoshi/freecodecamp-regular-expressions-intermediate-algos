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
  const reversedLegend = number.reverse()
  const drawer = {status: "CLOSED", change: cid}
  var change = cash - price
  var decimal = parseFloat((change - Math.floor(change)).toPrecision(2))
  var returnchange = Math.trunc(change)
  const reversed = cid.reverse() //100 to penny
  do {
      switch (true) {
        case (returnchange >= 100): 
          var output = Math.floor(returnchange/reversedLegend[0][1])
          newArr.push(reversed[0][0], output*reversedLegend[0][1])
          var returnchange = (returnchange - (output * 100)).toFixed(2)
          break;
        case (returnchange >= 20 && returnchange < 100):
          var output = Math.floor(returnchange/reversedLegend[1][1])
          newArr.push(reversed[1][0], output * reversedLegend[1][1])
          var returnchange = (returnchange - (output * 20)).toFixed(2)
          break;
       case (returnchange >= 10 && returnchange < 20):
          var output = Math.floor(returnchange/reversedLegend[2][1])
          newArr.push(reversed[2][0], output*reversedLegend[2][1])
          var returnchange = (returnchange - (output * 10)).toFixed(2)
          break;
        case (returnchange >= 5 && returnchange < 10):
        console.log(returnchange)
          var output = (returnchange/reversedLegend[3][1])
          newArr.push(reversed[3][0], output*reversedLegend[3][1])
          var returnchange = (returnchange - (output * 5)).toFixed(2)
          break;
        case (returnchange > 0 && returnchange < 5):
          var output = (returnchange/reversedLegend[4][1])
          newArr.push(reversed[4][0], output*reversedLegend[4][1])
          var returnchange = (returnchange - (output * 1)).toFixed(2)
          break;
        default:
        //how to rerun if returnchange > 0
      }
  } while (returnchange > 0)
  {
  const opendrawer = {status: "OPEN", change: [newArr]}
        console.log(opendrawer)
        console.log(newArr)
  return Object.assign(drawer, opendrawer);
  }
}
 
  


checkCashRegister(19, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 80], ["ONE HUNDRED", 300]])