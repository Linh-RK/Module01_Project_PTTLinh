function userNameDisplay() {
  let userLogin = JSON.parse(window.localStorage.getItem("userLogin")) || [];
  if (userLogin == "") {
    login();
  } else {
    userName.innerHTML = userLogin.userName;
  }
}
userNameDisplay();
// ---------------------------
function login() {
  window.location.href = "http://127.0.0.1:5500/HTML/login.html";
}
// ---------------------------
function logout() {
  localStorage.setItem("userLogin", null);
  window.location.href = "http://127.0.0.1:5500/HTML/login.html";
}
