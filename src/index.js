document.addEventListener('DOMContentLoaded', () => {
  const baseUrl = "http://localhost:3000/dogs/"
  const dogTable = document.getElementById("table-body")
  const dogForm = document.getElementById("dog-form")

  let editDogId = 0

  function fetchDogs() {
    fetch(baseUrl)
      .then(res => res.json())
      .then(json => displayDogs(json))
  }

  function patchDog(newDog) {
    fetch(baseUrl + newDog.id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "id": newDog.id,
        "name": newDog.name,
        "breed": newDog.breed,
        "sex": newDog.sex
      })
    })
      .then(fetchDogs())
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
    if (e.target.textContent == "Edit") {
      editDogId = e.target.parentNode.parentNode.dataset.id 
      const dogInfo = e.target.parentNode.parentNode.querySelectorAll("td")
      const formInputs = dogForm.querySelectorAll("input")

      for(let i = 0; i < 3; i++) {
        formInputs[i].value = dogInfo[i].innerText
      }
    }
  })

  dogForm.addEventListener("submit", e => {
    e.preventDefault()
  })
})
