document.addEventListener('DOMContentLoaded', () => {
const url = 'http://localhost:3000/dogs'
const form = document.querySelector('form')
const fromName = document.querySelectorAll('input')[0]
const formBreed = document.querySelectorAll('input')[1]
const formSex = document.querySelectorAll('input')[2]
const submitButton = document.querySelectorAll('input')[3]

function loadDogTable(array){
    const table = document.querySelector('table')
   array.forEach(dog => {
       const name = dog.name 
       const breed = dog.breed 
       const sex = dog.sex 
       const row = table.insertRow()

       const lineForName = row.insertCell()
       lineForName.innerHTML = name 

       const lineForBreed = row.insertCell()
       lineForBreed.innerHTML = breed 
       

       const lineForSex = row.insertCell()
       lineForSex.innerHTML = sex 
       

       const lineForButton = row.insertCell()
       lineForButton.innerHTML = `<button id="${dog.id}">Edit</button>`
    
   })
}

fetch(url).then(res => res.json()).then(dogs => loadDogTable(dogs))


document.addEventListener('click', function(e){
    e.preventDefault()
    if (e.target.innerHTML = 'Edit'){
        const editDogID = e.target.id
           fetch(`${url}/${editDogID}`).then(res => res.json()).then(dog => {
               fromName.value = dog.name
               formBreed.value = dog.breed
               formSex.value = dog.sex

               submitButton.addEventListener('click', function(r){

                const newName = fromName.value
                const newBreed = formBreed.value
                const newSex = formSex.value

                  r.preventDefault()
                  e.target.parentElement.parentElement.innerHTML = `<td>${newName}</td><td>${newBreed}</td><td>${newSex}</td><button id="${dog.id}">Edit</button>`
                              fetch(`${url}/${editDogID}`, {
                                  method: 'PATCH',
                                  headers: {
                                      "content-type": "application/json",
                                      accept: "application/json"
                                  },
                                  body: JSON.stringify({
                                      name: newName,
                                      breed: newBreed,
                                      sex: newSex
                                  })
                              })
               })
               
           })

    } else if (e.target.localName == 'input'){
        console.log(e.target)
        e.preventDefault()
        fromName.value = dog.name
        formBreed.value = dog.breed
        formSex.value = dog.sex
       
    } else {e.preventDefault()}
})


form.addEventListener('click', function(e){
    e.preventDefault()
})


})