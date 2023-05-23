const cartContainer = document.createElement('div');
cartContainer.classList.add('cart-container');
document.body.appendChild(cartContainer);
console.log(cartContainer);

const basketIcon = document.createElement('a');
basketIcon.id = 'basket-icon';
cartContainer.appendChild(basketIcon);
console.log(basketIcon);

const basketImage = document.createElement('img');
basketImage.classList.add('basket-image');
basketImage.src = 'assets/icon/icon-basket.png';
basketIcon.appendChild(basketImage);
console.log(basketImage);


const basketCount = document.createElement('a');
basketCount.classList.add('basket-count');
basketCount.innerHTML= 0;
cartContainer.appendChild(basketCount);




