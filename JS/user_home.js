let currentSlide = 0;
const listSlides = document.getElementsByClassName("mySlides");
const nameUser = document.querySelector(".name-user");
const userLogin = JSON.parse(localStorage.getItem("userLogin"));
// DISPLAY USER NAME ON TOP---------------
nameUser.innerHTML = `${userLogin.userName}`;
// SLIDE SHOW------------------------------
setInterval(function () {
  if (currentSlide == listSlides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  for (let i = 0; i < listSlides.length; i++) {
    if (currentSlide == i) {
      listSlides[i].style.display = "block";
    } else {
      listSlides[i].style.display = "none";
    }
  }
}, 2000);
// RENDER PRODUCT------------------------------
const categoriesList = JSON.parse(localStorage.getItem("categoriesList"));
const wrap = document.querySelector(".wrap");
const grid1 = document.querySelector(".grid1");
const grid2 = document.querySelector(".grid2");
const grid3 = document.querySelector(".grid3");
const product = document.querySelector(".product1");
let cate;
const typeList = JSON.parse(localStorage.getItem("typeList"));
// --------------------
function render1(type) {
  let dbProductList = JSON.parse(localStorage.getItem("dbProductList"));

  dbProductList = dbProductList.filter(
    (e) => e.type.toLowerCase() == type.toLowerCase()
  );
  for (let j = 0; j < 4; j++) {
    grid1.innerHTML += `
             <div class="product1" onclick = "detail(${
               dbProductList[j].id
             })">             
              <div class="product-img">
                  <a><img src="${dbProductList[j].img}" alt="" /></a>
              </div>
              <div class="product-title">
                  <a>
                      <h5>${dbProductList[j].name}</h5>
                  </a>
              </div>
              <div class="product-price">
                  <div class="price">${dbProductList[j].price + ".000đ"}</div>
                  <div class="cart">
                  <button
                  onclick="addToCart(${
                    dbProductList[j].id
                  })"><i class="fa-solid fa-cart-plus"></i></button>
                </div>
              </div>
                `;
  }
}
render1(typeList[0]);
function render2(type) {
  let dbProductList = JSON.parse(localStorage.getItem("dbProductList"));

  dbProductList = dbProductList.filter(
    (e) => e.type.toLowerCase() == type.toLowerCase()
  );
  for (let j = 0; j < 4; j++) {
    grid2.innerHTML += `
             <div class="product1" onclick = "detail(${
               dbProductList[j].id
             })">             
              <div class="product-img">
                  <a><img src="${dbProductList[j].img}" alt="" /></a>
              </div>
              <div class="product-title">
                  <a >
                      <h5>${dbProductList[j].name}</h5>
                  </a>
              </div>
              <div class="product-price">
                  <div class="price">${dbProductList[j].price + ".000đ"}</div>
                  <div class="cart">
                  <button
                  onclick="addToCart(${
                    dbProductList[j].id
                  })"><i class="fa-solid fa-cart-plus"></i></button>
                </div>
              </div>
                `;
  }
}
render2(typeList[1]);
// -----------------------
function render3(type) {
  let dbProductList = JSON.parse(localStorage.getItem("dbProductList"));

  dbProductList = dbProductList.filter(
    (e) => e.type.toLowerCase() == type.toLowerCase()
  );
  for (let j = 0; j < 4; j++) {
    grid3.innerHTML += `
             <div class="product1" onclick = "detail(${
               dbProductList[j].id
             })">             
              <div class="product-img">
                  <a ><img src="${dbProductList[j].img}" alt="" /></a>
              </div>
              <div class="product-title">
                  <a >
                      <h5>${dbProductList[j].name}</h5>
                  </a>
              </div>
              <div class="product-price">
                  <div class="price">${dbProductList[j].price + ".000đ"}</div>
                  <div class="cart">
                  <button class="add-to-cart-btn"><i class="fa-solid fa-cart-plus"
                  onclick="addToCart(${dbProductList[j].id})"></i></button>
                </div>
              </div>
                `;
  }
}
render3(typeList[2]);
// -----------------------
// function addToCart(id) {
//   let dbProductList = JSON.parse(localStorage.getItem("dbProductList"));
//   let cartProductList =
//     JSON.parse(localStorage.getItem("cartProductList")) || [];

//   let index = dbProductList.findIndex((e) => e.id == id);
//   let product = { ...dbProductList[index], qty: 1 };
//   let indexCart = cartProductList.findIndex((e) => e.id == id);
//   if (indexCart == -1) {
//     cartProductList.push(product);
//     console.log(cartProductList);
//     localStorage.setItem("cartProductList", JSON.stringify(cartProductList));
//   } else {
//     cartProductList[indexCart].qty += 1;
//     localStorage.setItem("cartProductList", JSON.stringify(cartProductList));
//     console.log(cartProductList);
//   }
// }
// ------------------------------------
function detail(id) {
  let dbProductList = JSON.parse(localStorage.getItem("dbProductList"));
  let index = dbProductList.findIndex((e) => e.id == id);
  let detailProduct = { ...dbProductList[index] };
  // console.log(detailProduct);
  localStorage.setItem("detailProduct", JSON.stringify(detailProduct));
  // window.location.href = "http://127.0.0.1:5500/HTML/user_product_detail.html";
  location.replace("http://127.0.0.1:5500/HTML/user_product_detail.html");
}
// ------------------------------------
function addToCart(id) {
  let dbProductList = JSON.parse(localStorage.getItem("dbProductList"));
  let cartProductList =
    JSON.parse(localStorage.getItem("cartProductList")) || [];

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
}
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
