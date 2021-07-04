<template>
  <div >
    <div class="nn"></div>
    <ul class="slides" :class="[(this.$store.isDaytime)?'white':'balck']">
      <input type="radio" id="control-1" name="control" checked />
      <input type="radio" id="control-2" name="control" />
      <input type="radio" id="control-3" name="control" />
      <input type="radio" id="control-4" name="control" />
      <input type="radio" id="control-5" name="control" />
      <input type="radio" id="control-6" name="control" />

      <!--  Left/Right Button  -->
      <div class="navigator slide-1">
        <label for="control-3">
          <i class="fas fa-chevron-left"></i>
        </label>
        <label for="control-2">
          <i class="fas fa-chevron-right"></i>
        </label>
      </div>

      <div class="navigator slide-2">
        <label for="control-1">
          <i class="fas fa-chevron-left"></i>
        </label>
        <label for="control-3">
          <i class="fas fa-chevron-right"></i>
        </label>
      </div>

      <div class="navigator slide-3">
        <label for="control-2">
          <i class="fas fa-chevron-left"></i>
        </label>
        <label for="control-1">
          <i class="fas fa-chevron-right"></i>
        </label>
      </div>
      <div class="navigator slide-4">
        <label for="control-2">
          <i class="fas fa-chevron-left"></i>
        </label>
        <label for="control-1">
          <i class="fas fa-chevron-right"></i>
        </label>
      </div>
      <div class="navigator slide-5">
        <label for="control-2">
          <i class="fas fa-chevron-left"></i>
        </label>
        <label for="control-1">
          <i class="fas fa-chevron-right"></i>
        </label>
      </div>
      <div class="navigator slide-6">
        <label for="control-2">
          <i class="fas fa-chevron-left"></i>
        </label>
        <label for="control-1">
          <i class="fas fa-chevron-right"></i>
        </label>
      </div>
      <!--  /Left/Right Button  -->

      <li class="slide">
        <span @mouseover="handleOver" @click="handleToweb">影视剪辑</span>
        <div :style="{ '--deg': sRandom }" class="liimg">
          <img :src="imgsrc2" />
        </div>
      </li>
      <li class="slide">
        <span @mouseover="handleOver"  @click="handleToyshq">影视包装</span>
        <div :style="{ '--deg': sRandom }" class="liimg"><img :src="imgsrc1" /></div>
      </li>
      <li class="slide">
        <span @mouseover="handleOver" @click="handleTounity">unity游戏引擎</span>
        <div :style="{ '--deg': sRandom }" class="liimg"><img :src="imgsrc3" /></div>
      </li>
      <li class="slide">
        <span @mouseover="handleOver" @click="handleTomaya">maya三维建模</span>
        <div :style="{ '--deg': sRandom }" class="liimg"><img :src="imgsrc4" /></div>
      </li>
      <li class="slide">
        <span @mouseover="handleOver"  @click="handleTostyy">视听语言</span>
        <div :style="{ '--deg': sRandom }" class="liimg1"><img :src="imgsrc5" /></div>
      </li>
      <li class="slide">
        <span @mouseover="handleOver"  @click="handleToandroid">Android</span>
        <div :style="{ '--deg': sRandom }" class="liimg1"><img :src="imgsrc6" /></div>
      </li>

      <div class="controls-visible">
        <label for="control-1"></label><br />
        <label for="control-2"></label><br />
        <label for="control-3"></label><br />
        <label for="control-4"></label><br />
        <label for="control-5"></label><br />
        <label for="control-6"></label><br />
      </div>
    </ul>
    <div class="lifooter">
      <h1>kenzo·keen</h1>
      <p>this made from hi</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // sOp:1,
      sRandom: 0,
      imgsrc1: require("@/assets/c4d/a44.jpg"),
      imgsrc2: require("@/assets/yingshi/a1.jpg"),
      imgsrc3: require("@/assets/unity/a1.jpg"),
      imgsrc4: require("@/assets/maya/a1.jpg"),
      imgsrc5: require("@/assets/styy/a1.jpg"),
      imgsrc6: require("@/assets/android/a1.jpg"),
    };
  },
  methods: {
    handleOver: function (e) {
      e = e || window.event;
      var liimg = document.getElementsByClassName("liimg");
      this.sRandom = Math.floor(20 - Math.random() * 46 + 1) + "deg";
      console.log(this.$store.isDaytime);
      // console.log(this.sRandom);
      // liimg.style.transform='rotateZ(' + this.sRandom + ')'
    },
    handleToweb() {
      this.$router.push("/lessondetail");
    },
    handleToyshq() {
      this.$router.push("/lessondetailyshq");
    },
    handleTounity() {
      this.$router.push("/lessondetailunity");
    },
    handleTomaya() {
      this.$router.push("/lessondetailmaya");
    },
    handleTostyy() {
      this.$router.push("/lessondetailstyy");
    },
    handleToandroid() {
      this.$router.push("/lessondetailandroid");
    }
  },
};
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
/* .nn{
    width: 100%;
    height: 300px;
} */
.balck{
  background-color: gray;
}
.white{
  background-color: #eee;
}
ul.slides {
  position: relative;
  width: 100%;
  height: 100vh;
  list-style: none;
  margin: 0;
  padding: 0;
  /* background-color: #eee; */
  overflow: hidden;
}

li.slide {
  margin: 0;
  padding: 0;
  width: inherit;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  font-size: 120px;
  color: #000;
  transition: 0.5s transform ease-in-out;
}
.lifooter {
  background-color: rgba(70, 69, 71, 0.199);
  height: 100px;
  width: 100%;
  /* position: relative; */
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 10vh;
}
span {
  padding: 0 15px;
  position: relative;
  left: -20rem;
  /* display: block; */
}
/* span~.liimg img{
  opacity: var(--op);
} */

span::before {
  transform: scaleX(0);
  transform-origin: bottom right;
}

span:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

span::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  inset: 0 0 0 0;
  background: hsl(200 100% 80%);
  z-index: -1;
  transition: transform 0.3s ease;
}
.liimg {
  /* background-color: aquamarine; */
  width: 450px;
  height: 300px;
  position: absolute;
  right: 20%;
  opacity: 0;
  transition: 0.2s all ease-in;
}
.liimg1 {
  /* background-color: aquamarine; */
  width: 300px;
  height: 420px;
  position: absolute;
  right: 20%;
  opacity: 0;
  transition: 0.2s all ease-in;
}
img{
  width: 100%;
  height: 100%;
}
span:hover ~ .liimg {
  animation: 0.7s imgxz ease-in-out;
  opacity: 1;
  transform: rotateZ(var(--deg));
}
span:hover ~ .liimg img {
  display: block;
}
span:hover ~ .liimg1 {
  animation: 0.7s imgxz ease-in-out;
  opacity: 1;
  transform: rotateZ(var(--deg));
}
span:hover ~ .liimg1 img {
  display: block;
}
@keyframes imgxz {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
a {
  text-decoration: none;
}

.slide:nth-of-type(1) {
  /* background-color: #f2e205; */
  top: 50%;
}

.slide:nth-of-type(2) {
  /* background-color: #f25c05; */
  top: 130%;
}

.slide:nth-of-type(3) {
  /* background-color: #495f8c; */
  top: 210%;
}
.slide:nth-of-type(4) {
  /* background-color: #4b8c49; */
  top: 290%;
}
.slide:nth-of-type(5) {
  /* background-color: #4b8c49; */
  top: 370%;
}
.slide:nth-of-type(6) {
  /* background-color: #4b8c49; */
  top: 450%;
}

input[type="radio"] {
  position: relative;
  z-index: 100;
  display: none;
}

.controls-visible {
  position: absolute;
  width: 50px;
  left: 12px;
  top: 50%;
  /* text-align: center; */
}

.controls-visible label {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 3px;
  border: 2px solid #fff;
}

.slides
  input[type="radio"]:nth-of-type(1):checked
  ~ .controls-visible
  label:nth-of-type(1) {
  background-color: #333;
}

.slides
  input[type="radio"]:nth-of-type(2):checked
  ~ .controls-visible
  label:nth-of-type(2) {
  background-color: #333;
}

.slides
  input[type="radio"]:nth-of-type(3):checked
  ~ .controls-visible
  label:nth-of-type(3) {
  background-color: #333;
}
.slides
  input[type="radio"]:nth-of-type(4):checked
  ~ .controls-visible
  label:nth-of-type(4) {
  background-color: #333;
}
.slides
  input[type="radio"]:nth-of-type(5):checked
  ~ .controls-visible
  label:nth-of-type(5) {
  background-color: #333;
}
.slides
  input[type="radio"]:nth-of-type(6):checked
  ~ .controls-visible
  label:nth-of-type(6) {
  background-color: #333;
}

.slides input[type="radio"]:nth-of-type(1):checked ~ .slide {
  transform: translatey(0%);
}

.slides input[type="radio"]:nth-of-type(2):checked ~ .slide {
  transform: translatey(-250%);
}

.slides input[type="radio"]:nth-of-type(3):checked ~ .slide {
  transform: translatey(-500%);
}
.slides input[type="radio"]:nth-of-type(4):checked ~ .slide {
  transform: translatey(-750%);
}
.slides input[type="radio"]:nth-of-type(5):checked ~ .slide {
  transform: translatey(-1000%);
}
.slides input[type="radio"]:nth-of-type(6):checked ~ .slide {
  transform: translatey(-1250%);
}

/* Left/Right Button Classes Below */

.navigator {
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  width: 100%;
  z-index: 100;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  display: none;
}

.navigator i {
  font-size: 32px;
  color: #333;
}

.slides input[type="radio"]:nth-of-type(1):checked ~ .navigator:nth-of-type(1) {
  display: flex;
}

.slides input[type="radio"]:nth-of-type(2):checked ~ .navigator:nth-of-type(2) {
  display: flex;
}

.slides input[type="radio"]:nth-of-type(3):checked ~ .navigator:nth-of-type(3) {
  display: flex;
}
.slides input[type="radio"]:nth-of-type(4):checked ~ .navigator:nth-of-type(4) {
  display: flex;
}
</style>