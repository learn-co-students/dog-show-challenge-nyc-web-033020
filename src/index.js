document.addEventListener('DOMContentLoaded', () => {
    //fetch all dogs and append to table on DOM
    const url = 'http://localhost:3000/dogs'

    fetch(url)
        .then(resp => resp.json())
        .then(dogs => {
            dogs.forEach(dog => {
                
            })
        })

    const table = document.querySelector('#table-body')
    table.innerHTML = `
    <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    `
})