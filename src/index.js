/*USER STORY

- The dog should be put on the table as a table row. The HTML might look something like this `<tr> <td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>`

PSEUDO CODE

√ Get the main table object (table body)
√ Make fetch url request
    √ ForEach dog, create <tr></tr> with a <td></td> for each category
    √ Append populated dog row to table-body.

---------------
USER STORY

- Make a dog editable. Clicking on the edit button next to a dog should populate the top form with that dog's current information.

PSEUDO CODE

√ Get the edit button
√ Grab the target of the edit button's values (should be dog's values)
√ Get the top edit form
√ Populate the top form with the dog's values

USER STORY

- On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information (including name, breed and sex attributes).

PSEUDO CODE

- Make fetch with method patch 
    - Interpolate url!


- Once the form is submitted, the table should reflect the updated dog information. There are many ways to do this. You could search for the table fields you need to edit and update each of them in turn, but we suggest making a new get request for all dogs and rerendering all of them in the table. Make sure this GET happens after the PATCH so you can get the most up-to-date dog information.

*/

const url = "http://localhost:3000/dogs"
const urlHeaders = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}
const dogDisplay = document.querySelector('#table-body')
const dogForm = document.querySelector('#dog-form')
const dogFormName = dogForm[0]
const dogFormBreed = dogForm[1]
const dogFormSex = dogForm[2]


populateDogTable()

function populateDogTable(){
    fetch(url)
    .then(resp => resp.json())
    .then(dogs => {
        dogs.forEach(dog => {
            createDogRow(dog)
        })
    })
}

function createDogRow(dogObj){
    const dogInfo = document.createElement('tr')
    dogInfo.dataset.id = `${dogObj.id}`
    dogInfo.innerHTML = `
    <td>${dogObj.name}</td> 
    <td>${dogObj.breed}</td> 
    <td>${dogObj.sex}</td> 
    <td><button id="edit" class="${dogObj.name}">Edit</button></td>
    `
    dogDisplay.appendChild(dogInfo)
}

document.addEventListener('click', e => {
    if (e.target.id === "edit"){
        const dogRowInfo = e.target.parentNode.parentNode
        const dogName = dogRowInfo.children[0].textContent
        const dogBreed = dogRowInfo.children[1].textContent
        const dogSex = dogRowInfo.children[2].textContent
        const dogId = dogRowInfo.dataset.id

        dogFormName.value = dogName
        dogFormBreed.value = dogBreed
        dogFormSex.value = dogSex
        dogForm[3].dataset.id = dogId

    } else if (e.target === dogForm[3]){
        e.preventDefault()
        fetch(`${url}/${e.target.dataset.id}`,{
            method: "PATCH",
            headers: urlHeaders,
            body: JSON.stringify({
                name: dogFormName.value,
                breed: dogFormBreed.value,
                sex: dogFormSex.value
            })
        })
        .then(resp => resp.json())
        .then(createDogRow)
        
    }
})
