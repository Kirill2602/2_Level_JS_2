<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
export default {
  name: "v-main-wrapper",
  watch:{

  },
  props:{
  },
data(){
    return{}
},
  computed:{
  },
  methods:{

  },
}
</script>

<style>
  .v-main-wrapper{
    display: flex;
    margin: 0 auto;
  }
</style>