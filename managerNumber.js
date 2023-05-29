let quan = new HocVien("Ny Quan", 15, "https://openseauserdata.com/files/02d992a4c7039936aea0bce0ec7a5e1e.jpg");
let khanh = new HocVien("Ny Khánh", 18, "https://giadinh.mediacdn.vn/296230595582509056/2022/2/17/27212817110061775266623491256080737665900375n-16450863187391857196552.jpg");

let hocviens = [quan,khanh];
let indexEdit = -1;

function show() {
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
    show();
}

function deleteNumber(index) {
    hocviens.splice(index, 1);
    show();
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

show();
