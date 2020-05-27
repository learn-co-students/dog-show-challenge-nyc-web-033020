document.addEventListener('DOMContentLoaded', () => {
    const dogForm = document.querySelector("#dog-form")
    fetch(`http://localhost:3000/dogs`)
        .then(response => response.json())
        .then(renderDogs)

    function renderDogs(dogsData) {
        dogsData.forEach(dog => {
            row = document.createElement("tr")
            tableBody = document.querySelector("#table-body")
            row.innerHTML =
                `<tr>
                <td>${dog.name}</td> 
                <td>${dog.breed}</td>
                <td>${dog.sex}</td> 
                <td>
                    <button id=${dog.id}>Edit </button>
                </td>
            </tr>`
            tableBody.append(row)
        })
        document.addEventListener("click", function (event) {
            dogsData.forEach(dog => {
                if (event.target.id === `${dog.id}`) {
                    dogForm.name.value = dog.name
                    dogForm.sex.value = dog.sex
                    dogForm.breed.value = dog.breed

                    dogForm.addEventListener("submit", function (event) {
                        event.preventDefault()

                        updateDog = {
                            name: dog.name,
                            sex: dog.sex,
                            breed: dog.breed
                        }

                        console.log(updateDog)
                        

                        // fetch(`http://localhost:3000/dogs/${dog.id}`)
                    })
                }

            })
        })
    }
})
