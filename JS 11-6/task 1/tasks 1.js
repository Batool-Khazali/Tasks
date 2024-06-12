// task 1

const apiURL = 'https://66681676f53957909ff67af8.mockapi.io/users/Animals';

async function animalsOptions() {
    const data = await fetch(apiURL);
    const jsonData = await data.json();
    // console.log(jsonData);

    const options = document.getElementById('animal');
    let newOpt;
    const image = document.getElementById('animalImage');
    let newImage = document.createElement('img');
    newImage.src = jsonData[0].image
    image.appendChild(newImage);
    
    for (let i = 0; i < jsonData.length; i++) {
        const animalName = jsonData[i].name;
        newOpt = document.createElement('option');
        newOpt.innerHTML = animalName;
        newOpt.value = i;
        options.appendChild(newOpt);
    };

    options.addEventListener('change', function(e) {
        let index = this.value;
        newImage.src = jsonData[index].image;
    });
};

animalsOptions();

