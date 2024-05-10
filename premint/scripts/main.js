window.addEventListener('DOMContentLoaded', () => {
  getProducts();
});

function getProducts() {
  let htmls = [];

  products.forEach((product) => {
    htmls.push(`
      <div class="swiper-slide" data-type="${product.type}">
        <a href="/premint/product.html?idx=${product.id}" class="product">
          <figure>
            <img src="${imageBasePath}${product.image}" alt="${brandNameEN} ${product.en}">
          </figure>
          <div class="product__text">
            <h3>${brandNameEN} ${product.en}</h3>
            <p>${brandNameKO} ${product.ko}</p>
          </div>
        </a>
      </div>
    `);
  });

  swiper.appendSlide(htmls);
}

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 6.5,
  speed: 500,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  centeredSlides: true,
  initialSlide: 4,
  roundLengths: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});