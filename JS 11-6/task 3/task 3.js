const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const bdate = document.getElementById('bdate');
const email = document.getElementById('email');
const cnfmEML = document.getElementById('cnfmEML');
const password = document.getElementById('password');
const cnfmPW = document.getElementById('cnfmPW');

const fnerror = document.getElementById('fnerror');
const lnerror = document.getElementById('lnerror');
const bderror = document.getElementById('bderror');
const emlerror = document.getElementById('emlerror');
const cnfmEMLerror = document.getElementById('cnfmEMLerror');
const pwerror = document.getElementById('pwerror');
const cnfmPWerror = document.getElementById('cnfmPWerror');

// console.log('test');

fname.addEventListener('input', function() {
    // console.log('0')
    const req =  /^[A-Za-z\'\._-\s]+$/;

    if (req.test(fname.value)){
        // console.log('1')
        fnerror.innerHTML = ' '
    }
    else{
        // console.log('2')
        fnerror.innerHTML = "Numbers and special charachters are not allowed. you can use \', - or _ only."
    }
});

lname.addEventListener('input', function() {
    const req =  /^[A-Za-z\'\._-\s]+$/;

    if (req.test(lname.value)){
        lnerror.innerHTML = ' '
    }
    else{
        lnerror.innerHTML = "Numbers and special charachters are not allowed. you can use \', - or _ only."
    }
});

bdate.addEventListener('input', function() {
    const req =  /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;;

    if (req.test(bdate.value)){
        bderror.innerHTML = ' '
    }
    else{
        bderror.innerHTML = "THe format should be dd/mm/yy"
    }
});

email.addEventListener('input', function() {
    // const req =  /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    const req =  /^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;

    if (req.test(email.value)){
        emlerror.innerHTML = ' '
    }
    else{
        emlerror.innerHTML = "The e-mail is not valid"
    }
});

cnfmEML.addEventListener('input', function() {
    if (cnfmEML.value === email.value){
        cnfmEMLerror.innerHTML = ' '
    }
    else{
        cnfmEMLerror.innerHTML = "The e-mail does not match"
    }
});

password.addEventListener('input', function() {
    const req =  /^[^\s]{6,}$/;

    if (req.test(password.value)){
        pwerror.innerHTML = ' '
    }
    else{
        pwerror.innerHTML = "The e-mail is not valid"
    }
});

cnfmPW.addEventListener('input', function() {
    if (cnfmPW.value === password.value){
        cnfmPWerror.innerHTML = ' '
    }
    else{

        cnfmPWerror.innerHTML = "The password does not match"
    }
});

