// dummy data
const productsJson = `[
  { "id": "1", "type": "1", "thumbnail": "product_1.jpg", "en": "Toothpaste Original mint", "ko": "오리지널 민트", "price": "8500" },
  { "id": "2", "type": "1", "thumbnail": "product_2.jpg", "en": "Toothpaste Strong mint", "ko": "스트롱 민트", "price": "9000" },
  { "id": "3", "type": "1", "thumbnail": "product_3.jpg", "en": "Toothpaste Yuza mint", "ko": "유자 민트", "price": "9000" },
  { "id": "4", "type": "1", "thumbnail": "product_4.jpg", "en": "Toothpaste Whitening mint", "ko": "화이트닝 민트", "price": "10500" },
  { "id": "5", "type": "1", "thumbnail": "product_5.jpg", "en": "Toothpaste Original mint", "ko": "오리지널 민트 30g", "price": "4000" },
  { "id": "6", "type": "2", "thumbnail": "product_6.jpg", "en": "Toothbrush Red", "ko": "칫솔 [레드]", "price": "8400" },
  { "id": "7", "type": "2", "thumbnail": "product_7.jpg", "en": "Toothbrush Brown", "ko": "칫솔 [브라운]", "price": "8400" },
  { "id": "8", "type": "2", "thumbnail": "product_8.jpg", "en": "Toothbrush Green", "ko": "칫솔 [그린]", "price": "8400" },
  { "id": "9", "type": "2", "thumbnail": "product_9.jpg", "en": "Toothbrush Pink", "ko": "칫솔 [핑크]", "price": "8400" },
  { "id": "10", "type": "2", "thumbnail": "product_10.jpg", "en": "Toothbrush Ivory(Sliver)", "ko": "칫솔 [아이보리 실버]", "price": "8400" },
  { "id": "11", "type": "2", "thumbnail": "product_11.jpg", "en": "Toothbrush Ivory(Blue)", "ko": "칫솔 [아이보리 블루]", "price": "8400" },
  { "id": "12", "type": "2", "thumbnail": "product_12.jpg", "en": "Toothbrush Black", "ko": "칫솔 [블랙]", "price": "8400" }
]`;
const products = JSON.parse(productsJson);
const brandNameEN = "PREMINT";
const brandNameKO = "프레민트";
const imageBasePath = "/premint/images/";

const header = document.querySelector('header');
const logo = document.querySelector('#headerLogo');
const scrollTop = document.querySelector('#scrollTop');
const footer = document.querySelector('footer');

window.addEventListener('DOMContentLoaded', () => {
  setHeaderLogo();
  getMainHeight();
});

window.addEventListener('resize', () => {
  setHeaderLogo();
});

// Change header background on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    if (header.classList.contains('scrolled')) return;
    header.classList.add('scrolled');
    logo.src = '/premint/images/logo.png';
  } else {
    if (!header.classList.contains('scrolled')) return;
    header.classList.remove('scrolled');
    let color = '';
    if (!header.classList.contains('fixed') && !header.classList.contains('mobile')) color = '_white';
    logo.src = `/premint/images/logo${color}.png`;
  }
});

// Scroll to top
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Set header logo
function setHeaderLogo() {
  if (header.classList.contains('scrolled') || header.classList.contains('fixed')) return;
  if (window.innerWidth > 992)  {
    header.classList.remove('mobile');
    logo.src = `/premint/images/logo_white.png`;
  } else {
    header.classList.add('mobile');
    logo.src = '/premint/images/logo.png';
  }
}

// Set initial main height
function getMainHeight() {
  const main = document.querySelector('main');
  const mainPadding = getComputedStyle(main).paddingTop;
  const headerHeight = `${header.clientHeight}px`;
  const footerHeight = `${footer.clientHeight}px`;
  main.style.minHeight = `calc(100vh - ${headerHeight} - ${footerHeight} + ${mainPadding})`;
}