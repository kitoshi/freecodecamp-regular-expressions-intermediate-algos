function checkCashRegister(price, cash, cid) {
    const newArr = []
    const drawer = {status: "CLOSED", change: cid}
    var change = cash - price
    var decimal = parseFloat((change - Math.floor(change)).toPrecision(2))
    var whole = Math.trunc(change)
    console.log(decimal, whole)
    const reversed = cid.reverse()
    console.log(change)
    for (const type of reversed) {
  
        console.log(type[1])
        if ((change / type[1]) >= 1){
          const output = (change/number) / 1
          newArr.push(type[0], output*type[1])
          var change = (cash - price - output)
        
      }
  
    }
    console.log(newArr)
    const opendrawer = {status: "OPEN", change: [newArr]}
    return Object.assign(drawer, opendrawer);
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])