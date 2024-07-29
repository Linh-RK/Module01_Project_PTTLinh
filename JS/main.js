const addToCartBtn = document.querySelector("add-to-cart-btn");
const totalCart = document.querySelector(".total-cart");
const userName = document.querySelector(".name-user");

// ------------
totalCart.innerHTML = totalCartProduct();
function addToCart(id) {
  let dbProductList =
    JSON.parse(window.localStorage.getItem("dbProductList")) || [];
  let cartProductList =
    JSON.parse(window.localStorage.getItem("cartProductList")) || [];
  let index = dbProductList.findIndex((e) => e.id == id);
  let product = { ...dbProductList[index], qty: 1 };
  let indexCart = cartProductList.findIndex((e) => e.id == id);
  if (indexCart == -1) {
    cartProductList.push(product);
    localStorage.setItem("cartProductList", JSON.stringify(cartProductList));
  } else {
    cartProductList[indexCart].qty += 1;
    localStorage.setItem("cartProductList", JSON.stringify(cartProductList));
  }
  totalCart.innerHTML = totalCartProduct();
}
// ------------------------
function totalCartProduct() {
  let cartProductList =
    JSON.parse(window.localStorage.getItem("cartProductList")) || [];

  let sum = cartProductList.reduce((pre, current) => pre + current.qty, 0);
  return sum;
}
// ------------------------
function userNameDisplay() {
  let userLogin = JSON.parse(window.localStorage.getItem("userLogin")) || [];
  if (userLogin == "") {
    userName.innerHTML = `
    <div class="login" onclick="login()"></div>
    `;
  } else {
    userName.innerHTML = userLogin.userName;
  }
}
userNameDisplay();
// ---------------------------
function login() {}
