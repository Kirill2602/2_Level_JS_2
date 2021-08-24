<template>
  <div class="v-catalog-item">
    <v-popup
        v-if="isInfoPopupVisible"
        rightBtnTitle = "Add to cart"
        :popupTitle = "product_data.name"
        @closePopup="closeInfoPopup"
        @rightBtnAction = "addToCart"
    >
      <div>
        <img :src=" require('../assets/img/'+product_data.image)" alt="pic">
        <p class="v-catalog-item_name">Name: {{ product_data.name }}</p>
        <p class="v-catalog-item_price">Price: {{ product_data.price }} ₽</p>
        <p class="v-catalog-item_price">Category: {{ product_data.category }}</p>
      </div>
    </v-popup>

    <img :src=" require('../assets/img/'+product_data.image)" alt="pic">
    <p class="v-catalog-item_name">{{ product_data.name }}</p>
    <p class="v-catalog-item_price">Price: {{ product_data.price }} ₽</p>
    <button class="v-catalog-item_show-info" @click="showPopupInfo">Show info</button>
    <button class="v-catalog-item_add_to_cart_btn btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
import vPopup from '../components/popup/v-popup'

export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  components: {
    vPopup
  },
  data() {
    return {
      isInfoPopupVisible: false
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    }
  }
}
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}

.btn {
  background-color: #8fd50d;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  border: 0;
}
.v-catalog-item_show-info{
  padding: 10px;
  border-radius: 4px;
  border: 0;
  margin-right: 5px;
  cursor: pointer;
}
.v-catalog-item_show-info:hover{
  background-color: #8fd50d;
  transition: 0.3s;
  color: white;
}
</style>