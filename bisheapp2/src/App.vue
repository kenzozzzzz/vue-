<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  beforeMount() {
    var newdate = new Date();
    var nowhour = newdate.getHours();
    if (nowhour <= 6 || nowhour >= 18) {
      console.log("night");
      this.$store.isDaytime = false;
    } else {
      console.log("day");
      this.$store.isDaytime = true;
    }
  },
  mounted() {
    
    if (this._isMobile()) {
      // 跳转至手机端路由
      // alert("手机端");
      this.$router.replace("/phonehome");
    } else {
      // 跳转至 pc 端路由
      // alert("pc端");
      this.$router.replace("/");
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
