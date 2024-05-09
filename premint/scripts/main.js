const productList = [
  { image: 'product_9.jpg', en:'Toothbrush Pink', ko: '칫솔 [핑크]' },
  { image: 'product_10.jpg', en:'Toothbrush Ivory(Sliver)', ko: '칫솔 [아이보리 실버]' },
  { image: 'product_11.jpg', en:'Toothbrush Ivory(Blue)', ko: '칫솔 [아이보리 블루]' },
  { image: 'product_12.jpg', en:'Toothbrush Black', ko: '칫솔 [블랙]' },
  { image: 'product_1.jpg', en:'Toothpaste Original mint', ko: '오리지널 민트' },
  { image: 'product_2.jpg', en:'Toothpaste Strong mint', ko: '스트롱 민트' },
  { image: 'product_3.jpg', en:'Toothpaste Yuza mint', ko: '유자 민트' },
  { image: 'product_4.jpg', en:'Toothpaste Whitening mint', ko: '화이트닝 민트' },
  { image: 'product_5.jpg', en:'Toothpaste Original mint', ko: '오리지널 민트 30g' },
  { image: 'product_6.jpg', en:'Toothbrush Red', ko: '칫솔 [레드]' },
  { image: 'product_7.jpg', en:'Toothbrush Brown', ko: '칫솔 [브라운]' },
  { image: 'product_8.jpg', en:'Toothbrush Green', ko: '칫솔 [그린]' },
];
const brandNameEN = "PREMINT";
const brandNameKO = "프레민트";
const imageBasePath = "/premint/images/";

window.addEventListener('DOMContentLoaded', () => {
  getProducts();
});


function getProducts() {
  let htmlList = [];

  productList.forEach((product) => {
    htmlList.push(`
      <div class="swiper-slide">
        <a href="/premint/product.html" class="product">
          <img src="${imageBasePath}${product.image}" alt="${brandNameEN} ${product.en}">
          <div class="product__text">
            <h3>${brandNameEN} ${product.en}</h3>
            <p>${brandNameKO} ${product.ko}</p>
          </div>
        </a>
      </div>
    `);
  });

  swiper.appendSlide(htmlList);
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