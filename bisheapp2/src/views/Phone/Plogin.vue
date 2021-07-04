<template>
  <div id="PLogin">
    <div class="Lheader" :class="[this.$store.isDaytime ? 'white' : 'balck']">
      <span></span>
      <h1>用户</h1>
      <span @click="handleClose()">完成</span>
    </div>
    <div>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$router.push("/phonehome");
    },
    handleTocomment() {
      this.$router.push("/phonecomment");
    },
  },
};
</script>

<style scoped>
#PLogin {
  width: 100%;
  height: 70%;
  /* background-color: bisque; */
  padding-top: 1rem;
}
.balck {
  background-color: gray;
}
/* .balck1 {
  background-color: rgb(107, 104, 104);
} */
.white {
  background-color: #eee;
}
.Lheader {
  /* background-color: #eee; */
  /* margin-top: 6rem; */
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  border-bottom: rgb(172, 172, 172) 1px solid;
  box-shadow: 0px -1px 10px rgb(155, 154, 154);
}
.Lheader h1 {
  padding: 0rem 10rem;
}
</style>