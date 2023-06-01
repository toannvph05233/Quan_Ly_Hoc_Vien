let hocviens = JSON.parse(localStorage.getItem("hocviens"));
let indexEdit = -1;

function showManager() {
    hocviens = JSON.parse(localStorage.getItem("hocviens"));
    console.log(hocviens);
    let str = '';
    for (let i = 0; i < hocviens.length; i++) {
        str += `<tr>
                    <td>${hocviens[i].name}</td>
                    <td>${hocviens[i].age}</td>
                    <td><img src="${hocviens[i].img}" width="150" height="200"></td>
                    <td><button onclick="showEdit(${i})">Edit</button></td>
                    <td><button onclick="deleteNumber(${i})">Delete</button></td>
                 </tr>`
    }

    let element = document.getElementById("display");
    element.innerHTML = str;

}

function showHome() {
    hocviens = JSON.parse(localStorage.getItem("hocviens"));
    let str = '';
    for (let i = 0; i < hocviens.length; i++) {
        str += `<tr>
                    <td>${hocviens[i].name}</td>
                    <td>${hocviens[i].age}</td>
                    <td><img src="${hocviens[i].img}" width="150" height="200"></td>
                 </tr>`
    }

    let element = document.getElementById("display");
    element.innerHTML = str;

}

function add() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let img = document.getElementById("img").value;
    let newObj = new HocVien(name,age,img);
    if (indexEdit === -1) {
        if(!checkName()){
            alert("Trung nguoi yeu roi");
            return;
        }
        hocviens.push(newObj);
    } else {
        hocviens[indexEdit] = newObj;
        indexEdit = -1;
    }
    localStorage.setItem("hocviens", JSON.stringify(hocviens));
    showManager();
}

function deleteNumber(index) {
    hocviens.splice(index, 1);
    localStorage.setItem("hocviens", JSON.stringify(hocviens));
    showManager();
}

function showEdit(index) {
    indexEdit = index;
    document.getElementById("name").value = hocviens[index].name;
    document.getElementById("age").value = hocviens[index].age;
    document.getElementById("img").value = hocviens[index].img;

}

function checkName() {
    let name = document.getElementById("name").value;
    for (let i = 0; i < hocviens.length; i++) {
        if(hocviens[i].name === name){
            return false;
        }
    }
    return true;

}

