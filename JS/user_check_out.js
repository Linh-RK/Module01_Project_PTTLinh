let cartProductList = JSON.parse(localStorage.getItem("cartProductList"));
let userLogin = JSON.parse(localStorage.getItem("userLogin"));
let table = document.querySelector(".table");
let total = document.querySelector(".total");
let inputName = document.querySelector("#full-name");
let inputEmail = document.querySelector("#email-ck");
let phone = document.querySelector("#phone-ck");
let district = document.querySelector("#district");
let province = document.querySelector("#province");
let addressDetail = document.querySelector("#address-detail");
// ------------
let orderList = JSON.parse(localStorage.getItem("orderList"));
console.log(orderList);
inputEmail.value = userLogin.email;
phone.value = userLogin.phone;
// ------------------
function render() {
  let cartProductList = JSON.parse(localStorage.getItem("cartProductList"));
  let sum = 0;
  for (let i = 0; i < cartProductList.length; i++) {
    table.innerHTML += `
    <tr>
        <td>
        <img src="${cartProductList[i].img}" alt="" />
        </td>
        <td class="product">
        <div class="name">${cartProductList[i].name}</div>
        </td>
        <td>${cartProductList[i].qty}</td>
        <td>${cartProductList[i].qty * cartProductList[i].price + ".000đ"}</td>
    </tr>
    <tr>
        <td colspan="4"><hr /></td>
    </tr>
    `;
    sum += cartProductList[i].qty * cartProductList[i].price;
  }
  total.innerHTML = `
    <div>Tổng tiền</div>
     <div class = "total-bill">${sum + ".000đ"}</div>
`;
}
render();
// -----------------------
function backCart() {
  window.location.href = "./user_cart.html";
}
console.log(orderList);
// -----------------------
function confirmOrder() {
  let cartProductList = JSON.parse(localStorage.getItem("cartProductList"));
  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  let orderList = JSON.parse(localStorage.getItem("orderList"));
  let totalBill = document.querySelector(".total-bill");
  console.log(orderList);
  if (
    inputName.value == "" ||
    inputEmail.value == "" ||
    addressDetail.value == "" ||
    payment.value == ""
  ) {
    alert("Không được bỏ trống thông tin");
  } else {
    let newOrder = {
      idUser: userLogin.id,
      userName: userLogin.name,
      total: totalBill.innerHTML,
      idOrder: Math.floor(Math.random() * 1000000000),
      createDate: Date(),
      status: "New Order",
      cartProductList: cartProductList,
      name: inputName.value,
      mail: inputEmail.value,
      phone: phone.value,
      province: province.value,
      district: district.value,
      addressDetail: addressDetail.value,
      payment: payment.value,
    };

    orderList.push(newOrder);
    console.log(orderList);
    alert("Thanh toán thành công");
    window.location.href = "";
    cartProductList = [];
    localStorage.setItem("orderList", JSON.stringify(orderList));
    localStorage.setItem("cartProductList", JSON.stringify(cartProductList));
    window.location.href = "./user_home.html";
  }
}
// let oderList = {
//   idUser: ,
//   idOrder: ,
//   createDate: ,
//   status: ,
//   cartProductList: ,
//   total: ,
//   name: ,
//   mail: ,
//   phone: ,
//   address: ,
//   payment: ,
// };
