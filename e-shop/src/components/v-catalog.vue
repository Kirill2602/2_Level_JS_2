<template>

  <div class="v-catalog">
    <router-link :to="{name:'cart', params:{cart_data: CART}}">
      <div class="v-catalog_link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>

    <h1>Catalog</h1>
    <div class="filters">
      <input
          type="text"
          placeholder="Search by name"
          v-model="searchLine"
      >
      <v-select
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
      />
      <div class="range-slider">
        <input
            type="range"
            min="0"
            max="3000"
            step="10"
            v-model.number="minPrice"
            @change="setRangeSlider"
        >

        <input
            type="range"
            min="0"
            max="3000"
            step="10"
            v-model.number="maxPrice"
            @change="setRangeSlider"
        >
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>
    <div class="v-catalog-list">
      <v-catalog-item
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'
import vSelect from './v-select'

export default {
  name: "v-catalog",
  components: {vCatalogItem, vSelect},
  data() {
    return {
      categories: [
        {name: 'Все', value: 'All'},
        {name: 'Мужские', value: 'М'},
        {name: 'Женские', value: 'Ж'},
      ],
      selected: 'Все',
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 3000,
      searchLine:'',
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let temp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = temp;
      }
      this.sortByCategories();
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      })
      if (category){
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected = category.name
          return e.category === category.name
        })
      }
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log('data arrived!')
            this.sortByCategories()
          }
        })
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        const regexp = new RegExp(this.searchLine, 'i');
        // return this.sortedProducts;
        return this.sortedProducts.filter((product) => product.name.match(regexp));
      } else {
        return this.PRODUCTS;
      }
    },
  },

}
</script>

<style lang="scss">
.v-catalog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  width: 100vw;
}

.v-catalog_link_to_cart {
  position: absolute;
  padding: 16px;
  border: 1px solid #aeaeae;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.v-catalog_link_to_cart:hover{
  background: #8fd50d;
  color: white;
  transition: 0.3ms;
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}

.range-values {
  margin-right: 50px;
}
</style>