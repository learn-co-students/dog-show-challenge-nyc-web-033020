// dom content loaded
// render html table of existing dogs
// add event listener button edit
// prevent default form
// patch request


const BASE_URL = 'http://localhost:3000'
const DOGS_URL = `${BASE_URL}/dogs`
const main = document.querySelector('main')
let trainers = fetch(TRAINERS_URL)
.then(res => res.json())

document.addEeventListener('DOMContentLoaded'), (event) => {
  loadDogsTable()
})


​
let loadDogsTable = () => {
    main.innerHTML = ""
    fetch(DOGS_URL)
    .then(res => res.json() )
    .then(loadDogs)
}

let loadDogs = (dogs) => {
    dogs.forEach( dog => newDog(dog) )
}

