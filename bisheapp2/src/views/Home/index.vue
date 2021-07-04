<template>
  <div id="Home">
    <Header class="headerbar" />
    <div
      :style="{ '--hc2height': hc, '--hc1height': hc1 }"
      class="home-container1"
    >
      <div
        class="laji"
        :class="[(this.$store.isDaytime)?'white':'balck']"
      ></div>
      <div>
        <h1 :class="[(this.$store.isDaytime)?'white':'balck']">
          <span :class="[(this.$store.isDaytime)?'white':'balck']"
            ><i>Welcome</i></span
          >
          <span><i>To</i></span>
          <span><i>My</i></span>
          <span><i>Blog</i></span>
        </h1>
      </div>
    </div>
    <div :style="{ '--hc2height': hc }" class="home-container2">
      <!-- <h1> secend</h1> -->
      <Tuozhuai />
      <Prettyfooter />
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Tablebar from "@/components/Tablebar";
import Dazi from "@/components/Dazi";
import Header from "@/components/Header";
import Prettyfooter from "@/components/footerBar/Prettyfooter";
import Tuozhuai from "@/components/Tuozhuai";
export default {
  name: "home",
  components: {
    Login,
    Tablebar,
    Dazi,
    Header,
    Prettyfooter,
    Tuozhuai,
  },
  data() {
    return {
      sTop: 0,
      sHeight: 0, //视窗高度
      hc1: "",
      hc: "",
      sDirection: 0,
    };
  },
  //页面注册滚动事件
  beforeMount() {
    if (this.$store.isDaytime) {
      console.log("white");
      var a =this.$store.isDaytime ? 'balck' : 'white'
      console.log(a);
    } else {
      console.log("night");
    }
  },
  mounted() {
    // 监听事件
    window.addEventListener("scroll", this.handleScroll, true);
    // if(this.sTop>100){
    //   // this.$refs.htext.
    // }
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    this.sHeight = h; //减去页面上固定高度height
    this.hc1 = this.sHeight - 300 + "px";
    this.hc = this.sHeight + "px";
    // console.log(this.sHeight, 111);
    // console.log(this.hc1, 2);
    // document.getElementsByClassName('biaoti').style.backgroundColor='black'
  },
  methods: {
    handleScroll: function () {
      // this.$nextTick(()=>{
      var sTop =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.pageYOffset;
      this.sTop = sTop;
      // console.log(this.sTop)
      var scroll = this.sTop - this.sDirection;
      this.sDirection = this.sTop;
      // console.log(scroll)
      // if(this.sTop>(this.sHeight-200) && this.sTop<this.sHeight && scroll>0){
      //   window.scrollTo(0, this.sHeight);
      // }else if(this.sTop>this.sHeight && this.sTop<(this.sHeight*2) && scroll>0){
      //   window.scrollTo(0, (this.sHeight)*2);
      //   // console.log(1,'dowm')
      // }else if(this.sTop>(this.sHeight) &&this.sTop<(this.sHeight*2) && scroll<0){
      //   window.scrollTo(0, this.sHeight);
      // }else if(this.sTop>(this.sHeight*2) && scroll<0){
      //   // window.scrollTo(0, this.sHeight*2);
      // }
      // this.sTop=this.sHeight
      // console.log(1);
    },
    handleClientHeight: function () {
      this.$nextTick(() => {});
    },
  },
  //页面注销滚动事件
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
#Home {
  /* height: 2250px; */
  background-color: #eee;
  font-family: Arial, Helvetica, sans-serif;
}
.balck {
  background-color: gray;
}
.white {
  background-color: #eee;
}
#Home .home-container1 {
  height: var(--hc2height);
}
#Home .home-container1 h1 span {
  display: inline-block;
  overflow: hidden;
}
#Home .home-container1 h1 span i {
  font-style: normal;
  position: relative;
  top: 7rem;
  animation: 1s swift-up ease-in-out forwards;
}
@keyframes swift-up {
  to {
    top: 0rem;
  }
}
#Home .home-container1 .laji {
  height: 300px;
  /* background-color: #eee; */
}
#Home .home-container1 div:nth-child(2) {
  height: var(--hc1height);
  /* background-color: #eee; */
}
#Home .home-container1 div:nth-child(2) h1 {
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 68vh;
  flex-direction: column;
  text-align: right;
}
#Home .home-container1 div:nth-child(2) h1 span:nth-child(2) {
  position: relative;
  left: -130px;
}
#Home .home-container1 div:nth-child(2) h1 span:nth-child(3) {
  position: relative;
  left: -120px;
}
#Home .home-container1 div:nth-child(2) h1 span:nth-child(4) {
  position: relative;
  left: -87px;
  /* transform: translateX(10px); */
}
#Home .home-container2 {
  position: relative;
  height: var(--hc2height);
  background-color: #eee;
}
#Home .home-container3 {
  height: var(--hc2height);
  background-color: cadetblue;
}
.leftMenu {
  background-color: rgba(160, 255, 191, 0.5);
  /* opacity: 0.3; */
  width: 150px;
  height: 600px;
  position: fixed;
  left: 100px;
  top: 100px;
}
.MenuTable {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.MenuTable a {
  color: black;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
}
</style>