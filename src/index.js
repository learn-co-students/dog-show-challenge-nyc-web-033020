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
    
    //click on dog's edit button should populate form with dog's data
    table.addEventListener('click', (e) => {
        if (e.target.className === 'edit-btn') {
            i = event.target.rows
            console.log(i)
            // table.rows[i]
            // debugger
            // e.target = table.rows 
            // console.log(e.target)
            // table.rows[e.target].cells[0].innerHTML = dogForm.name.value

            // dogForm.addEventListener('submit', (e) => {
            //     e.preventDefault()
                
            // })
        }
     })   
    
     //grab dog's row after 'edit' click
    // const grabTableRow = (e) => {
    //     const i = e.target.row
            
        // table.rows[i].cells[0].innerHTML = dogForm.name.value 
    //     table.rows[i].cells[1].innerHTML = dogForm.breed.value
    //     table.rows[i].cells[2].innerHTML = dogForm.sex.value 
        
    //     grabTableRow(e)
    // }
})