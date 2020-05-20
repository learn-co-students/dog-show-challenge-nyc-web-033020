document.addEventListener('DOMContentLoaded', () => {
const url = 'http://localhost:3000/dogs'
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
    if (e.target.innerHTML = 'Edit'){
        const editDogID = e.target.id
           fetch(`${url}/${editDogID}`).then(res => res.json()).then(dog => {
               fromName.placeholder = dog.name
               formBreed.placeholder = dog.breed
               formSex.placeholder = dog.sex
               submitButton.addEventListener('click', function(e){
                  e.target.preventDefault()
                  console.dir(fromName)
               })
               
           })

    }
})




})