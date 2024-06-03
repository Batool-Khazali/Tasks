/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/


let x = 250;
let zakat = x * 0.025
document.write('task 0');
document.write('<br>');
document.write('the zakat of ' + x + ' is ' + zakat + '.');
document.write('<br>');
document.write('<br>');


/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

let arr1 = [ 1,7 , 9 , 45, ];
// error: you cannot use white space to seperate array values
// solution: add , between different values

let arr2 = ["Str" , "alex","moh" ];
// error 1: array brackets must be closed at the begining and the end
// solution 1: add ] at the end
// error 2: you cannot use white space to seperate array values
// solution 2: add , between different values

let arr3 = ['the','fox' ,'over' , 'lazy', 'dog',  ]
// error 1: array brackets must be closed at the begining and the end
// solution 1: add ] at the begining
// error 2: you cannot use white space to seperate array values
// solution 2: add , between different values
// error 3: strings must be in qoutations or double qoutations marks
// solution 3: add '' around the string

let arr4 =  ["Str" , "alex","moh" ,

'the','fox' , 'over lazy', 'dog',  ]
// solution: add , between values and '' around strings

document.write('task 1')
document.write('<br>');
document.write(arr1);
document.write('<br>');
document.write(arr2);
document.write('<br>');
document.write(arr3);
document.write('<br>');
document.write(arr4);
document.write('<br>'); 
document.write('<br>');



/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

var fruits=["Tomato","Banana","Watermelon"]
document.write("task 2");
document.write('<br>');
document.write(fruits.indexOf('Banana'))
document.write('<br>');
document.write(fruits.indexOf('Tomato'))

document.write('<br>');
document.write('<br>');



/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/


let favFood= ['khobs be basal ', ' mullberry']
let favSport= ['walking ', ' gynmastics ', ' skating']
let favMovie= ['narnia ', ' lord of the rings']


document.write('task 3');
document.write('<br>');
document.write(favFood);
document.write('<br>');
document.write(favSport)
document.write('<br>');
document.write(favMovie)
document.write('<br>');
document.write('<br>');



/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let arr5 = ['purple', 'cats', 13, 'dolls'];
var firstElement = arr5[0]

document.write('task 4');
document.write('<br>');
document.write(firstElement)
document.write('<br>');
document.write('<br>');



/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

var lastElement = arr5.pop();

document.write('task 5');
document.write('<br>');
document.write(lastElement)
document.write('<br>');
document.write('<br>');



/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0,5,7,9];
array.shift();
array.shift();
array.unshift(1,3,4);
array.pop();
array.pop();
array.push(6,8,9,10);

document.write('task 6');
document.write('<br>');
document.write(array);
document.write('<br>');
document.write('<br>');



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5,9,-7,3.5];
console.log('task 7');
console.log(array2);
console.log(array2.push(3.14));
console.log(array);
console.log(array.unshift(58));
console.log(array);
console.log(array.shift());
console.log(array);
console.log(array.pop());
console.log(array);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

let arr6 = [-3,8,7,6,5,-4,3,2,1,-16,32,0]

document.write('task 8');
document.write('<br>');
document.write(arr6.sort(function(a, b){return a - b}))
