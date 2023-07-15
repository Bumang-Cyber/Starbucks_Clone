// 헤더 검색 아이콘 - 검색 인풋 스위칭
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input"); //각각의 노드에서 또 querySelector를 쓸 수 있다.

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});




// 푸터 부분 연도 계산
const thisYear = document.querySelector(".this-year")
thisYear.innerText = new Date().getFullYear()