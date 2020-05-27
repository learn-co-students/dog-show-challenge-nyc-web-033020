// mock Dog

// dog =     {
//     "id": 1,
//     "name": "Baby",
//     "breed": "Scottish Deerhound",
//     "sex": "male"
//     }

state = {
    dogId: null,
    dogName: null,
    dogBreed: null,
    dogSex: null
}

function renderAllDogs(dogs) {
    let tableBody = document.getElementById("table-body")
    tableBody.innerHTML = ""
    dogs.forEach(dog => {
        tableBody.innerHTML +=
            `<tr id="${dog.id}">
        <td>${dog.name}</td>
        <td>${dog.breed}</td>
        <td>${dog.sex}</td>
        <td>
            <button id="${dog.id}" class="edit">Edit</button>
        </td>
    </tr>`
    })
}

function getAllDogsFromServer() {
    fetch(`http://localhost:3000/dogs`)
        .then(response => response.json())
        .then(dogs => {
            renderAllDogs(dogs)
        })
}

function clickEditButton() {
    document.addEventListener("click", function (event) {
        if (event.target.className === "edit") {
            state.dogId = event.target.id
            fetch(`http://localhost:3000/dogs/${state.dogId}`)
                .then(response => response.json())
                .then(dog => {
                    clickEditButtonRenderDogInForm(dog)
                })
        }
    })
}

function clickEditButtonRenderDogInForm(dog) {
    dogForm = document.getElementById("dog-form")
    dogForm.name.value = dog.name
    dogForm.breed.value = dog.breed
    dogForm.sex.value = dog.sex
    
    //this is wrong bc u are getting the initial value not the changed value
    // state.dogName = dogForm.name.value
    // state.dogBreed = dogForm.breed.value
    // state.dogSex = dogForm.sex.value

}

document.addEventListener("submit", function(event){
    const form = event.target
    event.preventDefault()
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: form.name.value,
            breed: form.breed.value,
            sex: form.sex.value
        })
    }
    fetch(`http://localhost:3000/dogs/${state.dogId}`,options)
    .then(response => response.json())
    .then(getAllDogsFromServer)
})


document.addEventListener('DOMContentLoaded', () => {
    getAllDogsFromServer()
    clickEditButton()
})
