document.addEventListener('DOMContentLoaded', () => {
const url = 'http://localhost:3000/dogs'
const table = document.querySelector('tr')
const nameLine = document.querySelectorAll('th')[0]
const breedLine = document.querySelectorAll('th')[1]
const sexLine = document.querySelectorAll('th')[2]
const editLine = document.querySelectorAll('th')[3]
console.log(nameLine, breedLine, sexLine, editLine)

function loadDogTable(array){
   array.forEach(dog => {
       const name = dog.name 
       const breed = dog.breed 
       const sex = dog.sex 
       const lineForName = document.createElement('td')
       table.append(lineForName)
       const lineForBreed = document.createElement('td')
       table.append(lineForBreed)
       const lineForSex = document.createElement('td')
       table.append(lineForSex)
       const lineForButton = document.createElement('td')
       table.append(lineForButton)
       lineForName.innerHTML = name 
       breedLine.innerHTML = breed
       lineForSex.innerHTML = sex 
       lineForButton.innerHTML = '<button dataset=`${dog.id}`>Edit</button>'
   })
}

fetch(url).then(res => res.json()).then(dogs => loadDogTable(dogs))





})