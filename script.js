'use strict';
const products = [
    {title: 'Notebook', price: 15000, img: 'img/noutbuk.jpg', id: 1},
    {title: 'Mouse', price: 750, img: 'img/mousee.jpg', id: 2},
    {title: 'Keyboard', price: 1050, img: 'img/keyboard.jpg', id: 3},
    {title: 'Gamepad', price: 7250, img: 'img/game.jpg', id: 4},
];

const renderProduct = (title, price, img, id) => {
    return `<div class="product-item"><h4>ID товара: ${id}</h4>
<h3 class="itemName">Название товара: ${title}</h3>
<img class="img" src=${img} alt="pic">
<p class="price">Цена: ${price} рублей</p>
<button class="btn" type="button">В корзину</button></div>`
};

const renderProducts = (list) => {
    const productList = list.map(item => renderProduct(item.title, item.price, item.img, item.id));
    document.querySelector('.products').innerHTML = productList.join('');
}

renderProducts(products);