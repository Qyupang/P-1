const $ = document;

export default function signUp() {
  const signUp = $.createElement("div");
  const check = 0;

  signUp.innerHTML = `
    <h1> 회원가입 </h1>
    ID: <input id="id" type="text" name="id" pattern="^([a-z0-9_]){6,50}$">
    Password: <input id="password" type="password" name="passwd">
    <div class="login-btn-box">
    <input type="button" class="exit click" value="나가기">
    <input type="button" class="sign-up-btn click" value="회원가입" >
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
  signUp.classList.add("sign-up-box", "replace");
  root.appendChild(signUp);

  function makeButton(purpose) {
    // exit 이면 뒤로가기
    if (purpose === "exit") {
      const exit = $.querySelector(".exit");
      exit.addEventListener("click", () => history.go(-1));
      // 회원가입이면 환영 문자 띄우기
    } else {
      const signUp = $.querySelector(".sign-up-btn");

      signUp.addEventListener("click", function () {
        alert(`회원가입을 축하합니다!! 다시 로그인 해주세요`);
        history.go(-1);
      });
    }
  }
  makeButton("exit");
  makeButton("sign-up");
}
