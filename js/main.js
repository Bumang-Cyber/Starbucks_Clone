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

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      //gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
// lodash의 _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper('선택자', {옵션})
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, //한 번에 보여줄 슬라이드 수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //가운데 포커스 슬라이드 구성
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true, //클릭가능한지
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  }
})

const promotionEl = document.querySelector(".promotion")
const promotionToggleBtn = document.querySelector(".toggle-promotion")
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add("hide")
  } else {
    //보이기 처리
    promotionEl.classList.remove("hide")
  }
})