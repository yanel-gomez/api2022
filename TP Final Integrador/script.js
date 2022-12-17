async function getData() {
    const response = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados");
    const data = await response.json();
    console.log(data);

    data.forEach(element => {

        document.getElementById('table').innerHTML += `  <tr>
             <td>${element.nombre} ${element.apellido}</td>
             <td>${element.area}</td>
             <td>${element.domicilio}</td>
             <td><button class="ver" id="${element.id}">Ver</button></td>
             </tr>`
    });

    let showBtn = document.querySelectorAll(".ver");
    showBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            showPersonalData(e.target.id);
        });
    })

}

async function showPersonalData(id) {
    const response = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/" + id);
    const data = await response.json();
    console.log(data);

    let employee = document.getElementById("employeeData");
    employee.innerHTML = "";
    let profilePhoto = document.getElementById("employeeImg");
    profilePhoto.innerHTML = "";

    let fullname = document.createElement("th");
    fullname.innerHTML = data.nombre + " " + data.apellido;

    let area = document.createElement("th");
    area.innerHTML = data.area;

    let adress = document.createElement("th");
    adress.innerHTML = data.domicilio;

    let photo = document.createElement("th");
    photo.innerHTML = `<img src="${data.foto}"></img>`


    employee.appendChild(fullname);
    employee.appendChild(area);
    employee.appendChild(adress);
    profilePhoto.appendChild(photo);

}

let myData = {
    "nombre": "Yanel",
    "apellido": "Gomez",
    "area": "Developer",
    "domicilio": "223 Onas, 5th floor, Ushuaia, TDF.",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCt0U77fRZCMjAl_vFIEDSl9r8kvyKJjte-A&usqp=CAU",
    "id": "31"
}
async function modifyData(myData) {
    const response1 = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/" + myData.id, {
        method: "PUT",
        body: JSON.stringify(myData),
        headers: { "content-type": "application/json" }
    });
    const data = await response1.json();
    console.log(data);
}

getData();
modifyData(myData);