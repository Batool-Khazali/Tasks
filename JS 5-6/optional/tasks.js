// exercise 1 
let text1 = document.getElementById('hello');
let original = text1.innerHTML;
text1.addEventListener('mouseover' , function () {
    this.innerHTML = 'Can I help you?'
});
text1.addEventListener('mouseout' , function () {
    this.innerHTML = original
});


// exercise 2
let coloredBox = document.getElementById('color');
coloredBox.addEventListener('click', function() {
    this.style.backgroundColor = 'red'
});


// exercise 3
const yourCountry = document.getElementById('country');
yourCountry.addEventListener('change', function() {
    let value = yourCountry.value;
    let flags = document.getElementById('flag')
    flags.src = value
});


// exercise 4
const sampleText = document.getElementById('text');

const fontFamily = document.getElementById('font');
fontFamily.addEventListener('change', function() {
    let fontValue = fontFamily.value;
    sampleText.style.fontFamily = fontValue
});

const fontSize = document.getElementById('size');
fontSize.addEventListener('change', function() {
    let sizeValue = fontSize.value;
    sampleText.style.fontSize = sizeValue
});

const italicText = document.getElementById('italic');
italicText.addEventListener('click', function() {
    if (this.checked) {
        sampleText.style.fontStyle = 'italic'
    }
    else {
        sampleText.style.fontStyle = 'initial'

    }
});

const boldText = document.getElementById('bold');
boldText.addEventListener('click', function() {
    if (this.checked) {
        sampleText.style.fontWeight = 'bold'
    }
    else {
        sampleText.style.fontWeight = 'initial'

    }
});

const underlineText = document.getElementById('underline');
underlineText.addEventListener('click', function() {
    if (this.checked) {
        sampleText.style.textDecoration = 'underline'
    }
    else {
        sampleText.style.textDecoration = 'initial'

    }
});



// exercise 5
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat');
const submitButton = document.getElementById('submit')

const error1 = document.getElementById('length');
const error2 = document.getElementById('match');

password.addEventListener("input", function() {
    if (password.value.length < 6) {
        error1.innerHTML = 'Too short'
    }
    else {
        error1.innerHTML = '';
        if (repeatPassword.value == password.value) {
                console.log('test')
                submitButton.style.display = 'inline'
        };
    }
});

repeatPassword.addEventListener("input", function() {
    if (repeatPassword.value !== password.value) {
        error2.innerHTML = 'The password do not match'
    }
    else {
        error2.innerHTML = '';
        if (password.value.length >= 6) {
                console.log('test2')
                submitButton.style.display = 'inline'
        }
    }
});




// this was my first solution for the error message
// i choose to stop and try another method to see if it's possible to do with less lines

// const box2 = document.getElementsByClassName('box2');
// let error = document.createTextNode(' ');

// password.addEventListener("input", function() {
//     if (password.value.length < 6) {
//         box2[0].appendChild(error);
//         error.nodeValue = 'this password is too short';
//         box2[0].removeChild(error);
//         box2[0].appendChild(error);
//     }
//     else {
//         box2[0].appendChild(error);
//         box2[0].removeChild(error);
//     }
// });

// repeatPassword.addEventListener("input", function() {
//     if (repeatPassword.value !== password.value) {
//         box2[1].appendChild(error);
//         error.nodeValue = 'do not match';
//         box2[1].removeChild(error);
//         box2[1].appendChild(error);
//     }
//     else {
//         box2[1].appendChild(error);
//         box2[1].removeChild(error);
//     }
// });



// exercise 6
const songName = document.getElementById('song');
const addSong = document.getElementById('addSong');
const list = document.getElementById('songList')

addSong.addEventListener('click', function () {
    let newSong = document.createElement('p')
    newSong.innerHTML = songName.value
    list.appendChild(newSong)
})