// GET request
// render each dog as table row

// event listener edit buttons on document
// get dogs data from table >> enter it into form

// event listener submit button on document

// PATCH requet to dogs/:id - data binding? - update dog info

// re render table with new data



document.addEventListener('DOMContentLoaded', () => {

  const tableBody = document.querySelector("#table-body")

  const getDogs = () => {
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(renderDogs)
  }

  const renderDogs = dogs => {

    dogs.forEach(dog => {
      const row = document.createElement('tr')
      row.innerHTML = `
      <td>${dog.name}</td>
      <td>${dog.breed}</td>
      <td>${dog.sex}</td>
      <td>
        <button class="edit">Edit</button>
      </td>
      `

      tableBody.append(row)
    })
  }

  tableBody.addEventListener('click', event => {
    if(event.target.className === 'edit'){
      const row = event.target.parentNode.parentNode
      const cells = row.getElementsByTagName("td")

      const breed = cells[1].textContent
      const name = cells[0].textContent
      const sex = cells[2].textContent

      const form = document.querySelector('#dog-form')

      form.name.value = name
      form.breed.value = breed
      form.sex.value = sex
    }
  })

  document.addEventListener('submit', event => {
    event.preventDefault()
    //form.innerHTML = ""

    const form = event.target
    const id = form.dataset.id

    fetch(`${url}/${id}`) , {
      method: "PATCH",
      headers: {
        "accept": "application/json",
        'content-type': "application/json"
      },
      body: JSON.stringify({ name, breed, sex })
    }
    .then(res => res.json())
    .then(getDogs)

  })

  getDogs()


})


