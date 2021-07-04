<template>
  <div>
      <!-- <header></header> -->
      <!-- <Tablebar /> -->
      <!-- <IosButton /> -->
      <!-- <Banner /> -->
      <!-- <Skeleton />   -->
      <!-- <Waterfall />
      <sDtext />
      <Login /> -->
      <!-- <h1>main</h1>
      <p>111</p>
       <FooterBar/> -->
       <!-- <PrettyLogin /> -->
       <div class="head_date">1{{this.$store.myDate}}</div>
  </div>
</template>

<script>
import FooterBar from '@/components/footerBar'
import sDtext from '@/components/3Dtext'
import Waterfall from '@/components/waterfall'
import Login from '@/components/Login'
import Tablebar from '@/components/Tablebar'
import IosButton from '@/components/IosButton'
// import Banner from '@/components/Banner'
import Tuozhuai from '@/components/Tuozhuai'
import PrettyLogin from '@/components/PrettyLogin'
import Skeleton from '@/components/Skeleton'

export default {
  // name: 'main',
  components:{
    FooterBar,
    sDtext,
    Waterfall,
    Login,
    Tablebar,
    IosButton,
    // Banner,
    Tuozhuai,
    PrettyLogin,
    Skeleton
  },
  data() {
    return {
      date: new Date()
    };
  },
  mounted() {
    var mydate=new Date()
    var myhours = mydate.getHours()
    console.log(myhours);
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date(); // 修改数据date
    }, 1000)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
}
</script>

<style scoped>
    header{background-color: black; height: 50px;}
    .head_date{
      width: 100px;
      height: 100px;
    }
</style>