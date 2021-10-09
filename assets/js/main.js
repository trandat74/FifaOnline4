/* Search */
const getSearch = document.querySelector(".tool__search--hide");
const getBtnSearch = document.querySelector(".tool__search--none");
const getBtnSearchIcon = document.querySelector(".bx-search");

getBtnSearch.addEventListener('click', () => {
  getSearch.classList.toggle("tool__search--show");
  getBtnSearchIcon.classList.toggle("bx-search")
  getBtnSearchIcon.classList.toggle("bx-x")
}
)

/* Slider */
var swiper = new Swiper(".slider__imgs", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* Nav-Show */

const getNavToggle = document.querySelector('.nav-toggle')
const getNavMobile = document.querySelector('.nav-moblie')
const getNavClose = document.querySelector('.close-nav')
const getApp = document.querySelector('#app')
if (getNavToggle) {
  getNavToggle.addEventListener('click', () => {
    getApp.classList.toggle('app--active')
    getNavMobile.classList.add('nav-moblie--active')
  }

  )

}
if (getNavClose) {
  getNavClose.addEventListener('click', () => {
    getNavMobile.classList.remove('nav-moblie--active')
  })
}

/* Event */
var swiper__event = new Swiper(".event__content", {
  slidesPerView: 4,
  spaceBetween: 30,
  // centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,

    },
    1024: {
      slidesPerView: 4,
    },
  },
});
/* News Tab */

const getBtnNews = document.querySelectorAll(".news__button")
const getListNews = document.querySelectorAll(".news__content")
getBtnNews.forEach(button => {
  /* Click */
  button.addEventListener('click', () => {
    /* Del active */
    getBtnNews.forEach((btn) => {
      btn.classList.remove('news__button--active')
    })
    /* Add active */
    button.classList.toggle('news__button--active')

    /* ListNews */
    const getDatafilter = button.getAttribute('data-filter')
    getListNews.forEach(item => {
      item.classList.remove('news__content--active')
      if (item.getAttribute('data-list') == getDatafilter)
        item.classList.add('news__content--active')
    })
  })
})


/* Hightlignt */
var swiperHightlight = new Swiper(".items__slides", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

