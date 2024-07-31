let product = document.querySelector(".product");
let subtractBtn, addBtn, inputQty, recommend, addCart, buyNow;
// RENDER------------------------------
function render() {
  let detailProduct = JSON.parse(localStorage.getItem("detailProduct"));
  product.innerHTML += `
  <h1 class="title">${detailProduct.name}</h1>
          <div class="content">
            <div class="pic_add">
              <div class="pic">
                <div class="big-pic">
                  <img src="${detailProduct.img}" alt="" />
                </div>
              </div>
              <div class="add-cart">
                <div class="top">
                  <h3 class="product-name">${detailProduct.name}</h3>
                </div>
                <hr />
                <div class="bottom">
                  <div class="product-price">Giá <b>${
                    detailProduct.price + ".000đ"
                  }</b></div>
                  <div class="product-qty">
                    <span>Số lượng</span>
                    <div class="btn">
                      <button class="subtract-btn" onclick="subtract(${
                        detailProduct.id
                      })">
                        -
                      </button>
                      <input
                        type="text"
                        name="add-qty"
                        id="input-qty"
                        value="1"
                      />
                      <button class="add-btn" onclick="add(${
                        detailProduct.id
                      })">+</button>
                    </div>
                  </div>
                  <div class="btn">
                    <button class="add-cart-btn" onclick="addToCartDetail(${
                      detailProduct.id
                    })">
                      <b>THÊM VÀO GIỎ HÀNG</b>
                    </button>
                    <button class="buy-now" onclick="buyNowF(${
                      detailProduct.id
                    })">
                      <b>MUA NGAY</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
           
            <div class="description-comment">
              <div class="tag description">
                <p>MÔ TẢ CHUNG</p>
                <div class="detail">
                  <p>
                  ${detailProduct.description}
                  </p>
                </div>
              </div>
            </div>
  `;

  subtractBtn = document.querySelector(".subtract-btn");
  addBtn = document.querySelector(".add-btn");
  inputQty = document.querySelector("#input-qty");
  recommend = document.querySelector(".recommend-products-list");

  // ----------------
  addCart = document.querySelector(".add-cart-btn");
  buyNow = document.querySelector(".buy-now");
  // ---------------
}
render();
// RENDER RECOMMEND PRODUCT---------------
function renderOther4() {
  let dbProductList = JSON.parse(localStorage.getItem("dbProductList"));
  let detailProduct = JSON.parse(localStorage.getItem("detailProduct"));
  let index = dbProductList.findIndex(
    (e) => e.categories == detailProduct.categories
  );
  console.log(dbProductList);
  dbProductList = dbProductList.filter(
    (e) => e.type == dbProductList[index].type
  );
  console.log(dbProductList);
  for (let i = 0; i < 4; i++) {
    recommend.innerHTML += `
    <div class="product" onclick = "detail(${dbProductList[i].id})">
                <div class="pic">
                  <img src="${dbProductList[i].img}" alt="" />
                </div>
                <div class="name">
                  <h2>${dbProductList[i].name}</h2>
                </div>
                <div class="price">
                  <span>${dbProductList[i].price + ".000đ"}</span>
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
    `;
  }
}
renderOther4();
// ADD BTN----------------------------
function add() {
  console.log(inputQty);
  inputQty.value = +inputQty.value + 1;
}
// SUBTRACT BTN----------------
function subtract() {
  console.log(inputQty);
  if (+inputQty.value > 1) {
    inputQty.value = +inputQty.value - 1;
  } else {
    return;
  }
}
//ADD TO CART DETAIL----------------
function addToCartDetail(id) {
  console.log(Number(inputQty.value));
  let dbProductList = JSON.parse(localStorage.getItem("dbProductList"));
  let cartProductList = JSON.parse(localStorage.getItem("cartProductList"));
  let index = cartProductList.findIndex((e) => e.id == id);
  let indexProduct = dbProductList.findIndex((e) => e.id == id);
  if (index == -1) {
    cartProductList.push({
      ...dbProductList[indexProduct],
      qty: Number(inputQty.value),
    });
  } else {
    cartProductList[index].qty += Number(inputQty.value);
  }
  localStorage.setItem("cartProductList", JSON.stringify(cartProductList));
  console.log(cartProductList);
}
// //----------------
// function buyNowF(id) {
//   console.log(Number(inputQty.value));
//   let dbProductList = JSON.parse(localStorage.getItem("dbProductList"));

//   let indexProduct = dbProductList.findIndex((e) => e.id == id);
//   let buyNowProduct = {...dbProductList[indexProduct], qty: Number(inputQty.value)}
//   localStorage.setItem("buyNow", JSON.stringify(buyNowProduct))
//   location.replace("http://127.0.0.1:5500/HTML/user_check_out.html");
// }
// --------------------

function detail(id) {
  let dbProductList = JSON.parse(localStorage.getItem("dbProductList"));
  let index = dbProductList.findIndex((e) => e.id == id);
  let detailProduct = { ...dbProductList[index] };
  // console.log(detailProduct);
  localStorage.setItem("detailProduct", JSON.stringify(detailProduct));
  // window.location.href = "http://127.0.0.1:5500/HTML/user_product_detail.html";
  location.replace("http://127.0.0.1:5500/HTML/user_product_detail.html");
}
// -------------------
