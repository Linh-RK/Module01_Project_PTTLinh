const productList = [
  {
    id: 1,
    name: "Bánh SN 2024 1",
    img: "../ASSET/img/product/SN_24_01.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh sinh nhật 2024",
    price: 300,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

- Gato

- Kem tươi vị rượu rum

- Hoa quả

- Dừa khô.

Bánh làm từ 3 lớp gato trắng xen giữa 3 lớp kem tươi vị rượu rum (nho). Trên mặt bánh được trang trí bằng hoa quả với dừa khô kết xung quanh.`,
  },
  {
    id: 2,
    name: "Bánh SN 2024 2",
    img: "../ASSET/img/product/SN_24_02.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh sinh nhật 2024",
    price: 400,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

- Gato

- Kem phomai vị coffee

- Cacao.

Bánh làm từ 3 lớp gato TRẮNG xen giữa 3 lớp kem TƯƠI PHOMAI, VỊ COFFEE. Bên ngoài phủ 1 lớp bột cacao VÀ DECOR HOA QUẢ. `,
  },
  {
    id: 3,
    name: "Bánh SN 2024 3",
    img: "../ASSET/img/product/SN_24_03.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh sinh nhật 2024",
    price: 350,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

Gato
Kem tươi  vị Coffee
Dừa tươi sấy khô
Bánh làm từ 3 lớp kem gato trắng  kết hợp với 3 lớp kem TƯƠI  vị coffe.bánh được phủ bên ngoài bởi 1 lớp dừa sấy khô rất thơm , TRANG TRÍ HOA QUẢ`,
  },
  {
    id: 4,
    name: "Bánh SN 2024 4",
    img: "../ASSET/img/product/SN_24_04.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh sinh nhật 2024",
    price: 375,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

- Gato,

- Kem tươi trà xanh ,  vị rượu rum,

-Bột Trà xanh.

Bánh làm từ 3 lớp gato trắng xen giữa 3 lớp kem tươi trà xanh  vị rượu rum (nho). Bên ngoài bánh phủ 1 LỚP BỘT TRÀ XANH VÀ TRANG TRÍ HOA QUẢ.`,
  },
  {
    id: 5,
    name: "Bánh trái tim 1",
    img: "../ASSET/img/product/SN_heart_01.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Valentine - Trái Tim",
    price: 300,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

- Gato

- Kem BƠ COFFEE

Bánh làm từ 3 lớp gato trắng xen giữa 3 lớp kem BƠ COFFEE, VỊ COFFEE. Trên mặt bánh được trang trí bằng hoa quả và socola đổ .`,
  },
  {
    id: 6,
    name: "Bánh trái tim 2",
    img: "../ASSET/img/product/SN_heart_02.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Valentine - Trái Tim",
    price: 300,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

- Gato,

- Kem bơ trộn socola vị rượu rum,

- Dừa khô.

Bánh làm từ 3 lớp gato xen giữa 3 lớp kem. Phủ bằng 1 lớp gato trộn socola vị rượu rum với dừa khô và socola rắc ngoài.
  `,
  },
  {
    id: 7,
    name: "Bánh trái tim 3",
    img: "../ASSET/img/product/SN_heart_03.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Valentine - Trái Tim",
    price: 300,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

- Gato,

- Kem bơ vị rượu rum,

- Socola.

Bánh được làm từ 3 lớp gato xen giữa 3 lớp kem. Kế tiếp là lớp kem bơ socola vị rượu rum và 1 lớp socola chảy phủ bên ngoài.
  `,
  },
  {
    id: 8,
    name: "Bánh trái tim 4",
    img: "../ASSET/img/product/SN_heart_04.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Valentine - Trái Tim",
    price: 300,
    stock: 10,
    status: "On stock",
    description: `
    THÀNH PHẦN CHÍNH:
- GATO
- KEM BƠ VỊ RƯỢU RUM
- SOCOLA BÀO ĐEN
BÁNH ĐƯỢC LÀM TỪ 3 LỚP GATO TRẮNG XEN KẼ 3 LỚP KEM BƠ PHA CHOCOLATE, VỊ RƯỢU RUM , PHỦ BÊN NGOÀI LÀ MỘT LỚP CHOCOLATE BÀO ĐEN NGUYÊN CHẤT VÀ TRANG TRÍ HOA QUẢ.
  `,
  },
  {
    id: 9,
    name: "Bánh SN bé trái 1",
    img: "../ASSET/img/product/SN_boy_01.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Sinh Nhật Bé Trai",
    price: 300,
    stock: 10,
    status: "On stock",
    description: `
    THÀNH PHẦN CHÍNH:
- GATO
- KEM BƠ VỊ RƯỢU RUM
- SOCOLA BÀO ĐEN
BÁNH ĐƯỢC LÀM TỪ 3 LỚP GATO TRẮNG XEN KẼ 3 LỚP KEM BƠ PHA CHOCOLATE, VỊ RƯỢU RUM , PHỦ BÊN NGOÀI LÀ MỘT LỚP CHOCOLATE BÀO ĐEN NGUYÊN CHẤT VÀ TRANG TRÍ HOA QUẢ.
  `,
  },
  {
    id: 10,
    name: "Bánh SN bé trái 2",
    img: "../ASSET/img/product/SN_boy_02.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Sinh Nhật Bé Trai",
    price: 300,
    stock: 10,
    status: "On stock",
    description: `
- GATO
- CREAM CHEESE PHOMAI
BÁNH ĐƯỢC LÀM TỪ 3 LỚP GATO KẾT HỢP VỚI LỚP CREAM CHEESE , PHOMAI. PHỦ MẶT BÁNH 1 LỚP BỘT CACAO VÀ TRANG TRÍ HOA QUẢ.F10
  `,
  },
  {
    id: 11,
    name: "Bánh SN bé trái 3",
    img: "../ASSET/img/product/SN_boy_03.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Sinh Nhật Bé Trai",
    price: 300,
    stock: 10,
    status: "On stock",
    description: `
    - Gato,
- Kem tươi mặn vị coffee.
Bánh làm từ 3 lớp gato trắng kết hợp với 3 lớp kem mặn vị coffee. Bánh phủ bên ngoài bởi 1 lớp kem tươi trắng rắc bột cacao.
  `,
  },
  {
    id: 12,
    name: "Bánh SN bé trái 4",
    img: "../ASSET/img/product/SN_boy_04.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Sinh Nhật Bé Trai",
    price: 300,
    stock: 10,
    status: "On stock",
    description: `
    - Gato,
- Kem tươi mặn vị coffee.
Bánh làm từ 3 lớp gato trắng kết hợp với 3 lớp kem mặn vị coffee. Bánh phủ bên ngoài bởi 1 lớp kem tươi trắng rắc bột cacao.
  `,
  },
  {
    id: 13,
    name: "Bánh SN bé gái 1",
    img: "../ASSET/img/product/SN_girl_01.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Sinh Nhật Bé Gái",
    price: 300,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

- Kem bơ

- Socola trắng

- Hoa quả

Bánh làm từ 3 lớp gato trắng xen giữa 3 lớp kem tươi vị rượu rum (nho), bên trên phủ 1 lớp socola trắng bào và trang trí bằng hoa quả.
  `,
  },
  {
    id: 14,
    name: "Bánh SN bé gái 2",
    img: "../ASSET/img/product/SN_girl_02.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Sinh Nhật Bé Gái",
    price: 400,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

- Kem bơ

- Socola trắng

- Hoa quả

Bánh làm từ 3 lớp gato trắng xen giữa 3 lớp kem tươi vị rượu rum (nho), bên trên phủ 2 lớp socola trắng bào và trang trí bằng hoa quả.
  `,
  },
  {
    id: 15,
    name: "Bánh SN bé gái 3",
    img: "../ASSET/img/product/SN_girl_03.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Sinh Nhật Bé Gái",
    price: 400,
    stock: 10,
    status: "On stock",
    description: `
Thành phần chính:

- Kem bơ

- Socola trắng

- Hoa quả

Bánh làm từ 3 lớp gato trắng xen giữa 3 lớp kem tươi vị rượu rum (nho), bên trên phủ 3 lớp socola trắng bào và trang trí bằng hoa quả.
  `,
  },
  {
    id: 16,
    name: "Bánh SN bé gái 4",
    img: "../ASSET/img/product/SN_girl_04.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Sinh Nhật Bé Gái",
    price: 400,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

- Kem bơ

- Socola trắng

- Hoa quả

Bánh làm từ 3 lớp gato trắng xen giữa 3 lớp kem tươi vị rượu rum (nho), bên trên phủ 4 lớp socola trắng bào và trang trí bằng hoa quả.
  `,
  },
  {
    id: 17,
    name: "Bánh số 1",
    img: "../ASSET/img/product/SN_num_01.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Số",
    price: 400,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần:

- Bột mỳ

- Bơ

- Đường

- Kem

- Táo xào

- Hạt Almon
  `,
  },
  {
    id: 18,
    name: "Bánh số 2",
    img: "../ASSET/img/product/SN_num_02.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Số",
    price: 400,
    stock: 10,
    status: "On stock",
    description: `
    Bột mì, men, muối, đường, bơ, trứng, phụ gia, chuối, cơm dừa.
  `,
  },
  {
    id: 19,
    name: "Bánh số 3",
    img: "../ASSET/img/product/SN_num_03.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Số",
    price: 400,
    stock: 10,
    status: "On stock",
    description: `
    Bột mì, men, muối, đường, trứng, sữa đặc, kem whipping, bơ, dừa tươi, nho khô.
  `,
  },

  {
    id: 20,
    name: "Bánh số 4",
    img: "../ASSET/img/product/SN_num_04.jpeg",
    type: "Bánh sinh nhật",
    categories: "Bánh Số",
    price: 400,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

- Bột mỳ

- Bơ

- Socola

- Phụ gia
  `,
  },
  {
    id: 21,
    name: "Bánh mặn 1",
    img: "../ASSET/img/product/BM_01.jpeg",
    type: "Bánh mì & bánh mặn",
    categories: "Bánh mặn",
    price: 50,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần chính:

- Bột mỳ

- Dầu ăn

- Phomai

- Thịt Jambong
  `,
  },
  {
    id: 22,
    name: "Bánh mặn 2",
    img: "../ASSET/img/product/BM_02.jpeg",
    type: "Bánh mì & bánh mặn",
    categories: "Bánh mặn",
    price: 28,
    stock: 10,
    status: "On stock",
    description: `
    Thàn phần:

- Bột mỳ

- Ruốc

- Sốt

- Xúc xích

- Muối

- Phụ gia
  `,
  },
  {
    id: 23,
    name: "Bánh mặn 3",
    img: "../ASSET/img/product/BM_03.jpeg",
    type: "Bánh mì & bánh mặn",
    categories: "Bánh mặn",
    price: 35,
    stock: 10,
    status: "On stock",
    description: `
    Bột mì, men, muối, đường, sữa tươi, bơ, trứng, bột chiên xù, tỏi, thịt xay, cà rốt, hạt tiêu, bột ngô, trứng muối, phomai mozzarella
  `,
  },
  {
    id: 24,
    name: "Bánh mặn 4",
    img: "../ASSET/img/product/BM_04.jpeg",
    type: "Bánh mì & bánh mặn",
    categories: "Bánh mặn",
    price: 32,
    stock: 10,
    status: "On stock",
    description: `Bột mì, men, muối, phụ gia, đường, sữa tươi, bơ, trứng, cà rốt, hành tây, cá ngừ, sốt tomyum, hạt tiêu, sốt mayonnaise, phomai mozzarella.
  `,
  },
  {
    id: 25,
    name: "Bánh mì 1",
    img: "../ASSET/img/product/B_01.jpeg",
    type: "Bánh mì & bánh mặn",
    categories: "Bánh mì",
    price: 20,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần:

- Gato vị vani

- Hạnh nhân cắt lát
  `,
  },
  {
    id: 26,
    name: "Bánh mì 2",
    img: "../ASSET/img/product/B_02.jpeg",
    type: "Bánh mì & bánh mặn",
    categories: "Bánh mì",
    price: 20,
    stock: 10,
    status: "On stock",
    description: `
  `,
  },
  {
    id: 27,
    name: "Bánh mì 3",
    img: "../ASSET/img/product/B_03.jpeg",
    type: "Bánh mì & bánh mặn",
    categories: "Bánh mì",
    price: 18,
    stock: 10,
    status: "On stock",
    description: `
    Socola đen, socola trắng, kem whipping, bơ, mật ong, hương bạc hà.
  `,
  },

  {
    id: 28,
    name: "Bánh mì 4",
    img: "../ASSET/img/product/B_04.jpeg",
    type: "Bánh mì & bánh mặn",
    categories: "Bánh mì",
    price: 10,
    stock: 10,
    status: "On stock",
    description: `
    Bột mì, bơ, trứng, hạt yến mạch, đường, muối
  `,
  },
  {
    id: 29,
    name: "Cookie 1",
    img: "../ASSET/img/product/cookie_01.jpeg",
    type: "Cookie & mini cake",
    categories: "Cookie",
    price: 5,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần:

- Gato vị socola

- Hạnh nhân cắt lát
  `,
  },
  {
    id: 30,
    name: "Cookie 2",
    img: "../ASSET/img/product/cookie_02.jpeg",
    type: "Cookie & mini cake",
    categories: "Cookie",
    price: 5,
    stock: 10,
    status: "On stock",
    description: `
    Thành phần:

- Gato

- Trứng muối

- Ruốc
  `,
  },
  {
    id: 31,
    name: "Cookie 3",
    img: "../ASSET/img/product/cookie_03.jpeg",
    type: "Cookie & mini cake",
    categories: "Cookie",
    price: 6,
    stock: 10,
    status: "On stock",
    description: `
    Bột mỳ, trứng, đường, sữa tươi, dầu ăn, bột sữa, kem bơ, bột ca cao.
  `,
  },
  {
    id: 32,
    name: "Cookie 4",
    img: "../ASSET/img/product/cookie_04.jpeg",
    type: "Cookie & mini cake",
    categories: "Cookie",
    price: 20,
    stock: 10,
    status: "On stock",
    description: `
    -Bột mì, trứng, dầu ăn, kem cheese
  `,
  },
  {
    id: 33,
    name: "Mini cake 1",
    img: "../ASSET/img/product/mini_01.jpeg",
    type: "Cookie & mini cake",
    categories: "Mini cake",
    price: 12,
    stock: 10,
    status: "On stock",
    description: `
    -Bột mì, trứng, dầu ăn, kem cheese
  `,
  },
  {
    id: 34,
    name: "Mini cake 2",
    img: "../ASSET/img/product/mini_02.jpg",
    type: "Cookie & mini cake",
    categories: "Mini cake",
    price: 60,
    stock: 10,
    status: "On stock",
    description: `
    -Bột mì, trứng, dầu ăn, kem cheese
  `,
  },
  {
    id: 35,
    name: "Mini cake 3",
    img: "../ASSET/img/product/mini_03.jpg",
    type: "Cookie & mini cake",
    categories: "Mini cake",
    price: 60,
    stock: 10,
    status: "On stock",
    description: `
    -Bột mì, trứng, dầu ăn, kem cheese
  `,
  },
  {
    id: 36,
    name: "Mini cake 4",
    img: "../ASSET/img/product/mini_04.jpg",
    type: "Cookie & mini cake",
    categories: "Mini cake",
    price: 60,
    stock: 10,
    status: "On stock",
    description: `
    -Bột mì, trứng, dầu ăn, kem cheese
  `,
  },
];

const dbProductList =
  localStorage.setItem("dbProductList", JSON.stringify(productList)) || [];
// ---------------
let categories = productList.map((a) => a.categories);
let categoriesList = [];
categories.forEach(function (item) {
  if (categoriesList.indexOf(item) < 0) {
    categoriesList.push(item);
  }
});
console.log(categoriesList);

// categoriesList =
localStorage.setItem("categoriesList", JSON.stringify(categoriesList)) || [];
// ----------------
let type = productList.map((a) => a.type);
let typeList = [];
type.forEach(function (item) {
  if (typeList.indexOf(item) < 0) {
    typeList.push(item);
  }
});
console.log(typeList);

// categoriesList =
localStorage.setItem("typeList", JSON.stringify(typeList)) || [];
