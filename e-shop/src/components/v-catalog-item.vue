<template>
<div class="v-catalog-item">
  <img :src=" require('../assets/img/'+product_data.image)" alt="pic">
  <p class="v-catalog-item_name">{{product_data.name}}</p>
  <p class="v-catalog-item_price">Price: {{product_data.price}} ₽</p>
  <button class="v-catalog-item_add_to_cart_btn btn" @click="sendDataToParent">Add to cart</button>
</div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props:{
    product_data:{
    type: Object,
      default(){
      return {}
      }
    },
  },
  methods:{
    sendDataToParent(){
      this.$emit('sendArticle', this.product_data.article);
    }
  }
}
</script>

<style lang="scss">
.v-catalog-item{
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
  }
</style>