// -----------------------------
const grid = document.querySelector(".grid");
// const inputSearch = document.querySelector("#search-input");
const pageControl = document.querySelector(".page");
const inputSearch = document.querySelector("#search");
const filterCate = document.querySelector("#filter-cate");
const filterPrice = document.querySelector("#filter-price");
// const inputSearch = document.querySelector("");
// const inputSearch = document.querySelector("");
// const inputSearch = document.querySelector("");
// const inputSearch = document.querySelector("");
// const inputSearch = document.querySelector("");
// -----------------------------
let totalPage = 1;
let pageSize = 12;
let currentPageUser = 1;
// -----------------------------
function renderCate() {
  let categoriesList =
    JSON.parse(window.localStorage.getItem("categoriesList")) || [];
  for (let i = 0; i < categoriesList.length; i++) {
    filterCate.innerHTML = `
            <option value="">All</option>
    `;
    filterCate.innerHTML += `
      <option value="${categoriesList[i]}">${categoriesList[i]}</option>
      `;
  }
}
renderCate();
// -----------------------------

// -----------------------------
function render() {
  let dbProductList =
    JSON.parse(window.localStorage.getItem("dbProductList")) || [];
  // -----------------
  dbProductList = dbProductList.filter((e) =>
    e.name.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  // -----------------
  console.log(filterCate.value);
  if (filterCate.value) {
    dbProductList = dbProductList.filter(
      (e) => e.categories == filterCate.value
    );
  }
  // -----------------
  if (filterPrice.value == "az") {
    dbProductList.sort((a, b) => a.price - b.price);
  } else {
    console.log(filterPrice.value);
    dbProductList.sort((a, b) => b.price - a.price);
  }

  // -----------------
  // -----------------
  //   if (sortCate.value) {
  //     dbProductList = dbProductList.filter((e) => e.categories == sortCate.value);
  //   }
  // -----------------
  totalPage = Math.ceil(dbProductList.length / pageSize);
  // -----------------
  let stringHTMLpage = "";
  for (let i = 1; i <= totalPage; i++) {
    stringHTMLpage += `
      <button
        class="button"
        onclick="renderProductPageUser(${i})"
      >
      ${i}
      </button>
      `;
  }
  pageControl.innerHTML = stringHTMLpage;
  currentPageUser = JSON.parse(localStorage.getItem("currentPageProductUser"));

  let skip = (currentPageUser - 1) * pageSize;
  if (pageSize > dbProductList.length) {
    dbProductList = dbProductList;
  } else {
    dbProductList = dbProductList.slice(skip, skip + pageSize);
  }
  console.log(dbProductList);
  let stringHTML = "";
  for (let i = 0; i < dbProductList.length; i++) {
    stringHTML += `
        <div class="product1">             
              <div class="product-img">
                  <a href=""><img src="${dbProductList[i].img}" alt="" /></a>
              </div>
              <div class="product-title">
                  <a href="">
                      <h5>${dbProductList[i].name}</h5>
                  </a>
              </div>
              <div class="product-price">
                  <div class="price">${dbProductList[i].price + ".000đ"}</div>
                  <div class="cart">
                  <button class="add-to-cart-btn" onclick = "addToCart(${
                    dbProductList[i].id
                  })"><i class="fa-solid fa-cart-plus"></i></button>
            </div>
            </div>
        </div>
      `;
  }
  grid.innerHTML = stringHTML;
}
render();
// --------------
function filterCateP() {
  render();
}
// --------------
function filterPriceP() {
  render();
}
// --------------
function search() {
  render();
}
// --------------
function renderProductPageUser(i) {
  currentPageUser = i;
  localStorage.setItem(
    "currentPageProductUser",
    JSON.stringify(currentPageUser)
  );
  render();
}
// ----------------
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
// // search===============
// function search() {
//   render();
// }
