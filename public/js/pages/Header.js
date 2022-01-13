// 헤더 html 추가 및 버튼 기능 활성화
import createButton from "./Button.js";

const $ = document;

export default function Header(root) {
  const header = $.createElement("header");
  header.innerHTML = `<i class="fas fa-bars menu click" ></i>
  <span class="home click" >AJOU Memo</span>
  <span class="login click" >Log in</span>`;
  root.appendChild(header);

  const headerButtons = ["menu", "home", "login"];

  createButtons(headerButtons);
}

// 코드 중복을 해결하는 함수 <- 리뷰 참고하였습니다ㅎㅎ
function createButtons(buttonNames) {
  buttonNames.forEach((buttonName) => {
    createButton(buttonName);
  });
}
