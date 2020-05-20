dogsUrl = 'http://localhost:3000/dogs'
document.addEventListener('DOMContentLoaded', () => {

    fetch(dogsUrl)
    .then(res => res.json())
    .then(allDogs => renderDogs(allDogs))

    function renderDogs(allDogs){
        dogsTable = document.querySelector('#table-body')

        // dogForm = document.querySelector('#dog-form')

        // dogForm.addEventListener('submit', e => {
        //     e.preventDefault()
        //     fetch(dogsUrl + '/' +`${dog.id}`, {
        //         method: 'PATCH',
        //         headers:{
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             "name": dogForm.name.value,
        //             "breed": dogForm.breed.value,
        //             "sex": dogForm.sex.value
        //         })
        //     })
        // })


        allDogs.forEach(dog => {
            newDogRow = document.createElement('tr')
            newDogRow.innerHTML = `
                <td>${dog.name}</td> 
                <td>${dog.breed}</td> 
                <td>${dog.sex}</td> 
                <td><button id="dog-${dog.id}">Edit Dog</button></td>
            `
            dogsTable.append(newDogRow)
            editBtn = document.querySelector(`#dog-${dog.id}`)
            dogForm = document.querySelector('#dog-form')
            editBtn.addEventListener('click', e => {
                dogForm.name.value = dog.name
                dogForm.breed.value = dog.breed
                dogForm.sex.value = dog.sex
            })
        })
            dogForm.addEventListener('submit', e => {
                e.preventDefault()
                fetch(dogsUrl + '/' +`${dog.id}`, {
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