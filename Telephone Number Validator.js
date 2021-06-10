function telephoneCheck(str) {
    const newArr = str.split('')
    console.log(newArr)
    console.log(/^1(\(\d{3}\))(\d{3}\-)\d{4}$/.test(str))
    if (/^1 (\d{3} )(\d{4})/.test(str) == true){ //1 space 3 any numbers group 4 any numbers group
      return true
    } else if (/(?<=1 )\d{3}(?= )/.test(str) == true) { //1 space  any 3 numbers group, followed by space
      return true
    } else if (/^1 (\d{3}\-)(\d{3}\-)\d{4}/.test(str) == true) { //1 space , any 3 numbers , followed by dash, then 4 numbers
      return true
    } else if (/^1 (\(\d{3}\) )(\d{3}\-)\d{4}/.test(str) == true) { //1 space , (any 3 numbers) , followed by space, then (any 3 numbers) dash 4 numbers
      return true
    } else if (/^\d{10}$/.test(str) == true) { //start and end with 10 exactly
      return true
    } else if (/^(\d{3}\-)(\d{3}\-)\d{4}$/.test(str) == true) { //start with 3 num dash , 3 num dash , end with 4 num
      return true
    } else if (/^(\(\d{3}\))(\d{3}\-)\d{4}$/.test(str) == true) { //start with (3 num) , 3 num dash , end with 4 num
      return true
    } else if (/^1(\(\d{3}\))(\d{3}\-)\d{4}$/.test(str) == true) { //start with (3 num) , 3 num dash , end with 4 num
      return true
    }
  
    return false;
  }
  
  telephoneCheck("1(555)555-5555")

  /*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

  */