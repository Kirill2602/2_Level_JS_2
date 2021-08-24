<template>
<div class="v-cart-item">
  <img class="v-cart-item_img" :src=" require('../assets/img/'+cart_item_data.image)" alt="pic">
  <div class="v-cart-item_info">
    <p> Name: {{cart_item_data.name}}</p>
    <p> Price: {{cart_item_data.price}} ₽</p>
    <p> Article: {{cart_item_data.article}}</p>
  </div>
  <div class="v-cart-item_quantity">
    <p>Qty</p>
    <span>
      <span class="quantity_btn" @click="decrementItem">-</span>
      {{cart_item_data.quantity}}
      <span class="quantity_btn" @click="incrementItem">+</span>
    </span>

  </div>
  <button @click="deleteFromCart">DELETE</button>
</div>
</template>

<script>

export default {
  name: "v-cart-item",
  props:{
    cart_item_data: Object,
    default(){
      return {}
    }
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  },
  methods:{
    deleteFromCart(){
      this.$emit('deleteFromCart')
    },
    incrementItem(){
      this.$emit('increment')
    },
    decrementItem(){
      this.$emit('decrement')
    },
  }
}
</script>

<style lang="scss">
.v-cart-item{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;

  &_img{
    max-width: 70px;
  }
  .quantity_btn{
    cursor: pointer;
    border: 1px solid #000;
    padding: 3px 3px;
  }
}
</style>