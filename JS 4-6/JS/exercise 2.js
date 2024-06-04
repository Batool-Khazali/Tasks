/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

let rate;
function grade (rate) {
  if (rate < 50) {
    return 'Fail'
  }
  else if (rate >= 90) {
    return 'A'
  }
  else if (rate >= 80) {
    return 'B'
  }
  else if (rate >= 70) {
    return 'C'
  }
  else if (rate >= 60) {
    return 'D'
  }
  else {
    return 'E'
  }
}

rate = 75
console.log(grade(rate))