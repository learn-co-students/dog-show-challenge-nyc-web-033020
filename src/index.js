// Roadmap
//√ Load all dogs
    // √fetch dogs
    //√ build dog table-row HTML
    //√ <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>
        //√ includes "edit dog" button"
    //√ append to DOM
// Make event listener for edit buttons
    // on submit, send fetch PATCH
        // Do we need nested fetches?
    // after submit, rerender dogs
    
    const dogsURL = "http://localhost:3000/dogs"

    document.addEventListener('DOMContentLoaded', () => {
        loadDogs()
    })
    
    document.addEventListener("click",(e) => {
        if (e.target.textContent === "Edit"){
            loadDogForm(e.target)
        }
    })
    
    document.addEventListener("submit", (e) => {
        // e.preventDefault()
        updateDogDataFromForm()
        // const dogTable = document.getElementById('table-body')
        // dogTable.innerHTML = ""
    
        // window.setTimeout(loadDogs(), 2*100000)
        
    })
    
    
    // This function takes the current form data and uses it to make a PATCH to the specific dog in the database
    const updateDogDataFromForm = () => {
        const dogForm = document.getElementById("dog-form")
        const dogID = dogForm.dataset.id
        fetch(`${dogsURL}/${dogID}`,{
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify({
                name : dogForm.children[0].value,
                breed : dogForm.children[1].value,
                sex : dogForm.children[2].value
            })
        })
        
    }
    
    // This function loads the current dog data into the dog form
    const loadDogForm = (editButton) =>{
        const dogForm = document.getElementById("dog-form")
        const dogID = editButton.parentNode.parentNode.dataset.id
        fetch(`${dogsURL}/${dogID}`)
        .then(r => r.json())
        .then(dog => {
            dogForm.dataset.id = dog.id
            dogForm.children[0].value = dog.name
            dogForm.children[1].value = dog.breed
            dogForm.children[2].value = dog.sex
        })
    }
    // These functions load the dogs to the page from the database.
    const loadDogs = () => {
        fetch(dogsURL)
        .then(r => r.json())
        .then(makeDogs)
    }
    
    const makeDogs = (dogs) =>{
        dogs.forEach(dog => makeSingleDog(dog))
    }
    
    const makeSingleDog = (dog) =>{
        const dogTable = document.getElementById('table-body')
        const newDogRow = document.createElement('tr')
        newDogRow.dataset.id = dog.id
        newDogRow.innerHTML = `
        <td>${dog.name}</td>
        <td>${dog.breed}</td>
        <td>${dog.sex}</td>
        <td>
        <button>Edit</button>
        </td>
        `
        dogTable.append(newDogRow)
    }
    
    // This code was going to be used to find a single row and update it.
    //  Turned out to be pretty tedious and not really worth it.
        // Stretch refactor of single dog update
        // let reRenderSingleDog = () => {
        //     const dogTable = document.getElementById('table-body')
        //     dogRows = dogTable.getElementsByTagName("tr")
        //     dogRows[]
        // }
        // const dogTable = document.getElementById('table-body')
        // const dogRows = dogTable.getElementsByTagName("tr")
        // const dogRow = dogRows[dogID]
        // const dogColumns = dogRow.children
        // dogRow.children[0] = dogForm.children[0].value
        // dogRow.children[1] = dogForm.children[1].value
        // dogRow.children[2] = dogForm.children[2].value