/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/


function tellFurtune(childNum, partner, site, job) {
  let furtune = 'You will be a ' + job + ' in ' + site + ', and married to ' + partner + ' with ' + childNum + ' kids.'
    return furtune
}

childNum = 4;
partner = 'Amy';
site = 'Jordan';
job = 'Developer';
document.write(tellFurtune(childNum, partner, site, job));
document.write("<br>");
document.write("<br>");


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/


function calculateDogAge (puppyAge) {
  let dogYear = puppyAge * 7
  return dogYear
};

puppyAge = 3;
document.write(calculateDogAge(puppyAge));
document.write("<br>");
document.write("<br>");


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/


function calculateSupply (yourAge, amountPerDay) {
  const maxAge = 100;
   let lifeSupply = (maxAge - yourAge) * 356 * amountPerDay;
   let result = 'You will need ' + lifeSupply + ' cups of tea to last you until the ripe old age of 100';
   return result
};

yourAge = 25;
amountPerDay = 1;
document.write(calculateSupply(yourAge, amountPerDay))
document.write("<br>");
document.write("<br>");



/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

var name;

function greet (name) {
  return 'Hello ' + name
}

document.write(greet('alice'))
document.write("<br>");
document.write("<br>");



/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
x is not declared or given a value before it was used


function double(7) {
  return 2 * 7;
}
a number can't be a parameter of a function.

function double('7') {
  return 2 * 'x';
}
a string can't be a parameter of a function.
x is not declared or given a value before it was used
*/


/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
function double1(x) {
  return 2 * x ;
}


functiondouble2 x)
return 2 * x;
}
function double2 (x) {
  return 2 * x;
}

function (x) double3 {
  return 2 * x;

function double3 (x) {
  return 2 * x;
}
*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube (yourNum) {
  let numCube = yourNum * yourNum * yourNum
  return numCube 
};

yourNum = 5;
document.write(cube(yourNum))
document.write("<br>");
document.write("<br>");


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply (num1, num2) {
  let multiple = num1 * num2
  return multiple 
}

num1 = 6;
num2 = 7;
document.write(multiply (num1, num2))
document.write("<br>");
document.write("<br>");


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense (age) {
  if (age >= 20) {
    return('yes you can')
  } else {
    let diff = 20 - age;
    return('please come back after ' + diff + ' years to get one')
  }
}

age = 15;
document.write(canIGetADrivingLicense (age))
document.write("<br>");
document.write("<br>");


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(string1, string2) {
  if (string1.length == string2.length) {
    return true
  } else {
    return false
  }
}

string1 = 'floral';
string2 = 'purple'
document.write(sameLength(string1, string2));
document.write("<br>");
document.write("<br>");


/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNumber(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

a = 15;
b = 46;
document.write(largerNumber(a, b))
document.write("<br>");
document.write("<br>");


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNumber(x, y, z) {
  let smallest ;
  if (x <= y && x <= z) {
    smallest = x
  } 
  else if (y <= x && y <= z) {
    smallest = y
  }
  else {
    smallest = z
  }
  return smallest
}

x = 42;
y = -4;
z = 35;
document.write(smallerNumber(x, y, z))
document.write("<br>");
document.write("<br>");


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(str1 ,str2, str3, str4, str5) {
  let shortest;
  if (str1.length <= str2.length && str1.length <= str3.length && str1.length <= str4.length && str1.length <= str5.length) {
    shortest = str1
  } 
  else if (str2.length <= str1.length && str2.length <= str3.length && str2.length <= str4.length && str2.length <= str5.length) {
    return str2
  }
  else if (str3.length <= str1.length && str3.length <= str2.length && str3.length <= str4.length && str3.length <= str5.length) {
    return str3
  }
  else if (str4.length <= str1.length && str4.length <= str2.length && str4.length <= str3.length && str4.length <= str5.length) {
    return str4
  }
  else {
    return str5
  }
  return shortest
}

document.write(shorterString('hello' , 'flower', 'up','mine', 'try try try'))
document.write("<br>");
document.write("<br>");

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(strA, strB, strC, strD) {
  let longest = '';
  let strArr = [strA, strB, strC, strD];
  for (let i of strArr) {
    longest = strA
    if (i.length > longest.length) {
      longest = i
      break;
    }
  }
  return longest
}

document.write(longerString("air","by","car","github"))
document.write("<br>");
document.write("<br>");

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(number) {
  if (number %2 ==0 ) {
    return true
  } 
  else {
    return false
  }
}

document.write(isEven(845))
document.write("<br>");
document.write("<br>");


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(number) {
  if (number %2 !=0 ) {
    return true
  } 
  else {
    return false
  }
}

document.write(isOdd(845))
document.write("<br>");
document.write("<br>");

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(num3) {
  if (num3 >= 0) {
    return num3
  } 
  else {
    return num3 * -1
  }
}

document.write(positive(-61))
document.write("<br>");
document.write("<br>");

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(fName, lName) {
  let full = fName + ' ' + lName
  return full 
}

document.write(fullName('Sali', 'Salem'))
document.write("<br>");
document.write("<br>");

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(in1, in2, in3, in4, in5) {
  let sum = in1 + in2 + in3 + in4 + in5
  let avg = sum / 5
  return avg
}

document.write(average(56,45,965,45,-51));
document.write("<br>");
document.write("<br>");

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber() {
  return Math.random()
}

document.write(randomNumber());
document.write("<br>");
document.write("<br>");

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers (min, max) {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

min = 95
max = 46
document.write(randomBetweenNumbers (min, max))
document.write("<br>");
document.write("<br>");

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(uniScore) {
  if (uniScore >= 90) {
    return 'A'
  }
  else if (uniScore >= 80) {
    return 'B'
  }
  else if (uniScore >= 70) {
    return 'C'
  }
  else if (uniScore >= 60) {
    return 'D'
  }
  else if (uniScore >= 50) {
    return 'E'
  }
  else {
    return 'F'
  }
}

uniScore = 92
document.write(scoreInUniversty(uniScore))
document.write("<br>");
document.write("<br>");

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

// after a hint of leaving out loops
// the final answer doesn't even need the hours spent on this and the following one
let num = 0;
function counter() {
  num++
  console.log(num)
}

// try ? almost there ?
// let val = 0
// function counter(start) {
//   for (i = start; i<=10; i++) {
//     val = i
//     if (i = start) {
//       break
//     }
//     start += 1
//     counter(start)
//     // continue
//   }
//   console.log(val)
// }

// try ?
// function counter() {
//   let val =0
//   let arr = []
//   for (let u = 0; u <= 10; u++) {
//     arr.push(u)
//     for (let x of arr) {
//       val += u + ' ';
//     }
//   }
//   console.log(val)
// }


// try 2
// function counter() {
//   let val = ''
//   let i =0
//   while (i <=10) {
//     val += i + '<br>'
//     i++
//   }
//   return val
// }
// document.write(counter())
// document.write("<br>");
// document.write("<br>");

// try 1
// function counter() {
//   for (var i = 0; i <= 10; i++) {
//     console.log(i);
//   }
// }
// counter()

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/


function resetCounter() {
  num = 1
  console.log(num)
}

counter()
counter()
counter()
resetCounter()
counter()