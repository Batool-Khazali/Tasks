let info = {
    'first name' : 'Batool',
    'last name' : 'Khazali',
    'age' : ' 28',
    'adress' : 'jordan - mafraq',
    'favorite color' : 'purple and pastels'
};
console.log(info);
console.log(typeof info);


const infoString = JSON.stringify(info);
console.log(infoString);
console.log(typeof infoString);
localStorage.setItem("testJSON", infoString);


const infoParse = JSON.parse(infoString);
console.log(infoParse);
console.log(typeof infoParse);



