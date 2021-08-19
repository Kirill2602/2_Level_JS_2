<template>

<div class="v-catalog">
  <h1>Catalog</h1>
  <div class="v-catalog-list">
    <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @sendArticle="showChildArticleInConsole"
    />
  </div>
</div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-catalog",
  components: {vCatalogItem},
  data(){
    return{
    }
    },
  methods:{
    ...mapActions([
        'GET_PRODUCTS_FROM_API'
    ]),
    showChildArticleInConsole(data){
      console.log(data);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
  computed:{
    ...mapGetters([
        'PRODUCTS'
    ])
  },

}
</script>

<style lang="scss">
.v-catalog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

</style>