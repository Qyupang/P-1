// 네비게이션 바 html 추가 및 버튼 기능 활성화
import createButton from "./Button.js";

const $ = document;

export default function Navigation(root) {
  const nav = $.createElement("div");
  nav.classList.add("upper", "replace-on");
  nav.innerHTML = `
  <span class="nav-item free-board click">자유게시판</span>
  <span class="nav-item register click">등록하기</span>
  `;
  root.appendChild(nav);

  createButton("free-board");
  createButton("register");
}
