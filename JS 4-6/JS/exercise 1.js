/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  
let m = '';
let n = '';
function compare (m , n) {
    if (m > n) {
        return m
    }
    else {
        return n
    }
};
m = 5;
n = 9;
console.log(compare(m,n))


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
let a;
let b;
let c;
let product = a * b * c;
if (product >= 0){
   console.log('The sign is +')
}
else {
   console.log('The sign is -')
};

a = 3;
b = -7;
c = 2;


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  
let d;
let e;
let f;
function order (d , e , f){
    if (d > e && d > f) {
        if (e > f){
            return d + ',' + e + ',' + f
        }
        else {
            return d + ',' + f + ',' + e 
        }
    }
    else if (d < e && d < f) {
        if (e > f) {
            return e + ',' + f + ',' + d
        }
        else {
            return f + ',' + e + ',' + d
        }
    }
    else {
        if (e > f) {
            return e + ',' + d + ',' + f
        }
        else {
            return f + ',' + d + ',' + e
        }
    }
}

d = 0;
e = -1;
f = 4;
window.alert(order(d,e,f))
console.log(order(d,e,f))


 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  
let biggest = '';
let arr = [-5, -2, -6, 0, -1];
for ( let i of arr) {
    if (i >= i++) {
        biggest = i
    }
    else {
        biggest = biggest
    }
}

window.alert(biggest)
console.log(biggest)

 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert .*/
/******* Start Your Code *********/

let x = 50;
let y = 0;
if (x > y) {
    console.log("Hello World")
}
else {
    window.alert("Goodbye")
};
  
 /******* End Your Code ********* */



