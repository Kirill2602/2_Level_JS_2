<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup_header">
        <span>{{ popupTitle }}</span>
        <span><i class="material-icons" @click="closePopup">close</i></span>
      </div>
      <div class="v-popup_content">
        <slot></slot>
      </div>
      <div class="v-popup_footer">
        <button class="close_modal"
                @click="closePopup"
        >Close
        </button>
        <button class="submit_btn"
        @click="rightBtnAction">
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  methods: {
    rightBtnAction(){
      this.$emit('rightBtnAction')
    },
    closePopup() {
      this.$emit('closePopup')
    }
  },
  props: {
    rightBtnTitle: {
      type: String,
      default: 'Ok'
    },
    popupTitle: {
      type: String,
      default: 'Popup name'
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['popup_wrapper']){
        vm.closePopup()
      }
    })
  }
}
</script>

<style lang="scss">
.v-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
}

.v-popup_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-popup_content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-popup_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.submit_btn {
  padding: 8px;
  color: white;
  background-color: #8fd50d;
}

.close_modal {
  padding: 8px;
  color: white;
  background-color: red;
}
.popup_wrapper{
  background: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  height: 1000%;
}
.material-icons  {
  cursor: pointer;
}
.close_modal{
  cursor: pointer;
}
.close_modal:hover{
  font-size: 12px;
  transition: 0.3ms;
}
.submit_btn{
  cursor: pointer;
}
.submit_btn:hover{
  background: white;
  border: 1px solid #8fd50d;
  color: #8fd50d;
}
</style>