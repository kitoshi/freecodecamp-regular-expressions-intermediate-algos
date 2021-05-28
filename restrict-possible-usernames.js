let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+$|^[a-z]+([a-z]$|\d\d+$|[a-z]\d+$)/i; // Change this line
/* ^[a-z] is match beginning of input
\w matches any alphanumeric character 

*/
let result = userCheck.test(username);

/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames
Restrict Possible Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.



*/