const formInfo = document.getElementById('userForm')
const formSubmit = document.getElementById('submit')
const crd = document.getElementById('infoCard')
let personalInfo = {};
let eduInfo = {};
let familyInfo = {};


formInfo.addEventListener ('input', function () {

    const userName = document.getElementById('name');
    const userAge = document.getElementById('age');
    const userGender = document.getElementById('gender');
    const userBD = document.getElementById('birthDate');
    const userImage = document.getElementById('image');

    personalInfo = {
        userName : userName.value,
        userAge : userAge.value,
        userGender : userGender.value,
        userBD : userBD.value,
        userImage : userImage.value,
    };
    // console.log(personalInfo);
    for (const [key, value] of Object.entries(personalInfo)) {
        console.log(`${key}: ${value}`);
    }

    const userDiscription = document.getElementById('discription');
    const userUni = document.getElementById('uni');
    // const userHTML = document.getElementById('html');
    // const userCSS = document.getElementById('css');
    // const userJS = document.getElementById('js');
    const checks = document.querySelectorAll('input[type="checkbox"]');
    const userLang = document.getElementById('checks');

    eduInfo = {
        userDiscription : userDiscription.value,
        userUni : userUni.value,
        // userHTML : userHTML.checked,
        // userCSS : userCSS.checked,
        // userJS : userJS.checked,
        userLang : []
    };

    checks.forEach(function (x) {
        if (x.checked) {
            console.log(x.name)
            let xName = x.name
            eduInfo.userLang.push(xName)
        }
    });
    console.log(eduInfo);
    for (const [key, value] of Object.entries(eduInfo)) {
        console.log(`${key}: ${value}`);
      }

    const userSiblings = document.getElementById('siblings');
    const userSiblingsDisc = document.getElementById('siblingsDisc');

    familyInfo = {
        userSiblings : userSiblings.value,
        userSiblingsDisc : userSiblingsDisc.value,
    };
    console.log(familyInfo);
    for (const [key, value] of Object.entries(familyInfo)) {
        console.log(`${key}: ${value}`);
      }

    const personalJSON = JSON.stringify(personalInfo);
    localStorage.setItem("personal information", personalJSON);
    const eduJSON = JSON.stringify(eduInfo);
    localStorage.setItem("education information", eduJSON);
    const familyJSON = JSON.stringify(familyInfo);
    localStorage.setItem("family information", familyJSON);

    // card();
});


// the card is not working fully and i'm not exactly sure why

// function card() {
//     // console.log('test')

//     for (const [key, value] of Object.entries(personalInfo)) {
//         // console.log('test2')
//         let newCell = document.createElement('p');
//         newCell.innerHTML = `${key}: ${value}`;
//         crd.appendChild(newCell)
//     };

//     for (const [key, value] of Object.entries(eduInfo)) {
//         // console.log('test3')
//         let newCell = document.createElement('p');
//         newCell.innerHTML = `${key}: ${value}`;
//         crd.appendChild(newCell)
//     };

//     for (const [key, value] of Object.entries(familyInfo)) {
//         // console.log('test2')
//         let newCell = document.createElement('p');
//         newCell.innerHTML = `${key}: ${value}`;
//         crd.appendChild(newCell)
//     };

// };
