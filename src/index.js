const dogsURL = "http://localhost:3000/dogs"
const dogPatchURL = "http://localhost:3000/dogs/:id"


//on page load, render existing dogs set inside of table format
        //-> fetch dogs
        //-> send dogs to callback that populates table

//dog info should be in a row
        //-> assumed setup in readme

//make dog info editable w/ form

//send patch request with dog form

//after patch, table shows edited dog info
    //-> send get to dogsURL after patch to reflect newest info




document.addEventListener('DOMContentLoaded', () => {
    //fetch dog info when page loads
    fetch(dogsURL)
    .then(resp => resp.json())
    .then(json => populateDogTable(json));

//create dog table for later use
const dogTable = document.createElement('table')


//populate dog table
const populateDogTable = dogs => {
dogs.forEach(dog => {
    console.log(dogTable)
    dogTable.innerHTML =  `
        <tr>
        <td>${dog.name}</td> 
        <td>${dog.breed}</td> 
        <td>${dog.sex}</td> 
        <td><button>Edit</button></td>
        </tr>
            `
    })
}




//dogTableBody.appendChild()

})






