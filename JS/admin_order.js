const lineCate = document.querySelector("#line-cate");
const detailOrder = document.querySelector(".detail-order");
const lineProduct = document.querySelector(".line-product");
const totalMoney = document.querySelector(".total-money");
const inputSearch = document.querySelector(".input-search");
const searchBtn = document.querySelector("search-btn");
const sort = document.querySelector("#sort");
const pageControl = document.querySelector(".page-control");
const page = document.querySelector(".page");
// console.log(tfoot);
let totalPage = 1;
let pageSize = 5;
let currentPageOrderAdm = 1;
localStorage.setItem(
  "currentPageOrderAdm",
  JSON.stringify(currentPageOrderAdm)
);
// -----------------
function render() {
  let orderList = JSON.parse(localStorage.getItem("orderList"));
  // SEARCH--------------------
  orderList = orderList.filter((e) =>
    e.name.includes(inputSearch.value.trim())
  );
  // SORT--------------------
  // if (sort.value == "Newest") {
  //   orderList.sort((a, b) => a.createDate - b.createDate);
  // } else if (sort.value == "Oldest") {
  //   orderList.sort((a, b) => b.createDate - a.createDate);
  // }
  // PAGINATION-------------------
  totalPage = Math.ceil(orderList.length / pageSize);
  // --------------------
  let stringPage = "";
  for (let i = 1; i <= totalPage; i++) {
    stringPage += `
     <button 
     class="pagination"
     onclick="renderPage(${i})">${i}</button>
     `;
  }
  page.innerHTML = stringPage;
  currentPageOrderAdm = JSON.parse(localStorage.getItem("currentPageOrderAdm"));
  // --------------------
  let skip = (currentPageOrderAdm - 1) * pageSize;
  if (pageSize > orderList.length) {
    orderList = orderList;
  } else {
    orderList = orderList.slice(skip, skip + pageSize);
    console.log(orderList);
  }
  // --------------------
  let stt = 1;
  lineCate.innerHTML = "";
  for (let i = 0; i < orderList.length; i++) {
    lineCate.innerHTML += `
        <tr >
            <td>${(currentPageOrderAdm - 1) * pageSize + stt++}</td>
            <td>${orderList[i].idOrder}</td>
            <td>${orderList[i].name}</td>
            <td>${orderList[i].createDate}</td>
            <td>${orderList[i].payment}</td>
            <td>${orderList[i].total}</td>
            <td class = "status">${orderList[i].status}</td>
            <td >
            <button class = "confirm-order-btn" order="${
              orderList[i].idOrder
            }" onclick="confirmOrder(${
      orderList[i].idOrder
    })" style ="display: ${
      orderList[i].status == "New order" ? "block" : "none"
    }">Ok</button>
            <button class = "cancel-order-tn" order="${
              orderList[i].idOrder
            }" onclick="cancelOrder(${orderList[i].idOrder})"
            style ="display: ${
              orderList[i].status == "New order" ? "block" : "none"
            }"
            >Cancel</button>

            <button class = "delivery-order" order="${
              orderList[i].idOrder
            }" onclick="delivered(${orderList[i].idOrder})"
            style ="display: ${
              orderList[i].status == "Delivering" ? "block" : "none"
            }"
            >Delivered</button>
            </td>
            <td>
            <button onclick="displayDetail(${
              orderList[i].idOrder
            })">Detail</button>
            </td>
        </tr>
        `;
  }
}
render();
// ------------------------
function renderPage(i) {
  currentPageOrderAdm = i;
  localStorage.setItem(
    "currentPageOrderAdm",
    JSON.stringify(currentPageOrderAdm)
  );
  render();
  activePage();
}
// -------------------------
let statusOrder = document.querySelector(".status");
const confirmBtn = document.querySelector(".confirm-order-btn");
const cancelBtn = document.querySelector(".cancel-order-tn");
const deliveredBtn = document.querySelector(".delivery-order");

function confirmOrder(idOrder) {
  const orderList = JSON.parse(localStorage.getItem("orderList"));
  confirmBtn.style.display = "none";
  cancelBtn.style.display = "none";
  deliveredBtn.style.display = "block";
  console.log(confirmBtn);
  console.log(cancelBtn);
  console.log(deliveredBtn);
  let index = orderList.findIndex((e) => e.idOrder == idOrder);
  orderList[index].status = "Delivering";
  localStorage.setItem("orderList", JSON.stringify(orderList));

  render();
}
function cancelOrder(idOrder) {
  const orderList = JSON.parse(localStorage.getItem("orderList"));
  confirmBtn.style.display = "none";
  cancelBtn.style.display = "none";
  deliveredBtn.style.display = "block";
  let index = orderList.findIndex((e) => e.idOrder == idOrder);
  orderList[index].status = "Cancel";
  localStorage.setItem("orderList", JSON.stringify(orderList));
  window.location.reload();
  render();
}
function delivered(idOrder) {
  const orderList = JSON.parse(localStorage.getItem("orderList"));
  confirmBtn.style.display = "none";
  cancelBtn.style.display = "none";
  deliveredBtn.style.display = "none";
  let index = orderList.findIndex((e) => e.idOrder == idOrder);
  orderList[index].status = "Succeeded";
  localStorage.setItem("orderList", JSON.stringify(orderList));
  window.location.reload();
  render();
}
// ------------------------

// function displayDetail(idOrder) {
//   const orderList = JSON.parse(localStorage.getItem("orderList"));
//   let index = orderList.findIndex((e) => e.idOrder == idOrder);
//   let cartList = orderList[index].cartProductList;
//   detailOrder.style.display = "block";
//   for (let i = 0; i < cartList.length; i++) {
//     detailOrder.innerHTML = `
//   <tr class="product" onclick = "orderDetail(cartList[i].id)">

//         <td>${cartList[i].name}</td>
//         <td>${cartList[i].price + ".000đ"}</td>
//         <td>${cartList[i].qty}</td>
//         <td>${cartList[i].qty * cartList[i].price + ".000đ"}</td>
//     </tr>
//   `;
//     totalMoney.innerHTML = `
//           <td colspan="3">Total</td>
//           <td >${orderList[index].total}</td>
//    `;
//   }
// }

// ------------------------
function activePage() {
  const currentPageOrderAdm = JSON.parse(
    localStorage.getItem("currentPageOrderAdm")
  );
  let page = document.getElementsByClassName("pagination");
  page[currentPageOrderAdm - 1].style.backgroundColor =
    " rgba(116, 166, 41, 0.3)";
  page[currentPageOrderAdm - 1].style.border =
    "1px solid rgba(116, 166, 41, 0.3)";
  page[currentPageOrderAdm - 1].style.borderRadius = "3px";
  page[currentPageOrderAdm - 1].style.padding = "7px";
}
activePage();
// ---------------------------
const adminDisplay = document.getElementById("adminDisplay");
console.log(adminDisplay);
function userNameDisplay() {
  let adminLogin = JSON.parse(window.localStorage.getItem("adminLogin")) || [];
  if (adminLogin == "") {
    login();
  } else {
    console.log();
    adminDisplay.innerHTML = adminLogin.userName;
  }
}
userNameDisplay();
// ---------------------------
function login() {
  window.location.href = "http://127.0.0.1:5500/HTML/login.html";
}
// ---------------------------
function logout() {
  localStorage.setItem("adminLogin", null);
  window.location.href = "http://127.0.0.1:5500/HTML/login.html";
}
