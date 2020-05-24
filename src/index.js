const dogsURL = "http://localhost:3000/dogs"
const dogPatchURL = "http://localhost:3000/dogs/:id"
const editButton = document.querySelector('edit')
const submitButton = document.querySelector('submit')
//const dogForm = document.querySelector('dog-form')


document.addEventListener('DOMContentLoaded', () => {
 //create dog table for later use
const tableBody = document.getElementById('table-body')

//fetch dog info when page loads
const fetchDogs = () =>
fetch(dogsURL)
.then(resp => resp.json())
.then(json => populateDogTable(json))

fetchDogs()
//populate dog table with dogs from URL
const populateDogTable = dogs => {
    dogs.forEach(dog => {
        const row = tableBody.insertRow(-1)
        row.innerHTML =  `
            <tr>
            <td>${dog.name}</td> 
            <td>${dog.breed}</td> 
            <td>${dog.sex}</td> 
            <td>
                <button data-dog-id=${dog.id} class="edit">Edit</button>
            </td>
            </tr>
                `
        })
    
    }
    tableBody.addEventListener('click', event => {
    if (event.target.className === 'edit'){
        const dogForm = document.querySelector('#dog-form')
        const dogRow = event.target.parentNode.parentNode
        const dogCell = dogRow.getElementsByTagName('td')

        const name = dogCell[0].textContent
        const breed = dogCell[1].textContent
        const sex = dogCell[2].textContent

            dogForm.id.value = event.target.dataset.dogId
            dogForm.name.value = name
            dogForm.breed.value = breed
            dogForm.sex.value = sex

        } // closing brace for if
    }) // closing for table event listner
    const dogForm = document.querySelector('#dog-form')
    dogForm.addEventListener('submit', event =>{
        const dId = dogForm.id.value
        const name = dogForm.name.value
        const breed = dogForm.breed.value
        const sex = dogForm.sex.value
    
        const data = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                   "Accept": "application/json"
            },
            body: JSON.stringify({name, breed, sex})
            }
         
            const specificURL = `http://localhost:3000/dogs/${dId}`
             fetch(specificURL, data) 
            .then(resp => resp.json())
            //.then(editedDog => {
            .then(edits => { fetchDogs(edits)
            })
        //patch info
        

            //fetchDogs()
            })
            
        
        })





