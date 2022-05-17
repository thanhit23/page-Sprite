const productElement = document.querySelector('.product-list');
const product = [
  {
    id: 1,
    url: '/resources/image/product/tropical-mix.png',
    name: 'Tropical Mix'
  },
  {
    id: 2,
    url: '/resources/image/product/cherry-zero-sugar.png',
    name: 'Cherry Zero Sugar'
  },
  {
    id: 3,
    url: '/resources/image/product/cherry.png',
    name: 'Cherry'
  },
  {
    id: 4,
    url: '/resources/image/product/lymonade.png',
    name: 'Lymonade'
  },
  {
    id: 5,
    url: '/resources/image/product/lemon-lime-zero-sugar.png',
    name: 'Lemon Lime Zero Sugar'
  },
  {
    id: 6,
    url: '/resources/image/product/lemon-lime.png',
    name: 'Lemon Lime'
  },
  {
    id: 7,
    url: '/resources/image/product/ginger.png',
    name: 'Ginger'
  },
  {
    id: 8,
    url: '/resources/image/product/ginger-zero-sugar.png',
    name: 'Ginger Zero Sugar'
  }
]


function renderProduct() {
  const html = product.map((products) => {
    return `
      <li class="product-item">
        <div class="product-wrapper">
          <img src="${products.url}" alt="">
          <p>${products.name}</p>
        </div>
      </li>`
  })
  productElement.innerHTML = html.join('');
}
renderProduct();
