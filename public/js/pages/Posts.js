const $ = document;

export default function Post(root, name) {
  const post = $.createElement("ul");
  const postTitle = $.createElement("h1");
  if (name === undefined) {
    name = "자유 게시판";
    console.log(name);
  } else {
    switch (name) {
      case "/free-board":
        name = "자유 게시판";
        break;
      case "/secret-board":
        name = "비밀 게시판";
        break;
      case "/info-board":
        name = "정보 게시판";
        break;
      case "/promo-board":
        name = "홍보 게시판";
        break;
      case "/sw-board":
        name = "SW 게시판";
        break;
    }
  }
  postTitle.innerHTML += `<h3>` + name + `</h3>`;
  post.innerHTML = `
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>
          <li class="post click">
            <span class="date">12/18</span>
            <span class="post__title">아주 비기너에 참여하시는...</span>
            <span class="author">익명</span>
          </li>`;

  // 대체해야할 페이지가 존재하면 지워버리고 새 것을 삽입한다.
  const toBeReplaced = $.querySelector(".replace");
  if (toBeReplaced) {
    toBeReplaced.remove();
  }
  const toBeReplacedTitle = $.querySelector(".replace-title");
  if (toBeReplacedTitle) {
    toBeReplacedTitle.remove();
  }
  post.classList.add("post-cotainer", "replace");
  postTitle.classList.add("replace-title");
  root.appendChild(postTitle);
  root.appendChild(post);
}
