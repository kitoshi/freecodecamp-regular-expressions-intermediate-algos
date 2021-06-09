function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (const value in arr) {
      const x = arr[value]['avgAlt']
      console.log(x)
      var acubed = Math.pow((earthRadius + x), 3)
      var period = Math.sqrt(acubed/GM) * 2 * Math.PI
      console.log(period)
      arr[value].orbitalPeriod = Math.round(period)
      delete arr[value]['avgAlt']
      console.log(arr)
    }
        return arr
  }
  
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
  
  /*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris



Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

  */