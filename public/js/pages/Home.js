const $ = document;

export default function Home(root) {
  const home = $.createElement("div");
  home.innerHTML = `
          <h1>Welcome!!</h1>`;

  // 대체해야할 페이지가 존재하면 지워버리고 새 것을 삽입한다.
  const toBeReplaced = $.querySelector(".replace");
  if (toBeReplaced) {
    console.log(toBeReplaced);
    toBeReplaced.remove();
  }
  home.classList.add("home", "replace");
  root.appendChild(home);
}
