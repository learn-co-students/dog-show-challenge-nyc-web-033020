document.addEventListener('DOMContentLoaded', () => {
    
    const url = 'http://localhost:3000/dogs'
    const tableBody = document.querySelector('#table-body')
    const dogForm = document.querySelector('#dog-form')

    // Fetch request to "index" action
    let getAllDogs = () => {
        fetch(url)
            .then(resp => resp.json())
            .then(json => renderDogs(json))
    }

    //invoke funcion to get all dogs
    getAllDogs()

    //function to render all dogs to table, invoked in fetch call above
    let renderDogs = (data) => {
        for (const dog of data) {
            
            //Build up HTML for <tr>
            const tableRow = document.createElement('tr')
            tableRow.dataset.id = dog.id
            tableRow.innerHTML = `
            <td class="name">${dog.name}</td> <td class="breed">${dog.breed}</td> <td class="sex">${dog.sex}</td> <td><button>Edit</button></td>
            `

            //append <tr> to <tbody>
            tableBody.appendChild(tableRow)
        }
    }

    //click event listener for all buttons, placed on ancestor <tbody>
    tableBody.addEventListener('click', (e) => {

        if (e.target.tagName === 'BUTTON') {
            
            const btn = e.target;
            const tr = btn.parentNode.parentNode
            //Look into better way to get these nodes instead of using index numbers
            const dogName = tr.childNodes[1].textContent //Save name to variable
            const dogBreed = tr.childNodes[3].textContent //Save breed to variable
            const dogSex = tr.childNodes[5].textContent //Save sex to variable
            const dogId = tr.dataset.id

            //invoke function below to add values to form
            populateFormData(dogName, dogBreed, dogSex, dogId)
        }
    })

    //Function to populate edit form from selected record in table
    let populateFormData = (dogName, dogBreed, dogSex, dogId) => {
        
        //Look into better way to get these nodes instead of using index numbers
        const dogNameInput = dogForm.childNodes[1]
        dogNameInput.value = dogName

        const dogBreedInput = dogForm.childNodes[3]
        dogBreedInput.value = dogBreed

        const dogSexInput = dogForm.childNodes[5]
        dogSexInput.value = dogSex

        console.log(dogId)

        //create a hidden field on the form to store the record's id for update purposes
        const hiddenInput = document.createElement('input')
        hiddenInput.setAttribute('type', 'hidden')
        hiddenInput.setAttribute('name', 'id')
        hiddenInput.setAttribute('value', dogId)

        dogForm.prepend(hiddenInput)
        console.log(dogForm.childNodes[0].value)

    }

    

    //form submit event listener
    dogForm.addEventListener('submit', (e) => {
        e.preventDefault() //prevent page reload

        //save form values to variables
        const form = e.target
        console.log
        // const dogName =

        const hiddenInput = dogForm.childNodes[0] //select hidden ID field
        hiddenInput.remove()    //remove hidden ID field

        e.target.reset() //remove form values

        //invoke patch request on server
    })

    // let formPatch = (id) => {

    // }

})