const url = 'https://66681676f53957909ff67af8.mockapi.io/users/Students';

async function studentData() {
    const theData = await fetch(url);

    // console.log('theData',theData);

    const jsonData = await theData.json() ;
    console.log(jsonData);

    const stdntID = document.getElementById('exampleInputEmail1');
    const stdntName = document.getElementById('exampleInputPassword1');

    stdntID.value = jsonData[4].id;
    stdntName.value = jsonData[4].name;

    // here i tried to get the name by entering the id
    // i strarted the oppisite but couldn't do it at the time
    
    // stdntID.addEventListener ('input', function () {
    //     let index = stdntID.value - 1;
    //     stdntName.value = '';
    //     stdntName.value = jsonData[index].name;
    // });
    
};

studentData()