dogsUrl = 'http://localhost:3000/dogs'
document.addEventListener('DOMContentLoaded', () => {

    fetch(dogsUrl)
    .then(res => res.json())
    .then(allDogs => renderDogs(allDogs))

    function renderDogs(allDogs){
        dogsTable = document.querySelector('#table-body')
        dogForm = document.querySelector('#dog-form')
        
        allDogs.forEach(dog => {
            newDogRow = document.createElement('tr')
            newDogRow.innerHTML = `
            <td>${dog.name}</td> 
            <td>${dog.breed}</td> 
            <td>${dog.sex}</td> 
            <td><button data-num="${dog.id}">Edit Dog</button></td>
            `
            dogsTable.append(newDogRow)
            editBtn = document.querySelector(`[data-num="${dog.id}"]`)
            editBtn.addEventListener('click', e => {
                dogForm.name.value = dog.name
                dogForm.breed.value = dog.breed
                dogForm.sex.value = dog.sex
                dogForm.dataset.id = dog.id
            })
        })
        dogForm.addEventListener('submit', e => {
            e.preventDefault()
            fetch(dogsUrl + '/' + e.target.dataset.id, {
                method: 'PATCH',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    "name": dogForm.name.value,
                    "breed": dogForm.breed.value,
                    "sex": dogForm.sex.value
                })
            })
            window.location.reload()
            // fetch(dogsUrl + '/' + e.target.dataset.id)
            // .then(res => res.json())
            // .then(data => {
            //  console.log(dogsTable)
            // })
        })
    }
})




// X render a list of already registered dogs
// X dog should be put on the table as a table row
// X `<tr>
// X     <td>Dog *Name*</td> 
// X     <td>*Dog Breed*</td> 
// X     <td>*Dog Sex*</td> 
// X     <td><button>Edit</button></td>
// X </tr>`
// X make dog editable via edit button
// X form populates with dog's current info

// submit 'PATCH' to to http://localhost:3000/dogs/:id
    // including name, breed and sex attributes
    // make new get request for all dogs to show updated list