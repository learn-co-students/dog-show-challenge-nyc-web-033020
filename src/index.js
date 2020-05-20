document.addEventListener('DOMContentLoaded', () => {
//fetch url and render a list of dogs 
//add dogs into table 
const url = 'http://localhost:3000/dogs'

fetch(url)
.then(res => res.json())
.then(dogs => renderDogs(dogs))

const renderDogs = dog => {
    console.log(dog)

    const dogInfo = dog.forEach(element  => {
        `<tr>
        <td>Dog Name: ${element.name} </td>
        <td>Dog Breed: ${element.breed} </td>
        <td>Dog Sex: ${element.sex} </td>
        <td><button>Edit</button></td></tr>`
    })
}



})