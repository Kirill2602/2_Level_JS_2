const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        searchLine: '',
        visible: false,
        productsInBasket: [],
        empty: false,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            if (!this.productsInBasket.some((gd) => {
                if (gd.id_product === product.id_product) {
                    gd.quantity++;
                    return true;
                }
            })) {
                this.productsInBasket.push({...product, quantity: 1});
                console.log('Это оно', this.productsInBasket);
            }
        },
        incr(index) {
            this.productsInBasket[index].quantity++
        },
        decr(index) {
            this.productsInBasket[index].quantity--;
            if (this.productsInBasket[index].quantity === 0) {
                this.productsInBasket.splice(index, 1);
            }
        },

        clearBasket() {
            this.productsInBasket = [];
            console.log(0 > 0);
        },
    },
    created() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                this.products = data;
            });
    },
    computed: {
        filterProducts() {
            const regexp = new RegExp(this.searchLine, 'i');
            return this.products.filter((product) => product.product_name.match(regexp));
        },
        basketSumm() {
            return this.productsInBasket.reduce((sum, product) => sum + product.quantity * product.price, 0);
        },
        noEmpty() {
            if (this.productsInBasket.length !== 0) {
                return this.empty = true;
            }
        }
    }
});
