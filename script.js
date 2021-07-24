'use strict';
class ProductItem {
    constructor(product, img='https://imgholder.ru/200x300/8493a8/adb9ca.jpg&text=IMAGE+HOLDER&font=corki&fz=35') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}

class ProductList {
    constructor(container = '.products') {
        this.container = document.querySelector(container);
        this._goods = [];
        this._allProducts = [];
        this._fetchGoods();
        this._render();
       // this._calcTotalPrice(); Сумма корзины
    }

    _fetchGoods() {
        this._goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    _render() {
        for (const product of this._goods) {
            const productObject = new ProductItem(product);
            this._allProducts.push(productObject);
            this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
    //Подсчет суммы заказа. В итоге веведем в корзине.
    // _calcTotalPrice(){
    //     let totalPrice = 0;
    //     this._goods.forEach((good)=> {
    //         if(good.price !== undefined){
    //             totalPrice += good.price;
    //         }
    //     });
    //     document.querySelector('.totalPrice').innerHTML = totalPrice;
    // }

    //}
}
//Тут что-то намудрил для отображения товара в корзине
// class ProductInBasket extends ProductItem{
//     constructor(product, img='https://imgholder.ru/200x300/8493a8/adb9ca.jpg&text=IMAGE+HOLDER&font=corki&fz=35', quantity) {
//         super(product, img='https://imgholder.ru/200x300/8493a8/adb9ca.jpg&text=IMAGE+HOLDER&font=corki&fz=35');
//         this.quantity = quantity;
//     }
//     render(){
//     super.getHTMLString();
//     }
// }

//Сама корзина
// class Basket {
//     constructor() {
//         // В классе корзины массив с добавленными товарами
//         this.addProduct = [];
//         this.deleteProduct = []; // Можно заморочится и добавить товары, которые были удалены из корзины (их можно быстро вернуть в список - убираем боль/проблему поиска, если удалено случайно/пользователь передумал)
//     }
//     // Добавление товара в корзину
//     addToBasket() {}
//
//     // Удаление товара из корзины
//     deleteFromBasket() {}
//
//     // Рендер динамического содержимого корзины
//     render() {}
//
//     // Показываем/скрываем корзину
//     openBasket() {}
//
//     //Полностью зачищаем содержимое корзины
//     remove() {}
// }
const list = new ProductList();