<template>
  <div
    id="Skeleton"
    @mousewheel="preventWheel"
    :style="{ '--bodywidth': bodyWidth }"
    :class="[this.$store.isDaytime ? 'white' : 'balck']"
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
      <h3 :class="[this.$store.isDaytime ? 'white' : 'balck1']">基本信息</h3>
      <div class="content-wrapper">
        <div
          class="content"
          :class="[this.$store.isDaytime ? 'white' : 'balck1']"
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
      <h3 :class="[this.$store.isDaytime ? 'white' : 'balck1']">兴趣爱好</h3>
      <div class="content-wrapper">
        <div
          class="content"
          :class="[this.$store.isDaytime ? 'white' : 'balck1']"
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
      ref="card3"
      @myevent2="handleEvent2()"
      class="card"
      :style="{ '--cardTop': cardTop }"
      @mousedown="handleDown"
      :class="{ active: isActive == 3 && isShow }"
      @click="handleClick3($event)"
    >
      <img :src="gdpuimg" />
      <h3 :class="[this.$store.isDaytime ? 'white' : 'balck1']">教育经历</h3>
      <div class="content-wrapper">
        <div
          class="content"
          :class="[this.$store.isDaytime ? 'white' : 'balck1']"
          :style="{ '--winHeight': windowHeight }"
        >
          <p>
            广东药科大学（Guangdong Pharmaceutical
            University），简称“广药”（GDPU），位于广东省广州市，是全国三所药科大学之一，是华南地区最早开办药学系列专业的高等学府。学校是粤港澳医药产业协同创新联盟、中国整合药学联盟牵头单位，是中俄医科大学联盟成员单位
          </p>
          <p>
            广东药科大学办学历史可追溯至1958年创建的广东省卫生干部进修学院；1978年升格为普通本科高校，定名为广东医药学院；1994年更名为广东药学院；2016年经教育部批准，正式更名为广东药科大学。
          </p>
          <p>
            截至2020年10月9日，学校拥有广州（大学城、赤岗、宝岗）、中山和云浮三大校区五个校园，占地近5300亩，校本部位于广州大学城；设有21个教学单位、2家直属附属三级甲等医院
          </p>
          <p>
            以药学、中西医结合为龙头的大药学、大健康学科群优势明显。临床医学学科2017年率先跨入ESI全球排名前1%并持续至今，化学、药理与毒理学学科2020年也进入ESI全球排名前1%；药学学科在全国第四轮学科评估中排名全国并列第21位；中西医结合学科在软科“中国最好学科排名”中，2018、2019连续两年位居全国第3、前5%。
          </p>
          <p>
            根据2017年5月学校官网显示，广东药科大学先后与海内外40多所高等院校、科研机构在合作科研、人才培养、学术交流、师资培训等方面建立了实质性合作交流关系；学校具备招收外国留学生、港澳台地区学生资格，各类在校留学生400多人，来自美国、法国、俄罗斯、等40多个国家和地区；先后与中国地方政府、企业合作共建了多个校地、校企产学研合作项目，与广州市番禺区人民政府合作共建有国家级科技企业孵化器；此外，学校还建立了一批联合培养基地和近500个校外教学实践合作基地。
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
      <h3 :class="[this.$store.isDaytime ? 'white' : 'balck1']">工作经历</h3>
      <div class="content-wrapper">
        <div
          class="content"
          :class="[this.$store.isDaytime ? 'white' : 'balck1']"
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
      gdpuimg: require("@/assets/gdpu.jpg"),
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