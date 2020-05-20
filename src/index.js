document.addEventListener('DOMContentLoaded', () => {
  const baseUrl = "http://localhost:3000/dogs/"
  const dogTable = document.getElementById("table-body")
  const dogForm = document.getElementById("dog-form")

  function fetchDogs() {
    fetch(baseUrl)
      .then(res => res.json())
      .then(json => displayDogs(json))
  }

  function displayDogs(dogs) {
    dogTable.innerHTML = ''
    
    dogs.forEach(dog => {
      let dogRow = document.createElement('tr')
      dogRow.dataset.id = dog.id
      dogRow.innerHTML = `
        <td>${dog.name}</td>
        <td>${dog.breed}</td>
        <td>${dog.sex}</td>
        <td><button>Edit</button></td>
      `

      dogTable.appendChild(dogRow)
    })
  }

  fetchDogs()

  dogTable.addEventListener("click", e => {
    let dogId = e.target.parentNode.parentNode.dataset.id
    
    if (dogId) {
      const formInputs = dogForm.querySelectorAll("input")

      console.dir(e.target)
      console.dir(e.target.parentNode)
    }
  })
})
