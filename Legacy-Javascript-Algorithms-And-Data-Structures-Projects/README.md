### JavaScript Algorithms and Data Structures Projects:
#### [Roman Numeral Converter](https://github.com/AndrewTer/freeCodeCamp/blob/master/Legacy-Javascript-Algorithms-And-Data-Structures-Projects/Roman-Numeral-Converter/main.js)
Convert the given number into a roman numeral.<br/>
All roman numerals answers should be provided in upper-case.

#### [Caesars Cipher](https://github.com/AndrewTer/freeCodeCamp/blob/master/Legacy-Javascript-Algorithms-And-Data-Structures-Projects/Caesars-Cipher/main.js)
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipherthe meanings of the letters are shifted by some set amount.<br/>
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.<br/>
Write a function which takes a ROT13 encoded string as input and returns a decoded string.<br/>
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
  
#### [Palindrome Checker](https://github.com/AndrewTer/freeCodeCamp/blob/master/Legacy-Javascript-Algorithms-And-Data-Structures-Projects/Palindrome-Checker/main.js)
Return trueif the given string is a palindrome. Otherwise, return false.<br/>
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.<br/>
> Note<br/>
  You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.<br/>
  We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR"among others.<br/>
  We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
  
#### [Telephone Number Validator](https://github.com/AndrewTer/freeCodeCamp/blob/master/Legacy-Javascript-Algorithms-And-Data-Structures-Projects/Telephone-Number-Validator/main.js)
Return trueif the passed string looks like a valid US phone number.<br/>
The user may fill out the form field any way they choose as long as it has the format of a valid US number.<br/>
The following are examples of valid formats for US numbers (refer to the tests below for other variants):<br/>
555-555-5555<br/>
(555)555-5555<br/>
(555) 555-5555<br/>
555 555 5555<br/>
5555555555<br/>
1 555 555 5555

> For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.<br/>
Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required.<br/>
If the country code is provided, you must confirm that the country code is 1.<br/>
Return trueif the string is a valid US phone number; otherwise return false.

#### [Cash Register](https://github.com/AndrewTer/freeCodeCamp/blob/master/Legacy-Javascript-Algorithms-And-Data-Structures-Projects/Cash-Register/main.js)
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

> cid is a 2D array listing available currency.<br/>
The checkCashRegister() function should always return an object with a statuskey and a changekey.<br/>
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.<br/>
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key changeif it is equal to the change due.<br/>
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the changekey.<br/>
  
  | Currency Unit       | Amount              |
  | ------------------- |:-------------------:|
  | Penny               | $0.01 (PENNY)       |
  | Nickel              | $0.05 (NICKEL)      |
  | Dime                | $0.1  (DIME)        |
  | Quarter             | $0.25 (QUARTER)     |
  | Dollar              | $1    (DOLLAR)      |
  | Five Dollars        | $5    (FIVE)        |
  | Ten Dollars         | $10   (TEN)         |
  | Twenty Dollars      | $20   (TWENTY)      |
  | One-hundred Dollars | $100  (ONE HUNDRED) |

#### [JavaScript Algorithms and Data Structures Certification](https://www.freecodecamp.org/certification/andrey-terehin/javascript-algorithms-and-data-structures)
