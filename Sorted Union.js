function uniteUnique(...arr) {
    const flatArr = arr.flat()
    const uniqueNumbers = [...new Set(flatArr)] 
return uniqueNumbers
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union


*/