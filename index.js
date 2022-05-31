class Clother {
    constructor(id, name, photo, price, quantity) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.price = price;
        this.quantity = quantity;

    }
}

let clothers = [
    new Clother(1, "Áo sơ mi tay lỡ", "icon1.jpg", 50000, 2),
    new Clother(2, "Áo phông nam rộng tay dài", "icon22.jpg", 60000, 1),
    new Clother(3, "Quần short của nam", "icon3.jpg", 100000, 3),
    new Clother(4, "Áo khoác Hoodie nam 4YOUNG phong cách Hàn Quốc", "icon4.jpg", 300000, 3),
    new Clother(5, "Áo sơ mi form rộng kiểu dáng Hàn Quốc", "icon5.jpg", 200000, 3),
    new Clother(6, "Quần âu nam", "icon6.jpg", 300000, 1),
    new Clother(7, "Quần Jean Baggy ống rộng", "icon7.jpg", 400000, 2),
    new Clother(8, "Áo Khoác Dù thể thao Nam", "icon8.jpg", 500000, 3),
    new Clother(9, "Mũ lưỡi trai nam ", "icon9.jpg", 100000, 3),
]


function showClothers(data) {

    let tbClothers = document.querySelector('.table2>tbody');
    let htmls = data.map((clother, index) => {
        return `
            <tr id="tr_${clother.id}"> 
                <td>${clother.id}</td>
                <td>${clother.name}</td>
                <td class="table_img"><img src="${clother.photo}"></td>
                <td class="money">${clother.price} VND</td>
                <td class="money">${clother.quantity}</td>
                <td class="money">${clother.quantity * clother.price}</td>
                <td>
                    <button onclick="Edit(${clother.id})">Edit</button>
                    <button onclick="remove(${clother.id})">Remove</button>
                </td>
            </tr>
            `;
    });
    tbClothers.innerHTML = htmls.join("");
}

function search(event) {
    var keyword = event.target.value;
    var result = clothers.filter(function (clother) {
        return clother.name.toLowerCase().indexOf(keyword.toLowerCase()) != -1;
    });
    showClothers(result);
}

showClothers(clothers);

function findLastestId() {
    let tmp = [...clothers];
    tmp.sort(function (clothes1, Clothes2) {
        return Clothes2.id - clothes1.id;
    });
    return tmp[0].id;
}

function sortclothersById(direction = 'desc') {
    clothers.sort(function (clothers1, clothers2) {
        return direction == 'desc' ? clothers2.id - clothers1.id : clothers1.id - clothers2.id;
    });
}

function save() {
    let confirmed = window.confirm("bạn có muốn lưu sản phẩm này không?");
    let idproduct = document.querySelector("#btn_id").value;
    let name = document.querySelector("#btn_name").value;
    let pric = document.querySelector("#btn_price").value;
    let photo = document.querySelector("#btn_photo").value;
    if (pric % 1000 == 0) {
        let quanti = document.querySelector("#btn_quantity").value;
        let produ = clothers[idproduct - 1];
        produ.name = name;
        produ.price = pric;
        produ.quantity = quanti;
        produ.photo = photo;
    } else {
        alert("ban phải nhập đúng giá.(VD: 100.000)");
    }

    showClothers(clothers);
}

function add() {
    let id = sortGetId() + 1;
    let name = document.querySelector("#btn_name").value;
    let price = document.querySelector("#btn_price").value;
    let quantity = document.querySelector("#btn_quantity").value;
    let photo = document.querySelector("#btn_photo").value;
    let newproduct = new Clother(id,name,photo,price,quantity);
    if (name == "" || price == "" || quantity == "" || photo == "") {
        alert("Xin hãy nhập đầy đủ thông tin sản phẩm cần thêm!");
    }
    else {
    clothers.push(newproduct);
    }
    showClothers(clothers);
}

function getlastesid() {
    let maxid = Clothers.sort(function(pdt1, pdt2){
        return pdt2.productid - pdt1.productid
    })[0].productid
    return maxid
}



function ready() {
    showClothers(clothers);
}
ready();


function clearForm() {
    document.querySelector("#clothesName").value = "";
    document.querySelector("#photo").value = "";
    document.querySelector("#quantity").value = "";
    document.querySelector("#price").value = "";

}



function isValid() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] == null || arguments[i] == "")
            return false;
    }
    return true;
}

function findIndexById(id) {
    let index;
    for (let i = 0; i < clothers.length; i++) {
        if (clothers[i].id == id)
            index = i;
    }
    return index;
}

function remove(id) {
    let index = findIndexById(id);
    let confirmed = window.confirm(`Bạn có muốn xoá sản phẩm ${clothers[index].name} không?`);
    if (confirmed) {
        clothers.splice(index, 1);
    }
    showClothers(clothers);
} 
function reset() {
    document.querySelector("#btn_id").value = "";
    document.querySelector("#btn_name").value = "";
    document.querySelector("#btn_price").value = "";
    document.querySelector("#btn_quantity").value = "";
    document.querySelector("#btn_photo").value = "";
}
 
function Edit(id) {
    let tr = document.querySelector(`#tr_${id}`);
    let prod = clothers[id - 1];
    document.querySelector("#btn_id").value = prod.id;
    document.querySelector("#btn_name").value = prod.name;
    document.querySelector("#btn_price").value = prod.price;
    document.querySelector("#btn_quantity").value = prod.quantity;
    document.querySelector("#btn_name").focus();
}

function sortGetId() {
    let arr = [...clothers]
    let getId = arr.sort(function (cltId1, cltId2) {
        return cltId2.id - cltId1.id
    })[0].id
    return getId;
}