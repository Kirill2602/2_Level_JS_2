<template>
  <div class="v-main-wrapper">
    <v-catalog/>
  </div>

</template>

<script>
import vCatalog from './v-catalog'
import vCart from './v-cart'


export default {
  name: "v-main-wrapper",
  components: {vCatalog, vCart,},
  watch:{

  },
  props:{
  },
  data(){
    return{
    }
  },
  computed:{

  },
  methods:{

  },
  mounted() {
    console.log('Mounted')
  }
}
</script>

<style>
  .v-main-wrapper{
    display: flex;
    margin: 0 auto;
  }
</style>