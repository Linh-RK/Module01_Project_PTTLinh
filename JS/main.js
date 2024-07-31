const addToCartBtn = document.querySelector("add-to-cart-btn");
const totalCart = document.querySelector(".total-cart");
const userName = document.querySelector(".name-user");

// ADD PRODUCT INTO CART------------
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
// DISPLAY PRODUCT QUALITY IN CART------------------------
function totalCartProduct() {
  let cartProductList =
    JSON.parse(window.localStorage.getItem("cartProductList")) || [];

  let sum = cartProductList.reduce((pre, current) => pre + current.qty, 0);
  return sum;
}
//  DISPLAY USERNAME IS LOGGING------------------------
function userNameDisplay() {
  let userLogin = JSON.parse(window.localStorage.getItem("userLogin")) || [];
  if (userLogin == "") {
    login();
  } else {
    userName.innerHTML = userLogin.userName;
  }
}
userNameDisplay();
// LOG IN - LOG OUT---------------------------
function login() {
  window.location.href = "http://127.0.0.1:5500/HTML/login.html";
}
// ---------------------------
function logout() {
  localStorage.setItem("userLogin", null);
  window.location.href = "http://127.0.0.1:5500/HTML/login.html";
}
// CHANGE LOCATION-----------------------------
let tempType = [];
function type1() {
  localStorage.setItem("tempType", []);
  tempType = ["Bánh sinh nhật"];
  localStorage.setItem("tempType", JSON.stringify(tempType));
}
function type2() {
  localStorage.setItem("tempType", []);
  tempType = ["Bánh mì & bánh mặn"];
  localStorage.setItem("tempType", JSON.stringify(tempType));
}
function type3() {
  localStorage.setItem("tempType", []);
  tempType = ["Cookie & mini cake"];
  localStorage.setItem("tempType", JSON.stringify(tempType));
}
// -----------------------------
