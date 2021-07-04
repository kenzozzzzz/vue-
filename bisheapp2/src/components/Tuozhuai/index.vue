<template>
  <div id="Tuozhuai">
    <div
      class="container"
      :class="[(this.$store.isDaytime)?'white':'balck']"
    >
      <ul>
        <!-- <li class="drag" :style="{'--left':mleft}">
                    <h1>
                        <span><i>C</i></span>
                        <span><i>4</i></span>
                        <span><i>D</i></span>
                        <span><i> </i></span>
                        <span><i>c</i></span>
                        <span><i>a</i></span>
                        <span><i>m</i></span>
                        <span><i>e</i></span>
                        <span><i>r</i></span>
                        <span><i>a</i></span>
                        </h1>
                    <div class="sText">
                        <span><i>~1</i></span>
                        <span><i>HomeWork</i></span>
                        <span><i>Lessent</i></span>
                    </div>
                    <a href="#"></a >
                    <div ref="tupian" class="tu" :style="{'--tScale':tscale}"
                    @mousedown="handleDown" 
                    @mouseup="handleUp"
                    @mousemove="handleMove"
                    @mouseover="handleOver" @mouseout="handleOut"
                    @touchstart="touchstart"
                    ></div>
                     
                </li>
                <li class="drag" :style="{'--left2':m2left}">
                    <h1>C4D creame</h1>
                    <div class="sText">
                        <span>~2</span>
                        <span>HomeWork</span>
                        <span>Lessent</span>
                    </div>
                    <a href="#"></a >
                    <div ref="tupian" class="tu" 
                    
                    ></div>
                </li>
                <li class="drag" :style="{'--left3':m3left}">
                    <h1>C4D creame</h1>
                    <div class="sText">
                        <span>~3</span>
                        <span>HomeWork</span>
                        <span>Lessent</span>
                    </div>
                    <a href="#"></a >
                    <div ref="tupian" class="tu" 
                    ></div>
                </li>
                <li class="drag" :style="{'--left4':m4left}">
                    <h1>C4D creame</h1>
                    <div class="sText">
                        <span>~4</span>
                        <span>HomeWork</span>
                        <span>Lessent</span>
                    </div>
                    <a href="#"></a >
                    <div ref="tupian" class="tu" 
                    ></div>
                </li>
                <li class="drag" :style="{'--left5':m5left}">
                    <h1>C4D creame</h1>
                    <div class="sText">
                        <span>~5</span>
                        <span>HomeWork</span>
                        <span>Lessent</span>
                    </div>
                    <a href="#"></a >
                    <div ref="tupian" class="tu" 
                    ></div>
                </li> -->
        <li class="drag1" :style="{ '--left': mleft }">
          <h1 @click='handleTopd1'>
            <span><i>O</i></span>
            <span><i>i</i></span>
            <span><i>l</i></span>
            <span><i> </i></span>
            <span><i>P</i></span>
            <span><i>a</i></span>
            <span><i>i</i></span>
            <span><i>n</i></span>
            <span><i>t</i></span>
            <span><i>i</i></span>
            <span><i>n</i></span>
            <span><i>g</i></span>
          </h1>
          <div class="sText">
            <span><i>~1</i></span>
            <span><i>HomeWork</i></span>
            <span><i>Lessent</i></span>
          </div>
          <a href="#"></a>
          <div
            ref="tupian"
            class="tu tu1"
            :style="{ '--tScale1': tscale1 }"
            @mousedown="handleDown"
            @mouseup="handleUp"
            @mousemove="handleMove"
            @mouseover="handleOver"
            @mouseout="handleOut"
            @touchstart="touchstart"
          ><img :src='imgsrc1' alt=""></div>
        </li>
        <li class="drag" :style="{ '--left2': m2left }">
          <h1 @click='handleTopd2'><span><i>E</i></span>
            <span><i>l</i></span>
            <span><i>k</i></span>
            <span><i> </i></span>
            <span><i>F</i></span>
            <span><i>o</i></span>
            <span><i>r</i></span>
            <span><i>e</i></span>
            <span><i>s</i></span>
            <span><i>t</i></span></h1>
          <div class="sText">
            <span>~2</span>
            <span>HomeWork</span>
            <span>Lessent</span>
          </div>
          <a href="#"></a>
          <div
            ref="tupian2"
            class="tu tu2"
            :style="{ '--tScale2': tscale2 }"
            @mousedown="handleDown2"
            @mouseup="handleUp"
            @mousemove="handleMove2"
            @mouseover="handleOver2"
            @mouseout="handleOut2"
            @touchstart="touchstart"
          ><img :src='imgsrc2'></div>
        </li>
        <li class="drag" :style="{ '--left3': m3left }">
          <h1 @click='handleTopd3'>
            <span><i>L</i></span>
            <span><i>i</i></span>
            <span><i>c</i></span>
            <span><i>e</i></span>
            <span><i>n</i></span>
            <span><i>s</i></span>
            <span><i>e</i></span>
            <span><i>P</i></span>
            <span><i>l</i></span>
            <span><i>a</i></span>
            <span><i>t</i></span>
            <span><i>e</i></span>
          </h1>
          <div class="sText">
            <span>~3</span>
            <span>HomeWork</span>
            <span>Lessent</span>
          </div>
          <a href="#"></a>
          <div
            ref="tupian3"
            class="tu tu3"
            :style="{ '--tScale3': tscale3 }"
            @mousedown="handleDown3"
            @mouseup="handleUp"
            @mousemove="handleMove3"
            @mouseover="handleOver3"
            @mouseout="handleOut3"
            @touchstart="touchstart"
          ><img :src='imgsrc3'></div>
        </li>
        <li class="drag" :style="{ '--left4': m4left }">
          <h1 @click='handleTopd4'>
            <span><i>T</i></span>
            <span><i>h</i></span>
            <span><i>e</i></span>
            <span><i> </i></span>
            <span><i>R</i></span>
            <span><i>e</i></span>
            <span><i>e</i></span>
            <span><i>d</i></span>
            <span><i>s</i></span>
          </h1>
          <div class="sText">
            <span>~4</span>
            <span>HomeWork</span>
            <span>Lessent</span>
          </div>
          <a href="#"></a>
          <div
            ref="tupian4"
            class="tu tu4"
            :style="{ '--tScale4': tscale4 }"
            @mousedown="handleDown4"
            @mouseup="handleUp"
            @mousemove="handleMove4"
            @mouseover="handleOver4"
            @mouseout="handleOut4"
            @touchstart="touchstart"
          ><img :src='imgsrc4'></div>
        </li>
        <li class="drag" :style="{ '--left5': m5left }">
          <h1 @click='handleTopd5'><span><i>A</i></span>
            <span><i>u</i></span>
            <span><i>t</i></span>
            <span><i>m</i></span>
            <span><i>n</i></span>
            <span><i> </i></span>
            <span><i>o</i></span>
            <span><i>u</i></span>
            <span><i>t</i></span>
            <span><i>i</i></span>
            <span><i>n</i></span>
            <span><i>g</i></span>
            </h1>
          <div class="sText">
            <span>~5</span>
            <span>HomeWork</span>
            <span>Lessent</span>
          </div>
          <a href="#"></a>
          <div
            ref="tupian5"
            class="tu tu5"
            :style="{ '--tScale5': tscale5 }"
            @mousedown="handleDown5"
            @mouseup="handleUp"
            @mousemove="handleMove5"
            @mouseover="handleOver5"
            @mouseout="handleOut5"
            @touchstart="touchstart"
          ><img :src='imgsrc5'></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  // name: "Dragtests",
  data() {
    return {
      dragFlag: false,
      sHeight: 0,
      tscale1: 1,
      tscale2: 1,
      tscale3: 1,
      tscale4: 1,
      tscale5: 1,
      mouseLeft: 0,
      mouseTop: 0,
      mouseMoveLeft: 0,
      picLeft: 0,
      a: 800,
      mleft: "0px",
      m2left: "800px",
      m3left: "1600px",
      m4left: "2400px",
      m5left: "3200px",
      imgsrc1:require('../../assets/photo/a1.jpg'),
      imgsrc2:require('../../assets/photo/b1.jpg'),
      imgsrc3:require('../../assets/photo/c1.jpg'),
      imgsrc4:require('../../assets/photo/d1.jpg'),
      imgsrc5:require('../../assets/photo/e1.jpg'),

    };
  },
  props: ["psMsg"],
  mounted() {
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    this.sHeight = h; //减去页面上固定高度height
  },
  methods: {
    handleDown: function (e) {
      this.dragFlag = true;
      console.log("down1");
    },
    handleMove: function (e) {
      if (!this.dragFlag) {
        return;
      }
      e = e || window.event;
      var x = e.clientX - 950;
      var y = this.a + x;
      var z = this.a * 2 + x;
      var v = this.a * 3 + x;
      var b = this.a * 4 + x;
      this.mleft = `${x}px`;
      this.m2left = `${y}px`;
      this.m3left = `${z}px`;
      this.m4left = `${v}px`;
      this.m5left = `${b}px`;
    },
    handleUp: function (event) {
      this.dragFlag = false;
      // console.log('mouseup');
    },
    handleOver: function (event) {
      this.tscale1 = 1.5; //图片缩放
      console.log("mouseover1");
    },
    handleOut: function (event) {
      this.tscale1 = 1;
      console.log("mouseout1");
    },

    handleDown2: function (e) {
      this.dragFlag = true;
      console.log("down2");
    },
    handleMove2: function (e) {
      if (!this.dragFlag) {
        return;
      }
      e = e || window.event;
      var x = e.clientX - 930 - 810;
      var y = this.a + x;
      var z = this.a * 2 + x;
      var v = this.a * 3 + x;
      var b = this.a * 4 + x;
      this.mleft = `${x}px`;
      this.m2left = `${y}px`;
      this.m3left = `${z}px`;
      this.m4left = `${v}px`;
      this.m5left = `${b}px`;
    },
    handleOver2: function (event) {
      this.tscale2 = 1.5; //图片缩放
    },
    handleOut2: function (event) {
      this.tscale2 = 1;
    },
    handleDown3: function (e) {
      this.dragFlag = true;
    },
    handleMove3: function (e) {
      if (!this.dragFlag) {
        return;
      }
      e = e || window.event;
      var x = e.clientX - 930 - 810 - 800;
      var y = this.a + x;
      var z = this.a * 2 + x;
      var v = this.a * 3 + x;
      var b = this.a * 4 + x;
      this.mleft = `${x}px`;
      this.m2left = `${y}px`;
      this.m3left = `${z}px`;
      this.m4left = `${v}px`;
      this.m5left = `${b}px`;
    },
    handleOver3: function (event) {
      this.tscale3 = 1.5; //图片缩放
    },
    handleOut3: function (event) {
      this.tscale3 = 1;
    },
    handleDown4: function (e) {
      this.dragFlag = true;
    },
    handleMove4: function (e) {
      if (!this.dragFlag) {
        return;
      }
      e = e || window.event;
      var x = e.clientX - 930 - 810 - 1600;
      var y = this.a + x;
      var z = this.a * 2 + x;
      var v = this.a * 3 + x;
      var b = this.a * 4 + x;
      this.mleft = `${x}px`;
      this.m2left = `${y}px`;
      this.m3left = `${z}px`;
      this.m4left = `${v}px`;
      this.m5left = `${b}px`;
    },
    handleOver4: function (event) {
      this.tscale4 = 1.5; //图片缩放
    },
    handleOut4: function (event) {
      this.tscale4 = 1;
    },
    handleDown5: function (e) {
      this.dragFlag = true;
    },
    handleMove5: function (e) {
      if (!this.dragFlag) {
        return;
      }
      e = e || window.event;
      var x = e.clientX - 930 - 810 - 2400;
      var y = this.a + x;
      var z = this.a * 2 + x;
      var v = this.a * 3 + x;
      var b = this.a * 4 + x;
      this.mleft = `${x}px`;
      this.m2left = `${y}px`;
      this.m3left = `${z}px`;
      this.m4left = `${v}px`;
      this.m5left = `${b}px`;
    },
    handleOver5: function (event) {
      this.tscale5 = 1.5; //图片缩放
    },
    handleOut5: function (event) {
      this.tscale5 = 1;
    },
    touchstart(e) {
      console.log("touchstart");
      var c = e.targetTouches[0].clientX;
      // console.log(c);
    },
    handleTopd1(){
      this.$router.push('/photodetail')
    },
    handleTopd2(){
      this.$router.push('/photodetail2')
    },
    handleTopd3(){
      this.$router.push('/photodetail3')
    },
    handleTopd4(){
      this.$router.push('/photodetail4')
    },
    handleTopd5(){
      this.$router.push('/photodetail5')
    },
  },
};
</script>
<style scoped>
.balck {
  background-color: gray;
}
.white {
  background-color: #eee;
}
.container {
  width: 100%;
  height: 800px;
  /* background-color: #eee; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 50vh; */
  overflow: hidden;
  position: relative;
}
.container ul {
  position: absolute;
  width: 60%;
  height: 40vh;
  margin: 0;
  padding: 0;
  bottom: 10%;
  /* padding-top: 90vh; */
  /* overflow: hidden; */
}
.container li {
  margin: 0;
  padding-top: 200;
  list-style: none;
  color: #000;
  font-size: 20px;
  float: left;
  width: 800px;
  height: inherit;
  position: absolute;
  top: 0;
  left: var(--left);
}
li .tu {
  width: 200px;
  height: 300px;
  background-color: black;
  position: relative;
  left: 400px;
  top: 25px;
  /* right: 0; */
  /* margin: 0; */
}
img{
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
}
.tu1 {
  margin-right: 0;
  transform: scale(var(--tScale1));
  transition: transform 1s ease-in-out;
}
.tu2 {
  margin-right: 0;
  transform: scale(var(--tScale2));
  transition: transform 1s ease-in-out;
}
.tu3 {
  margin-right: 0;
  transform: scale(var(--tScale3));
  transition: transform 1s ease-in-out;
}
.tu4 {
  margin-right: 0;
  transform: scale(var(--tScale4));
  transition: transform 1s ease-in-out;
}
.tu5 {
  margin-right: 0;
  transform: scale(var(--tScale5));
  transition: transform 1s ease-in-out;
}
/* li .tu:hover{
        transform: scale(1.5);
        transition: transform 1s ease-in-out;
    } */
a {
  text-decoration: none;
}
li:nth-of-type(1) {
  /* background-color: khaki; */
  left: var(--left);
}
li:nth-of-type(2) {
  /* background-color: rgb(44, 41, 9); */
  left: var(--left2);
}
li:nth-of-type(3) {
  /* background-color: rgb(34, 175, 104); */
  left: var(--left3);
}
li:nth-of-type(4) {
  /* background-color: rgb(163, 45, 173); */
  left: var(--left4);
}
li:nth-of-type(5) {
  /* background-color: rgb(196, 54, 43); */
  left: var(--left5);
}
li h1 {
  position: absolute;
  color: rgb(158, 62, 62);
  font-size: 80px;
  z-index: 100;
  left: 50px;
  top: 200px;
  display: inline-block;
  overflow: hidden;
  width: 600px;
}
li h1 span i {
  font-style: normal;
  letter-spacing: -15px;
  position: relative;
  top: 7rem;
  animation: 1s swift-up ease-in-out forwards;
}
@keyframes swift-up {
  to {
    top: 0rem;
  }
}
li h1 span:nth-of-type(1) i {
  animation-delay: 0s;
}
li h1 span:nth-of-type(2) i {
  animation-delay: 0.1s;
}
li h1 span:nth-of-type(3) i {
  animation-delay: 0.2s;
}
li h1 span:nth-of-type(4) i {
  animation-delay: 0.3s;
}
li h1 span:nth-of-type(5) i {
  animation-delay: 0.4s;
}
li h1 span:nth-of-type(6) i {
  animation-delay: 0.5s;
}
li h1 span:nth-of-type(7) i {
  animation-delay: 0.6s;
}
li h1 span:nth-of-type(8) i {
  animation-delay: 0.7s;
}
li h1 span:nth-of-type(9) i {
  animation-delay: 0.8s;
}
li h1 span:nth-of-type(10) i {
  animation-delay: 0.9s;
}
li h1 span:nth-of-type(11) i {
  animation-delay: 1s;
}
li h1 span:nth-of-type(12) i {
  animation-delay: 1.1s;
}
li h1 span:nth-of-type(1) i {
  animation-delay: 0s;
}
li .sText {
  width: 100px;
  /* margin: 10px; */
  position: absolute;
  color: rgb(179, 36, 36);
  font-size: 20px;
  z-index: 100;
  left: 550px;
  top: 100px;
}
li .sText span {
  margin-top: 10px 10px;
  display: inline-block;
  overflow: hidden;
}
li .sText span i {
  /* font-style: normal; */
  position: relative;
  top: 2rem;
  animation: 1s swift-up ease-in-out forwards;
  animation-delay: 1.3s;
}
</style>
