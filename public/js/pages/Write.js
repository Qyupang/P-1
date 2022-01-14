import Home from "./Home.js";

const $ = document;

export default function write() {
  const write = $.createElement("div");

  write.innerHTML = `
  <div class="post-nav">
  <span class="post-board">자유게시판</span>
  <span class="writer">아이디</span>
  </div>
  <div class="post-title">게시글 입니다.</div>
  <div class="post-content">2주간 수고하셨습니다 :)</div>
  <div class="buttons">
  <input type="button" class="delete click" value="삭제">
    <input type="button" class="change click" value="수정" >
  </div>

    </div>
        `;

  // 대체해야할 페이지가 존재하면 지워버리고 새 것을 삽입한다.
  const toBeReplaced = $.querySelector(".replace");
  if (toBeReplaced) {
    toBeReplaced.remove();
  }
  write.classList.add("write-box", "replace");
  root.appendChild(write);

  function makeButton(purpose) {
    // exit 이면 뒤로가기
    if (purpose === "change") {
      const change = $.querySelector(".change");
      change.addEventListener("click", function () {
        history.go(-1);
      });
    } else {
      const deletePost = $.querySelector(".delete");
      deletePost.addEventListener("click", function () {
        alert("Do you want to delete this post?");
        Home(root);
        history.pushState(null, null, "home");
      });
    }
  }
  makeButton("delete");
  makeButton("change");
}
