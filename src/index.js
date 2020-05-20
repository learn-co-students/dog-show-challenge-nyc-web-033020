document.addEventListener('DOMContentLoaded', () => {
    
    const table = document.querySelector('#table-body')
    const url = 'http://localhost:3000/dogs'
    const dogForm = document.querySelector('#dog-form')

    //fetch all dogs and append to table on DOM
    fetch(url)
        .then(resp => resp.json())
        .then(dogs => {
            dogs.forEach(dog => {
                table.innerHTML += `
                <tbody>
                    <tr>
                        <td>${dog.name}</td>
                        <td>${dog.breed}</td>
                        <td>${dog.sex}</td>
                        <td><button class='edit-btn'>Edit</button></td>
                    </tr>
                </tbody>
                `
            })
        })

    table.addEventListener('click', (e) => {
        if (e.target.className === 'edit-btn') {
            dogForm.addEventListener('submit', (e) => {
                e.preventDefault()
                
            })
        }
     })   

    
})