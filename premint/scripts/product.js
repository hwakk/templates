// search params 가져오기
const params = new URL(document.location).searchParams;
let idx = params.get("idx");

// dummy data
const productsContentJson = `[
  { "id": "1", "content": ["1_1.jpeg", "1_2.jpeg"] },
  { "id": "2", "content": ["2_1.jpeg", "2_2.jpeg"] },
  { "id": "3", "content": ["3_1.jpeg", "3_2.jpeg"] },
  { "id": "4", "content": ["4_1.jpeg", "4_2.jpeg"] },
  { "id": "5", "content": ["5_1.jpeg", "5_2.jpeg"] },
  { "id": "6", "content": [] },
  { "id": "7", "content": [] },
  { "id": "8", "content": [] },
  { "id": "9", "content": [] },
  { "id": "10", "content": [] },
  { "id": "11", "content": [] },
  { "id": "12", "content": [] }
]`;
const productsContent = JSON.parse(productsContentJson);

// idx에 해당하는 상품 정보 가져오기
let product = products.find((product) => product.id === idx);
// content 정보 추가
product = { ...product, ...productsContent.find((content) => content.id === idx) };

getImages();
getInfo();

// 상품 정보 렌더링
function getImages() {
  const images = document.querySelector("#images");

  // type에 따른 공통 이미지 추가
  const img = document.createElement("img");
  img.src = `/premint/images/product/${product.type}/main.jpeg`;
  images.appendChild(img);
  
  // content에 따른 이미지 추가
  product.content.forEach((content) => {
    const img = document.createElement("img");
    img.src = `/premint/images/product/${product.type}/${content}`;
    images.appendChild(img);
  });
}

function getInfo() {
  const enTitle = document.querySelector(".title.en");
  const koTitle = document.querySelector(".title.ko");
  const price = document.querySelector(".price");

  enTitle.innerHTML = `${brandNameEN} ${product.en}`;
  koTitle.innerHTML = `${brandNameKO} ${product.ko}`;
  price.innerHTML = `${parseInt(product.price).toLocaleString('ko-KR')}원`;
}