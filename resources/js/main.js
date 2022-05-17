const productNewImgElement = document.querySelector('.product-new_img');
const productNewContentElement = document.querySelector('.product-new_content');
const connectedElement = document.querySelector('.container-connect');

function productNew() {
  console.log(window.scrollY);
  if (window.scrollY >= 700) {
    productNewImgElement.style = 'transform: translateX(0);'
    productNewContentElement.style = 'transform: translateX(0);'
  } else if (window.scrollY < 600) {
    productNewImgElement.style = 'transform: translateX(-100%);'
    productNewContentElement.style = 'transform: translateX(160%);'
  }

  if (window.scrollY >= 1965.5) {
    connectedElement.style = 'transform: translateY(0)'
  } else if (window.scrollY <= 1597.5) {
    connectedElement.style = 'transform: translateY(100%)'
  }
}
function shake() {
  productNewImgElement.classList.add('shake');
  setTimeout(() => {
    productNewImgElement.classList.remove('shake');
  }, 1000);
}

setInterval(() => {
  if (window.scrollY >= 750) shake();
}, 5000);
window.addEventListener('scroll', () => productNew())

