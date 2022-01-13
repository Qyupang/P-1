import Post from "./Posts.js";

export default function handleMenuClick() {
  const hiddenMenu = document.querySelectorAll(".board-menu");
  hiddenMenu.forEach((buttonName) => {
    // 게시판 이름
    const post = buttonName.textContent;
    const newURL = buttonName.id;
    buttonName.addEventListener("click", () => moveToRoute(root, post, newURL));
  });
}

// 해당 버튼에 따른 상호작용
function moveToRoute(root, post, newURL) {
  history.pushState(null, null, `${newURL}`);
  switch (post) {
    case "자유 게시판":
      Post(root, post);
      break;
    case "비밀 게시판":
      Post(root, post);
      break;
    case "정보 게시판":
      Post(root, post);
      break;
    case "홍보 게시판":
      Post(root, post);
      break;
    case "SW 게시판":
      Post(root, post);
      break;
  }
}
