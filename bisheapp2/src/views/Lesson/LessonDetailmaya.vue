<template>
  <div>
    <Header />
    <div class="lessondetail">
      <div
        class="Ldetail"
        :class="[this.$store.isDaytime ? 'white' : 'balck']"
      >
        <h1 class="hh"><span><i>M</i></span>
            <span><i>a</i></span>
            <span><i>y</i></span>
            <span><i>a</i></span></h1>
        <div class="Ldetail-container1"><img :src="imgsrc1" alt=""></div>
      </div>
      <hr />
      <div class="Ldetail" :class="[(this.$store.isDaytime)?'white':'balck']">
        <div class="Ldetail-container">
          <div class="video">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsline="false"
              :options="playerOptions"
            ></video-player>
            <p>{{ "视频" }}</p>
          </div>
        </div>
      </div>
      <hr />
      <div
        class="Ldetail"
        :class="[(this.$store.isDaytime)?'white':'balck']"
      >
        <div class="Ldetail-container"><img :src="imgsrc2" alt=""></div>
      </div>
      <hr />
      <div
        class="Ldetail"
        :class="[(this.$store.isDaytime)?'white':'balck']"
      >
        <div class="Ldetail-container"><img :src="imgsrc3" alt=""></div>
      </div>
      <hr />
      <!-- <div
        class="Ldetail"
        :class="[(this.$store.isDaytime)?'white':'balck']"
      >
        <div class="Ldetail-container"></div>
      </div>
      <hr /> -->
      <div
        class="LDfooter"
        :class="[(this.$store.isDaytime)?'white':'balck']"
      >
        <a class="a-text" @click='handletonext'>
          <span>Next Subject</span><br />
          <span>→</span>
        </a>
        <a class="a-img" @click='handletonext'>
          <div class="aimg"><img :src="imgsrc4" alt=""></div>
          <span><h1>视听语言</h1></span>
        </a>
        <Prettyfooter />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Prettyfooter from "@/components/footerBar/Prettyfooter";
export default {
  components: {
    Header,
    Prettyfooter,
  },
  data() {
    return {
      imgsrc1:require('@/assets/maya/a1.jpg'),
      imgsrc2:require('@/assets/maya/a2.jpg'),
      imgsrc3:require('@/assets/maya/a3.jpg'),
      imgsrc4:require('@/assets/styy/a1.jpg'),
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: require("@/assets/maya/sp.mp4"), // url地址
          },
        ],
        poster: "", // 你的封面地址
        width: document.documentElement.clientWidth, // 播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, // 全屏按钮
        },
      },
    };
  },
  methods:{
    handletonext(){
      this.$router.push('/lessondetailstyy')
    }
  }
};
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
.balck {
  background-color: gray;
}
.white {
  background-color: #eee;
}
.video-js .vjs-icon-placeholder {
  width: 40%;
  height: 40%;
  display: block;
}
.video {
  padding: 50px 0;
}
.lessondetail {
  width: 100%;
  height: 300px;
}
.Ldetail {
  position: relative;
  width: 100%;
  height: 900px;
  /* background-color: cornsilk; */
}
.Ldetail h1 {
  z-index: 30;
  font-size: 60px;
  position: absolute;
  left: 0;
  top: 0;
  margin: 20% 20%;
}
.Ldetail .Ldetail-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 90rem;
  height: 60rem;
  /* background-color: cyan; */
}
.Ldetail .Ldetail-container1 {
  position: absolute;
  top: 0;
  left: -240px;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 30%;
  height: 70%;
  /* background-color: cyan; */
}
.LDfooter {
  width: 100%;
  height: 100vh;
  /* background-color: beige; */
  position: relative;
  bottom: 0;
}
a {
  text-decoration: none;
  color: #000;
}
.a-text {
  position: absolute;
  right: 20rem;
  bottom: 35rem;
  display: flex;
  /* line-height: 50px; */
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100px;
  height: 50px;
  background-color: rgba(245, 245, 220, 0.055);
  z-index: 100;
}
.a-img {
  position: absolute;
  bottom: 0;
  width: 70%;
  height: 600px;
  /* background-color: beige; */
  /* overflow: hidden; */
}
.a-img h1 {
  font-size: 60px;
}
.a-img span {
  position: absolute;
  top: 20vh;
  left: 0;
  padding: 0 40%;
}
.aimg {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 50%;
  width: 45vh;
  height: 80%;
  background-color: cadetblue;
}
.hh {
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
 .hh span i {
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
 h1 span:nth-of-type(1) i {
  animation-delay: 0s;
}
 h1 span:nth-of-type(2) i {
  animation-delay: 0.1s;
}
 h1 span:nth-of-type(3) i {
  animation-delay: 0.2s;
}
 h1 span:nth-of-type(4) i {
  animation-delay: 0.3s;
}
 h1 span:nth-of-type(5) i {
  animation-delay: 0.4s;
}
 h1 span:nth-of-type(6) i {
  animation-delay: 0.5s;
}
 h1 span:nth-of-type(7) i {
  animation-delay: 0.6s;
}
 h1 span:nth-of-type(8) i {
  animation-delay: 0.7s;
}
 h1 span:nth-of-type(9) i {
  animation-delay: 0.8s;
}
 h1 span:nth-of-type(10) i {
  animation-delay: 0.9s;
}
 h1 span:nth-of-type(11) i {
  animation-delay: 1s;
}
 h1 span:nth-of-type(12) i {
  animation-delay: 1.1s;
}
 h1 span:nth-of-type(1) i {
  animation-delay: 0s;
}
</style>