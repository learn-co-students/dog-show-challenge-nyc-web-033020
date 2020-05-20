const dogsURL = "http://localhost:3000/dogs"
const dogPatchURL = "http://localhost:3000/dogs/:id"



//on page load, render dogs already in table

//dog info should be in a row

//make dog info editable w/ form

//send patch request with dog form

//after patch, table shows edited dog info
    //-> send get to dogsURL after patch to reflect newest info




document.addEventListener('DOMContentLoaded', () => {
fetch(dogsURL)
.then(resp => resp.json())
.then(dogs => // insert callback here to populate dog table;

const populateDogTable = () 




})