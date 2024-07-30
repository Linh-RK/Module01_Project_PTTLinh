// let categoriesList1 = JSON.parse(localStorage.getItem("categoriesList")) || [];
// console.log(categoriesList1);
// let cateList=[];
// let id = 1;
// let newCate ;
// for(let i in categoriesList1){
//      newCate = {
//         id: id++,
//         category:categoriesList1[i],
//     }
//     cateList.push(newCate)
// }
// console.log(cateList);

// localStorage.setItem("categoriesList1", JSON.stringify(cateList));
// const dbCate = JSON.parse(window.localStorage.getItem("categories")) || [];
// ====================================================================
const addBtn = document.querySelector("#add");
const cancelBtn = document.querySelector("#cancelBtn");
const updateTop = document.querySelector("#updateTop");
const inputNew = document.querySelector("#inputNew");
const sort = document.querySelector("#sort");
const inputSearch = document.querySelector("#input-search");
const searchBtn = document.querySelector(".search-btn");
const updateBtn = document.querySelector(".update-cate");
const deleteBtn = document.querySelector(".delete-cate");
const lineCate = document.querySelector("#lineCate");
const title = document.querySelector(".title");
const pageControl = document.querySelector(".page");
// let idUpdate = null;------------------------------------------------
let totalPage = 1;
let pageSize = 5;
let currentPageCategoryAdm = 1;
localStorage.setItem(
  "currentPageCategoryAdm",
  JSON.stringify(currentPageCategoryAdm)
);
// -------------------------
function render() {
  let categoriesList1 =
    JSON.parse(localStorage.getItem("categoriesList1")) || [];
  // -SEARCH--------------
  categoriesList1 = categoriesList1.filter((e) =>
    e.category.toLowerCase().includes(inputSearch.value.trim().toLowerCase())
  );
  // -SORT ABC---------------
  if (sort.value == "az") {
    categoriesList1.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sort.value == "za") {
    categoriesList1.sort((a, b) => b.category.localeCompare(a.category));
  }
  // PAGINATION-----------------
  totalPage = Math.ceil(categoriesList1.length / pageSize);
  // -----------------
  let stringHTMLpage = "";
  for (let i = 1; i <= totalPage; i++) {
    stringHTMLpage += `
      <button
        class="pagination"
        onclick="renderCatePage(${i})"
      >
      ${i}
      </button>
      `;
  }
  pageControl.innerHTML = stringHTMLpage;
  currentPageCategoryAdm = JSON.parse(
    localStorage.getItem("currentPageCategoryAdm")
  );
  let skip = (currentPageCategoryAdm - 1) * pageSize;
  if (pageSize > categoriesList1.length) {
    categoriesList1 = categoriesList1;
  } else {
    categoriesList1 = categoriesList1.slice(skip, skip + pageSize);
  }
  // RENDER----------------
  let stringHTML = "";
  let stt = 1;
  for (let i = 0; i < categoriesList1.length; i++) {
    stringHTML += `
    <tr class="add-area">
         <td>${(currentPageCategoryAdm - 1) * pageSize + stt++}</td>
         <td id="nameCate">${categoriesList1[i].category}</td>
         <td>
         <button id="add" onclick = "updateCate(${
           categoriesList1[i].id
         })">Sửa</button>
         <button id="cancel" onclick="deleteCate(${
           categoriesList1[i].id
         })">Xoá</button>
         </td>
        
     </tr>
    `;
  }
  lineCate.innerHTML = stringHTML;
}
render();
// ---------------------------------
function renderCatePage(i) {
  currentPageCategoryAdm = i;
  localStorage.setItem(
    "currentPageCategoryAdm",
    JSON.stringify(currentPageCategoryAdm)
  );
  render();
  activePage();
}
// UPDATE----------------------------------------
function updateCate(id) {
  const categoriesList1 =
    JSON.parse(localStorage.getItem("categoriesList1")) || [];
  let index = categoriesList1.findIndex((e) => e.id == id);
  localStorage.setItem("tem", JSON.stringify(categoriesList1[index]));
  inputNew.value = categoriesList1[index].category;
  idUpdate = categoriesList1[index].id;
  updateTop.style.display = "block";
  addBtn.style.display = "none";
  title.innerHTML = "UPDATE CATEGORY";
}
function update() {
  const categoriesList1 =
    JSON.parse(localStorage.getItem("categoriesList1")) || [];
  if (!inputNew.value) {
    alert("Không được để trống dữ liệu");
  } else {
    let index = categoriesList1.findIndex(
      (e) => e.category == inputNew.value.trim()
    );
    if (index !== -1) {
      alert(`Đã tồn tại category ${inputNew.value}`);
    } else {
      let idx = categoriesList1.findIndex((e) => e.id == idUpdate);
      categoriesList1[idx].category = inputNew.value;
      localStorage.setItem("categoriesList1", JSON.stringify(categoriesList1));
      inputNew.value = "";
      updateTop.style.display = "none";
      addBtn.style.display = "block";
      title.innerHTML = "ADD NEW CATEGORY";

      render();
    }
  }
}
// ADD----------------------------------------
function add() {
  const categoriesList1 =
    JSON.parse(localStorage.getItem("categoriesList1")) || [];
  if (!inputNew.value) {
    alert("Không được để trống dữ liệu");
  } else {
    let index = categoriesList1.findIndex(
      (e) => e.category.toLowerCase() == inputNew.value.trim().toLowerCase()
    );
    if (index !== -1) {
      alert(`Đã tồn tại category ${inputNew.value}`);
    } else {
      let newCate = {
        id: categoriesList1.length + 1,
        category: inputNew.value.trim(),
      };
      categoriesList1.push(newCate);
      localStorage.setItem("categoriesList1", JSON.stringify(categoriesList1));
      render();
    }
  }
}
// CANCEL----------------------------------------
function cancel() {
  inputNew.value = "";
  updateTop.style.display = "none";
  addBtn.style.display = "block";
  title.innerHTML = "ADD NEW CATEGORY";
}
// DELETE----------------------------------------
function deleteCate(id) {
  const categoriesList1 =
    JSON.parse(localStorage.getItem("categoriesList1")) || [];
  let index = categoriesList1.findIndex((e) => e.id == id);
  categoriesList1.splice(index, 1);
  localStorage.setItem("categoriesList1", JSON.stringify(categoriesList1));
  render();
}
// ----------------------------------------------
function activePage() {
  const currentPageCategoryAdm = JSON.parse(
    localStorage.getItem("currentPageCategoryAdm")
  );
  let page = document.getElementsByClassName("pagination");
  console.log(page);
  page[currentPageCategoryAdm - 1].style.backgroundColor =
    " rgba(116, 166, 41, 0.3)";
  page[currentPageCategoryAdm - 1].style.border =
    "1px solid rgba(116, 166, 41, 0.3)";
  page[currentPageCategoryAdm - 1].style.borderRadius = "3px";
  page[currentPageCategoryAdm - 1].style.padding = "6px";
}
activePage();
