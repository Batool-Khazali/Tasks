let box = document.getElementById('hello')
box.addEventListener('mouseover', function() {
    change = box.innerHTML = 'Hello World!'
})
box.addEventListener('mouseout', function() {
    change = box.innerHTML = 'Can I help you?'
})


const yourCountry = document.getElementById('country');

yourCountry.addEventListener('change', function() {
    let value = yourCountry.value;
    let flags = document.getElementById('flag')
    if (value === 'jordan') {
        flags.src = 'images/jordan.png'
    }
    else if (value === 'palastine') {
        flags.src = 'images/palastine.png'
    }
    else if (value === 'saudi') {
        flags.src = 'images/saudi.png'
    }
    else if (value === 'egypt') {
        flags.src = 'images/egypt.png'
    }
    else if (value === 'syria') {
        flags.src = 'images/syria.png'
    }
})

// this was my first for this solution
// yourCountry.addEventListener('change', function() {
//     let value = yourCountry.value;
//     let flags = document.getElementById('flag')
//     flags.style.opacity = 1
//     flags.src = 'images/' + value + '.png'
// })


const sampleText = document.getElementById('text')

const fontFamily = document.getElementById('font')
fontFamily.addEventListener('change', function() {
    let fontValue = fontFamily.value;
    sampleText.style.fontFamily = fontValue
})

const fontSize = document.getElementById('size')
fontSize.addEventListener('change', function() {
    let sizeValue = fontSize.value;
    sampleText.style.fontSize = sizeValue
})

const italicText = document.getElementById('italic')
italicText.addEventListener('click', function() {
    if (this.checked) {
        sampleText.style.fontStyle = 'italic'
    }
    else {
        sampleText.style.fontStyle = 'initial'

    }
})

const boldText = document.getElementById('bold')
boldText.addEventListener('click', function() {
    if (this.checked) {
        sampleText.style.fontWeight = 'bold'
    }
    else {
        sampleText.style.fontWeight = 'initial'

    }
})

const underlineText = document.getElementById('underline')
underlineText.addEventListener('click', function() {
    if (this.checked) {
        sampleText.style.textDecoration = 'underline'
    }
    else {
        sampleText.style.textDecoration = 'initial'

    }
})
