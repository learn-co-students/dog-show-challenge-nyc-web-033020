document.addEventListener('DOMContentLoaded', () => {

//√ GET request to /dogs

//√ render each dog as a table row 

//√click listener for edit buttons - delegation 
//√pull dog's data from the table -> 
//√enter it into form 

//√submit listener
//√get data out of form
//√PATCH request to /dogs/:id - √data binding - √update dog info 

//re-render dogs colelction (i.e. redo get request, etc)

  const url = 'http://localhost:3000/dogs'
  const tableBody = document.querySelector('#table-body')

    const getDogs = () => {
        fetch(url)
        .then(res => res.json())
        .then(renderDogs)
    }

    const renderDogs = dogs => {
        tableBody.innerHTML = ''
        dogs.forEach(dog => {
            const row = document.createElement('tr')
            row.dataset.id = dog.id
            row.innerHTML = `
            <td>${dog.name}</td>
            <td>${dog.breed}</td>
            <td>${dog.sex}</td>
            <td> 
                <button class = 'edit'>Edit</button>
            </td>
            `    
            tableBody.append(row)
         })
    }

    tableBody.addEventListener('click', event => {
        if(event.target.className === 'edit') { //event is the 'click', target is what the event listener is on, in this case - edit
            const row = event.target.parentNode.parentNode // first parentNode of event.target = cells (<td></td>), second = row (<tr></tr>)
            const cells = row.getElementsByTagName('td')

            const name = cells[0].textContent 
            const breed = cells[1].textContent
            const sex = cells[2].textContent

            const form = document.querySelector('#dog-form')

            form.name.value = name 
            form.breed.value = breed
            form.sex.value = sex 
            
            form.dataset.id = row.dataset.id 
        }
    })

    document.addEventListener('submit', event => {
        event.preventDefault()
        const form = event.target 
        const id = form.dataset.id 
        const name = form.name.value 
        const breed = form.breed.value 
        const sex = form.sex.value 

        fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({name, breed, sex})
        })
        .then(res => res.json())
        .then(getDogs)
    })

    getDogs()
//  
})


