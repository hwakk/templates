const list = document.querySelector('.products__list');
const categorys = document.querySelectorAll('#category>li');
const count = document.querySelector('#count');

// dom 로드시 active 카테고리 데이터 가져오기
window.addEventListener('DOMContentLoaded', () => {
  let index = '';
  categorys.forEach((category) => {
    if (category.classList.contains('active')) {
      index = category.dataset.index;
      category.click();
    }
  });
});

// 카테고리 클릭 이벤트
categorys.forEach((category) => {
  category.addEventListener('click', () => {
    // class active 변경
    categorys.forEach((category) => {
      category.classList.remove('active');
    });

    category.classList.add('active');

    // 카테고리 type 가져오기
    const type = category.dataset.type;

    // type에 맞는 data filter
    const productFilter = products.filter((product) => {
      if (type === '*') return products;
      else return product.type === type;
    });

    // filter된 product list를 html로 변환
    getProducts(productFilter);

    // count 변경
    count.textContent = productFilter.length;

    // main height 재설정
    getMainHeight();
  });
});

function getProducts(products) {
  let htmls = '';
  
  products.forEach((product) => {
    htmls += `
      <li class="products__item" data-type="${product.type}">
        <a href="/premint/product.html?idx=${product.id}" class="product">
          <figure>
            <img src="${imageBasePath}${product.thumbnail}" alt="${brandNameEN} ${product.en}">
          </figure>
          <div class="products__text">
            <h3>${brandNameEN} ${product.en}</h3>
            <p>${brandNameKO} ${product.ko}</p>
          </div>
        </a>
      </li>
    `;
  });

  list.innerHTML = htmls;
}