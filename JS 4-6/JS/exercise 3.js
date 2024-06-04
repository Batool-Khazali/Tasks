// 1. Write a JS code to print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    document.write(i + ' ')
}
document.write("<br>");
document.write("<br>");

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/

var arr5 = [13,23,12,45,22,48,66,100]
var evenArr5 = []
for (let i of arr5) {
    if (i % 2 === 0) {
        evenArr5.push(i)
    }
}

document.write(evenArr5);
document.write("<br>");
document.write("<br>");
/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/


for (let loopCount = 1; loopCount <= 8; loopCount++) {
    for (let l = 1; l <= loopCount; l++) {
        document.write(l + ' ');
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/

let o = "don’t know why";
if (o.includes('y') == true) {
    document.write('yes')
}
else {
    document.write('no')
}
document.write("<br>");
document.write("<br>");
