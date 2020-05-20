document.addEventListener('DOMContentLoaded', () => {
    const dogsUrl = "http://localhost:3000/dogs"
    const tableBody = document.getElementById("table-body") 
    const dogForm = document.getElementById('dog-form') 

    function getDogs() {
        fetch(dogsUrl) 
            .then(res => res.json()) 
            .then(dogs => dogs.forEach(getDog)) 
    } 

    function getDog(dog) {
        console.log(dog) 
        tableBody.innerHTML += `<tr data_id=${dog.id}>
            <td>${dog.name}</td>
            <td>${dog.breed}</td>
            <td>${dog.sex}</td>
            <td><button id="edit-btn" data-id=${dog.id}>Edit</button></td>
            </tr>`
    } 
    
    function editDog(id) {
        fetch(`${dogsUrl}/${id}`) 
            .then(res => res.json()) 
            .then(dog => {
                dogForm.name.value = dog.name,
                dogForm.breed.value = dog.breed,
                dogForm.sex.value = dog.sex,
                dogForm.dataset.id = dog.id  
            })
    }

    function editedDog(e) {
        let dog = {
            name: e.target.parentElement.name.value, 
            breed: e.target.parentElement.breed.value,
            sex: e.target.parentElement.sex.value
        } 

        fetch(dogsUrl + id, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json", 
                Accept: "application/json"
            }
        })
    }
})