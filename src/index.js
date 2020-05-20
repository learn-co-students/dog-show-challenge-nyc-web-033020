document.addEventListener('DOMContentLoaded', () => {
//fetch url and render a list of dogs 
//add dogs into table 
const url = 'http://localhost:3000/dogs'
const table = document.getElementById('table-body')
const paddingClass = document.getElementsByClassName('padding-center')

fetch(url)
.then(res => res.json())
.then(dogs => renderDogs(dogs))

const renderDogs = dog => {
    const dogInfo = dog.forEach(element  => {
    `<tr>
        <td>${element.name} </td>
        <td>${element.breed} </td>
        <td>${element.sex} </td>
        <td><button>Edit</button></td>
    </tr>`
    })
}




// function createTable() {
//     const tbl = document.createElement('table')
//     const tBody = document.createElement('tbody')
//     for (let i = 0; i < 2; i++) {
//         const tRow = document.createElement('tr');
    
//         for (let j = 0; j < 2; j++) {
//           let cell = document.createElement('td');
//           let cellText = document.createTextNode("cell in row "+i+", column "+j);
//           cell.appendChild(cellText);
//           row.appendChild(cell);
//         }
//         tblBody.appendChild(row);
//       }
//       tbl.appendChild(tBody);
//       table.appendChild(tbl);
//       tbl.setAttribute("border", "2");
// }

})

//