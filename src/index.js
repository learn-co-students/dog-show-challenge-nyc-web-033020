document.addEventListener('DOMContentLoaded', () => {
const url = 'http://localhost:3000/dogs'


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
       lineForButton.innerHTML = `<button dataset="${dog.id}">Edit</button>`
    
   })
}

fetch(url).then(res => res.json()).then(dogs => loadDogTable(dogs))


document.addEventListener('click', function(e){
    if (e.target.innerHTML = 'Edit'){
        console.log(e.target)
    }
})




})