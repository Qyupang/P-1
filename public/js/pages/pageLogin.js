import Home from "./Home.js";

const $ = document;

export default function pageLogin() {
  const id = $.querySelector("#id");
  const name = id.value;

  alert(`Have a nice day ${name}!!`);

  const root = $.querySelector("#root");
  const icon = $.querySelector(".login");

  // 로그인 되면 아이콘으로 변함
  icon.innerHTML = `<i class="fas fa-user"></i>`;

  // 로그인하면 홈화면 출력
  Home(root);
}
