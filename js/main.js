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
const toTopEl = document.getElementById("to-top");

window.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      //gsap.to(요소, 지속시간, 옵션)
      gsap.to(
        badgeEl,
        0.6, {
          opacity: 0,
          display: "none",
        });
      gsap.to(toTopEl, {
        display: "flex",
        x: 0
      })

    } else {
      // 배지 보이기
      gsap.to(
        badgeEl,
        0.6, {
          opacity: 1,
          display: "block",
        }
      );
      gsap.to(toTopEl, {
        display: "none",
        x: 500
      })
    }
  }, 300)
);
// lodash의 _.throttle(함수, 시간)

// VISUAL 첫 로딩 애니메이션
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// VISUAL 공지사항 애니메이션
// new Swiper('선택자', {옵션})
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

// PROMOTION 좌우 슬라이더
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
new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next"
  }
})

// 프로모션 토글
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

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  gsap.to(
    selector,
    random(1.5, 2.5), {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  )
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', 0.5, 15)
floatingObject('.floating3', 1.5, 20)


const spyEls = document.querySelectorAll("section.scroll-spy")
spyEls.forEach((spyEl) => {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8 //뷰포트의 8팔 아래에서 훅을 걺. 거의 이벤트 리스너라고 보면 되나..

    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})

const thisYear = document.querySelector(".this-year")
thisYear.innerText = new Date().getFullYear()