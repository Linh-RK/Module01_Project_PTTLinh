const subtractBtn = document.querySelector(".subtract-btn");
const addBtn = document.querySelector(".add-btn");

const product = document.querySelector(".product");
const recommend = document.querySelector(".recommend-products-list");

// ----------------
const addCart = document.querySelector(".add-cart-btn");
const buyNow = document.querySelector(".buy-now");

// RENDER---------------

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
                      <button class="subtract-btn">
                        -
                      </button>
                      <input
                        type="text"
                        name="add-qty"
                        id="input-qty"
                        value="1"
                      />
                      <button class="add-btn">+</button>
                    </div>
                  </div>
                  <div class="btn">
                    <button class="add-cart-btn">
                      <b>THÊM VÀO GIỎ HÀNG</b>
                    </button>
                    <button class="buy-now" onclick="buyNow(${
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
  //   const inputQty = document.querySelector("#input-qty");
  //   console.log(inputQty.value);
  //   const add = document.querySelector("add-btn");
  //   const subtract = document.querySelector("subtract-btn");
  //   add.addEventListener("click", function () {
  //     inputQty.value += 1;
  //     render();
  //   });
  //   subtract.addEventListener("click", function () {
  //     if (inputQty.value < 2) {
  //       return;
  //     }
  //     inputQty.value -= 1;
  //     render();
  //   });
}

//----------------

render();
// ---------------

// ----------------------------

//----------------
// function addToCart() {
//     inputQty.value
// }
// //----------------
// function buyNow() {}
