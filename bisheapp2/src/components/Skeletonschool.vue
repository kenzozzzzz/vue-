<template>
  <div
    id="Skeleton"
    @mousewheel="preventWheel"
    :style="{ '--bodywidth': bodyWidth }"
    :class="[(this.$store.isDaytime)?'white':'balck']"
  >
    <!-- <PhoneHeader class="pheader"/> -->
    <div
      ref="card1"
      @myevent2="handleEvent2()"
      class="card"
      :style="{ '--cardTop': cardTop }"
      @mousedown="handleDown"
      :class="{ active: isActive == 1 && isShow }"
      @click="handleClick1($event)"
    >
      <img src="https://source.unsplash.com/900x600/?nature,water,4" />
      <h3 :class="[(this.$store.isDaytime)?'white':'balck1']">WEB前端</h3>
      <div class="content-wrapper">
        <div
          class="content"
          :class="[(this.$store.isDaytime)?'white':'balck1']"
          :style="{ '--winHeight': windowHeight }"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            officia sit illo corporis commodi id recusandae, explicabo libero
            officiis ipsa voluptas hic ex aut! Illum consequatur sint voluptates
            ab ex.
          </p>
          <p>
            Ex ab accusantium perspiciatis nostrum facilis impedit, doloremque
            inventore, facere quas fuga numquam placeat exercitationem! Fugit
            placeat harum facere dolore! Neque veritatis exercitationem fuga hic
            incidunt sunt inventore possimus aliquam!
          </p>
          <p>
            Earum reiciendis veritatis blanditiis odit natus aliquam perferendis
            nisi fugiat aut a voluptatum dolores, debitis facere quisquam harum,
            commodi nulla eos id itaque consequuntur animi repellendus soluta
            maiores asperiores! Tempora.
          </p>
          <p>
            Error, neque sed! Rerum inventore tempore quibusdam animi quam
            numquam eum at! Debitis pariatur modi veniam deleniti, ipsa
            quibusdam atque odit. Odit aspernatur quibusdam provident neque
            dignissimos consectetur at non!
          </p>
          <p>
            Facilis odio autem nam debitis placeat qui eos. Magnam sint libero
            illo deleniti animi veritatis a consequatur quaerat quos at minus
            dolores accusantium, ullam corrupti explicabo asperiores optio
            mollitia beatae.
          </p>
        </div>
      </div>
    </div>
    <div
      ref="card2"
      @myevent2="handleEvent2()"
      class="card"
      :style="{ '--cardTop': cardTop }"
      @mousedown="handleDown"
      :class="{ active: isActive == 2 && isShow }"
      @click="handleClick2($event)"
    >
      <img src="https://source.unsplash.com/900x600/?nature,water,1" />
      <h3 :class="[(this.$store.isDaytime)?'white':'balck1']">影视包装</h3>
      <div class="content-wrapper">
        <div class="content"  :class="[(this.$store.isDaytime)?'white':'balck1']" :style="{ '--winHeight': windowHeight }">
          <p>
           现在airpods的流行，让大众都乐于掏钱购买，可是大家都了解了它的特点了嘛？我们将围绕它一个特点来做一个广告

          </p>
          <div class="video">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsline="false"
              :options="playerOptions"
            ></video-player>
            <p>{{ "airpods" }}</p>
          </div>
          <p>
            这次实验，组员们分工明确，进度顺利，通过这次实验让我们都了解到了做一个广告是十分有难度的，不足之处在于建模还不够精致，十五秒内并没有表达出想要表达的东西。
          </p>
        </div>
      </div>
    </div>
    <div
      ref="card3"
      @myevent2="handleEvent2()"
      class="card"
      :style="{ '--cardTop': cardTop }"
      @mousedown="handleDown"
      :class="{ active: isActive == 3 && isShow }"
      @click="handleClick3($event)"
    >
      <img src="https://source.unsplash.com/900x600/?nature,water,2" />
      <h3 :class="[(this.$store.isDaytime)?'white':'balck1']">Unity游戏引擎</h3>
      <div class="content-wrapper">
        <div class="content" :class="[(this.$store.isDaytime)?'white':'balck1']" :style="{ '--winHeight': windowHeight }">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            officia sit illo corporis commodi id recusandae, explicabo libero
            officiis ipsa voluptas hic ex aut! Illum consequatur sint voluptates
            ab ex.
          </p>
          <p>
            Ex ab accusantium perspiciatis nostrum facilis impedit, doloremque
            inventore, facere quas fuga numquam placeat exercitationem! Fugit
            placeat harum facere dolore! Neque veritatis exercitationem fuga hic
            incidunt sunt inventore possimus aliquam!
          </p>
          <p>
            Earum reiciendis veritatis blanditiis odit natus aliquam perferendis
            nisi fugiat aut a voluptatum dolores, debitis facere quisquam harum,
            commodi nulla eos id itaque consequuntur animi repellendus soluta
            maiores asperiores! Tempora.
          </p>
          <p>
            Error, neque sed! Rerum inventore tempore quibusdam animi quam
            numquam eum at! Debitis pariatur modi veniam deleniti, ipsa
            quibusdam atque odit. Odit aspernatur quibusdam provident neque
            dignissimos consectetur at non!
          </p>
          <p>
            Facilis odio autem nam debitis placeat qui eos. Magnam sint libero
            illo deleniti animi veritatis a consequatur quaerat quos at minus
            dolores accusantium, ullam corrupti explicabo asperiores optio
            mollitia beatae.
          </p>
        </div>
      </div>
    </div>
    <div
      ref="card4"
      @myevent2="handleEvent2()"
      class="card card4"
      :style="{ '--cardTop': cardTop }"
      @mousedown="handleDown"
      :class="{ active: isActive == 4 && isShow }"
      @click="handleClick4($event)"
    >
      <img src="https://source.unsplash.com/900x600/?nature,water,3" />
      <h3 :class="[(this.$store.isDaytime)?'white':'balck1']">MAYA三维建模</h3>
      <div class="content-wrapper">
        <div class="content" :class="[(this.$store.isDaytime)?'white':'balck1']" :style="{ '--winHeight': windowHeight }">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            officia sit illo corporis commodi id recusandae, explicabo libero
            officiis ipsa voluptas hic ex aut! Illum consequatur sint voluptates
            ab ex.
          </p>
          <p>
            Ex ab accusantium perspiciatis nostrum facilis impedit, doloremque
            inventore, facere quas fuga numquam placeat exercitationem! Fugit
            placeat harum facere dolore! Neque veritatis exercitationem fuga hic
            incidunt sunt inventore possimus aliquam!
          </p>
          <p>
            Earum reiciendis veritatis blanditiis odit natus aliquam perferendis
            nisi fugiat aut a voluptatum dolores, debitis facere quisquam harum,
            commodi nulla eos id itaque consequuntur animi repellendus soluta
            maiores asperiores! Tempora.
          </p>
          <p>
            Error, neque sed! Rerum inventore tempore quibusdam animi quam
            numquam eum at! Debitis pariatur modi veniam deleniti, ipsa
            quibusdam atque odit. Odit aspernatur quibusdam provident neque
            dignissimos consectetur at non!
          </p>
          <p>
            Facilis odio autem nam debitis placeat qui eos. Magnam sint libero
            illo deleniti animi veritatis a consequatur quaerat quos at minus
            dolores accusantium, ullam corrupti explicabo asperiores optio
            mollitia beatae.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneHeader from "@/components/Phone/PhoneHeader";
export default {
  data() {
    return {
      isActive: 0,
      isScroll: false,
      ScrollTop: 0,
      cardTop: "",
      windowHeight: "",
      imgheight: "",
      bodyWidth: "",
      isShow: false,
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
            src: require("@/assets/c4d/airpods.mp4"), // url地址
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
  components: {
    PhoneHeader,
  },
  mounted() {
    // 监听事件
    window.addEventListener("scroll", this.handleScroll, true);
    this.bodyWidth =
      document.getElementsByTagName("body")[0].clientWidth + "px";
  },
  methods: {
    handleEvent2() {
      this.isShow = !this.isShow;
    },
    handleClick1(e) {
      this.$store.state.isPhoneFooterShow = !this.$store.state
        .isPhoneFooterShow;
      this.$store.state.isPhoneHeaderShow = !this.$store.state
        .isPhoneHeaderShow;
      this.isActive = 1;
      this.isShow = !this.isShow;
      e = e || window.event;
      //获取页面滚动高度，给页面打开时的高度赋值
      var Top =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.pageYOffset;
      var scardTop = this.$refs.card1.offsetTop - Top;
      this.cardTop = scardTop * -1 + "px";
      console.log(this.cardTop);
      //阻止body页面滚动
      if (this.isShow) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      //放大倍数
      var ratiowidth = document.getElementsByTagName("body")[0].clientWidth;
      let ratio = ratiowidth / (ratiowidth * 0.835);
      var imgheight = document.getElementsByTagName("img")[0].offsetHeight;
      var h3height = document.getElementsByTagName("h3")[0].offsetHeight;
      var wheight =
        (document.documentElement.clientHeight -
          imgheight * ratio -
          h3height * ratio) /
        ratio;
      this.windowHeight = wheight + "px";
      // console.log('click',e);
      console.log(wheight);
    },
    handleClick2(e) {
      this.$store.state.isPhoneFooterShow = !this.$store.state
        .isPhoneFooterShow;
      this.$store.state.isPhoneHeaderShow = !this.$store.state
        .isPhoneHeaderShow;
      this.isActive = 2;
      this.isShow = !this.isShow;
      e = e || window.event;
      //获取页面滚动高度，给页面打开时的高度赋值
      var Top =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.pageYOffset;
      var scardTop = this.$refs.card2.offsetTop - Top;
      this.cardTop = scardTop * -1 + "px";
      // console.log(this.cardTop);
      //阻止body页面滚动
      if (this.isShow) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      //放大倍数
      var ratiowidth = document.getElementsByTagName("body")[0].clientWidth;
      let ratio = ratiowidth / (ratiowidth * 0.835);
      var imgheight = document.getElementsByTagName("img")[0].offsetHeight;
      var h3height = document.getElementsByTagName("h3")[0].offsetHeight;
      var wheight =
        (document.documentElement.clientHeight -
          imgheight * ratio -
          h3height * ratio) /
        ratio;
      this.windowHeight = wheight + "px";
    },
    handleClick3(e) {
      this.$store.state.isPhoneFooterShow = !this.$store.state
        .isPhoneFooterShow;
      this.$store.state.isPhoneHeaderShow = !this.$store.state
        .isPhoneHeaderShow;
      this.isActive = 3;
      this.isShow = !this.isShow;
      e = e || window.event;
      //获取页面滚动高度，给页面打开时的高度赋值
      var Top =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.pageYOffset;
      var scardTop = this.$refs.card3.offsetTop - Top;
      this.cardTop = scardTop * -1 + "px";
      // console.log(this.cardTop);
      //阻止body页面滚动
      if (this.isShow) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      //放大倍数
      var ratiowidth = document.getElementsByTagName("body")[0].clientWidth;
      let ratio = ratiowidth / (ratiowidth * 0.835);
      var imgheight = document.getElementsByTagName("img")[0].offsetHeight;
      var h3height = document.getElementsByTagName("h3")[0].offsetHeight;
      var wheight =
        (document.documentElement.clientHeight -
          imgheight * ratio -
          h3height * ratio) /
        ratio;
      this.windowHeight = wheight + "px";
      console.log(wheight);
    },
    handleClick4(e) {
      this.$store.state.isPhoneFooterShow = !this.$store.state
        .isPhoneFooterShow;
      this.$store.state.isPhoneHeaderShow = !this.$store.state
        .isPhoneHeaderShow;
      this.isActive = 4;
      this.isShow = !this.isShow;
      e = e || window.event;
      //获取页面滚动高度，给页面打开时的高度赋值
      var Top =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.pageYOffset;
      var scardTop = this.$refs.card4.offsetTop - Top;
      this.cardTop = scardTop * -1 + "px";
      // console.log(this.cardTop);
      //阻止body页面滚动
      if (this.isShow) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      //放大倍数
      var ratiowidth = document.getElementsByTagName("body")[0].clientWidth;
      let ratio = ratiowidth / (ratiowidth * 0.835);
      var imgheight = document.getElementsByTagName("img")[0].offsetHeight;
      var h3height = document.getElementsByTagName("h3")[0].offsetHeight;
      var wheight =
        (document.documentElement.clientHeight -
          imgheight * ratio -
          h3height * ratio) /
        ratio;
      this.windowHeight = wheight + "px";
    },

    handleDown: function (e) {
      // e = e||window.event
      // //给card添加active的class
      // this.isActive=!this.isActive
      // //获取页面滚动高度，给页面打开时的高度赋值
      // var Top = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
      // var scardTop = this.$refs.card.offsetTop - Top
      // console.log(this.$refs.card.offsetTop);
      // this.cardTop=scardTop * -1 +'px'
      // //阻止body页面滚动
      // if(this.isActive){
      //     document.body.style.overflow='hidden';
      // }else{
      //     document.body.style.overflow='auto';
      // }
      // //放大倍数
      // var ratiowidth= document.getElementsByTagName("body")[0].clientWidth
      // let ratio = ratiowidth / (ratiowidth * 0.835)
      // var imgheight =document.getElementsByTagName("img")[0].offsetHeight
      // var h3height =document.getElementsByTagName("h3")[0].offsetHeight
      // var wheight=(document.documentElement.clientHeight - (imgheight * ratio) - (h3height * ratio) ) / ratio
      // this.windowHeight=wheight + 'px'
      // console.log(1);
    },
    preventWheel: function (e) {
      e = e || window.event;
      if (this.isActive) {
        // e.preventDefault();
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
#Skeleton {
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;

  /* --body-width:480px; */
  /* --card-width:420px; */
  /* --card-height:280px; */
  /* --img-height:226px; */
  /* --img-height-expanded:320px */
  width: var(--bodywidth);
  /* background-color: #eee; */
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  padding: 0rem 0;
  overflow: hidden;
}
.balck {
  background-color: gray;
}
.balck1 {
  background-color: rgb(107, 104, 104);
}
.white {
  background-color: #eee;
}
.pheader {
  /* position: absolute; */
  opacity: 0;
}
/* #Skeleton.noscroll{
        overflow: hidden;
    } */
.card {
  width: 90%;
  height: 19rem;
  /* background-color: #fff; */
  border-radius: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  transition: 0.3s all cubic-bezier(0, 1, 0.95, 1.05);
}
.card4 {
  margin-bottom: 6rem;
}
.card:nth-last-child(1) {
  bottom: 100px;
}
.card img {
  display: block;
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.card h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.8rem 1.2rem;
  /* background-color: #fff; */
  line-height: 2rem;
  letter-spacing: -0.5px;
  /* padding-bottom: 0; */
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
.card .content-wrapper {
  height: 0;
  overflow: hidden;
  transition: 0.3s all ease-out;
  opacity: 0.8;
}
.card .content-wrapper .content {
  padding: 0.1rem 1.2rem;
  /* background-color: #fff; */
  overflow: auto;
  height: var(--winHeight);
}
.card p {
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding: 1rem 0;
}
.card.active {
  transform: translateY(var(--cardTop)) scale(calc(480 / 420)); /*body/card-width */
  transform-origin: 50% 0;
  border-radius: 0;
}
.card.active h3 {
  padding-bottom: 0.8rem;
}
.card.active img {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  height: 200px; /**图片拉高 */
}
.card.active .content-wrapper {
  height: 100vh;
  transition: 0.3s all ease-in;
  opacity: 1;
}
</style>