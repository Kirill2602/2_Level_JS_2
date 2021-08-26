<template>
<div class="v-select">
<p class="title"
@click="arOptionsVisible = !arOptionsVisible"
>{{ selected }}</p>
  <div class="options"
  v-if="arOptionsVisible"
  >
    <p
    v-for="option in options"
    :key="option.value"
    @click="selectOption(option)"
    >
  {{option.name}}
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: "v-select",
  props:{
    options:{
      type: Array,
      default(){
        return []
      }
    },
    selected:{
      type:String,
      default:''
    },
  },
  data(){
    return{
      arOptionsVisible: false
    }
  },
  methods:{
    selectOption(option){
      this.$emit('select', option);
      this.arOptionsVisible = false;
    },
    hideSelect(){
      this.arOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect);
  },
}
</script>

<style lang="scss">
.v-select{
  position: relative;
  width: 200px;
  cursor: pointer;
}
.v-select p{
  margin: 0;
}
.options{
  position: absolute;
  border: 1px solid #aeaeae;
  width: 100%;
  top: 30px;
  right: 0;
  background: #ffffff;
}
.options p:hover{
  background: #e7e7e7;
}
.title{
  border: 1px solid #aeaeae;
}
</style>