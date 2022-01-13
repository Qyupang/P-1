import createButton from "./Button.js";

const $ = document;

export default function Login(root) {
  const login = $.createElement("div");

  login.innerHTML = `
  <div class="login-box">
  <h1> Login Page </h1>
  ID: <input id="id" type="text" name="id" pattern="^([a-z0-9_]){6,50}$">
  Password: <input id="password" type="password" name="passwd">
  <div class="login-btn-box">
  <input type="button" class="sign-up click" value="회원가입" >
  <input type="button" class="login-btn click" value="로그인">
  </div>
</div>
      `;

  // 대체해야할 페이지가 존재하면 지워버리고 새 것을 삽입한다.
  const toBeReplaced = $.querySelector(".replace");
  if (toBeReplaced) {
    toBeReplaced.remove();
  }
  const toBeReplacedNav = $.querySelector(".replace-on");
  if (toBeReplacedNav) {
    toBeReplacedNav.remove();
  }
  const toBeReplacedTitle = $.querySelector(".replace-title");
  if (toBeReplacedTitle) {
    toBeReplacedTitle.remove();
  }
  login.classList.add("login-box", "replace");
  root.appendChild(login);

  createButton("login-btn");
  createButton("sign-up");
}