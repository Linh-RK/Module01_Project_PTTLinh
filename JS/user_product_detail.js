const subtractBtn = document.querySelector(".subtract-btn");
const addBtn = document.querySelector(".add-btn");
const inputQty = document.querySelector("#input-qty");
const product = document.querySelector(".product");
const recommend = document.querySelector(".recommend-products-list");

// ----------------
const addCart = document.querySelector(".add-cart-btn");
const buyNow = document.querySelector(".buy-now");
// ---------------

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
                    <button class="add-cart-btn" onclick="addToCart()">
                      <b>THÊM VÀO GIỎ HÀNG</b>
                    </button>
                    <button class="buy-now" onclick="buyNow()">
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
}
render();
// ---------------
function renderOther4(id) {
  let dbProductList = JSON.parse(localStorage.getItem("dbProductList"));
  let detailProduct = JSON.parse(localStorage.getItem("detailProduct"));
  let index = dbProductList.findIndex(
    (e) => e.categories == detailProduct.categories
  );
  dbProductList = dbProductList.filter(
    (e) => e.categories == dbProductList[index].categories
  );
  for (let i = 0; i < 4; i++) {
    recommend.innerHTML += `
    <div class="product">
                <div class="pic">
                  <img src="${dbProductList[i].img}" alt="" />
                </div>
                <div class="name">
                  <h4>${dbProductList[i].name}</h4>
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
// ----------------------------
// function add() {
//   inputQty.value = +inputQty.value + 1;
// }
// //----------------
// function subtract() {
//   if (inputQty.value > 1) {
//     inputQty.value -= 1;
//   } else {
//     return;
//   }
// }
//----------------
// function addToCart() {
//     inputQty.value
// }
// //----------------
// function buyNow() {}
