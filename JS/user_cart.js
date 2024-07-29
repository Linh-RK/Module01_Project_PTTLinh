const cartProductList = JSON.parse(localStorage.getItem("cartProductList"));
const tbody = document.querySelector(".tbody");
const tfoot = document.querySelector(".tfoot");
let qty = document.querySelector(".qty");
function renderCart() {
  const cartProductList =
    JSON.parse(localStorage.getItem("cartProductList")) || [];
  let sum = 0;
  for (let i = 0; i < cartProductList.length; i++) {
    tbody.innerHTML += `
<tr class="product">
    <td><button onclick="deleteProduct(${
      cartProductList[i].id
    })">Xoá</button></td>
    <td class="img"><img src="${cartProductList[i].img}" alt="" /></td>
    <td>
    <h5>${cartProductList[i].name}</h5>
    
    </td>
    <td>${cartProductList[i].price + ".000đ"}</td>
    <td>
    <button onclick="subtract(${cartProductList[i].id})">-</button>
    <button class="qty">${cartProductList[i].qty}</button>
    <button onclick="add(${cartProductList[i].id})">+</button>
    </td>
    <td>${cartProductList[i].qty * cartProductList[i].price + ".000đ"}</td>
</tr>
<tr>
    <td colspan="5"><hr /></td>
</tr>
`;
    sum += cartProductList[i].qty * cartProductList[i].price;
  }
  tfoot.innerHTML += `
  <td><b>Tổng tiền</b></td>
  <td colspan="4"><b></b></td>
  <td class="total"><b>${sum + ".000đ"}</b></td>
`;
}
renderCart();
// ------------------------
function deleteProduct(id) {
  let cartProductList = JSON.parse(localStorage.getItem("cartProductList"));
  //
  let indexDelete = cartProductList.findIndex((el) => el.id == id);

  console.log(indexDelete);
  cartProductList.splice(indexDelete, 1);
  console.log(cartProductList);
  localStorage.setItem("cartProductList", JSON.stringify(cartProductList));
  console.log(cartProductList);
  window.location.reload();
}
// ------------------------
function subtract(id) {
  let cartProductList = JSON.parse(localStorage.getItem("cartProductList"));
  let indexMinus = cartProductList.findIndex((el) => el.id == id);
  if (cartProductList[indexMinus].qty > 1) {
    cartProductList[indexMinus].qty -= 1;
    localStorage.setItem("cartProductList", JSON.stringify(cartProductList));
    // qty.innerHTML = cartProductList[indexMinus].qty;
    renderCart();
    window.location.reload();
  }
}
// ------------------------
function add(id) {
  let cartProductList = JSON.parse(localStorage.getItem("cartProductList"));
  let indexPlus = cartProductList.findIndex((el) => el.id == id);
  cartProductList[indexPlus].qty += 1;
  localStorage.setItem("cartProductList", JSON.stringify(cartProductList));
  // qty.innerHTML = cartProductList[indexMinus].qty;

  renderCart();
  window.location.reload();
}
// ------------------------
function checkOut() {
  // let cartProductList = JSON.parse(localStorage.getItem("cartProductList"));

  // let oderList = {
  //   idUser: ,
  //   idOrder: ,
  //   createDate: ,
  //   status: ,
  //   cartProductList: ,
  //   name: ,
  //   mail: ,
  //   phone: ,
  //   address: ,
  //   payment: ,
  // };
  // window.location.assign("http://127.0.0.1:5500/HTML/user_check_out.html");
  window.location.href = "http://127.0.0.1:5500/HTML/user_check_out.html";
}
