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
     <div>${sum + ".000đ"}</div>
`;
}
render();
// -----------------------
function backCart() {
  window.location.href = "http://127.0.0.1:5500/HTML/user_cart.html";
}
// -----------------------
function confirmOrder() {
  console.log(inputName.value);
  console.log(inputEmail.value);
  console.log(addressDetail.value);
  console.log(payment.value);
  let cartProductList = JSON.parse(localStorage.getItem("cartProductList"));
  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  let orderList = JSON.parse(localStorage.getItem("oderList")) || [];
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
      idOrder: Math.floor(Math.random() * 1000000000),
      createDate: Date(),
      status: 1,
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
    alert("Thanh toán thành công");
    window.location.href = "./user_home.html";
    cartProductList = [];
    localStorage.setItem("orderList", JSON.stringify(orderList));
    localStorage.setItem("cartProductList", JSON.stringify(cartProductList));
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
