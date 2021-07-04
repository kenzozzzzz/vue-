<template>
  <div id="PhoneFooter" >
    <div id="PhoneHeader" :class="[(this.$store.isDaytime)?'white':'balck']" v-show="$store.state.isPhoneHeaderShow">
      <div class="PHheadercontainei">
        <div class="PHTime">
          <span>{{ updateTime }}</span>
          <h1>{{nowWeek}}</h1>
        </div>
        <div class="phlogin">
          <router-link class="router-link" to="/plogin/phonelogin">
            <span class="iconfont icon-wode loBtn"> 🌝 </span>
          </router-link>
        </div>
      </div>
    </div>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <div class="PHcontainer" :class="[(this.$store.isDaytime)?'white':'balck']" v-show="$store.state.isPhoneFooterShow">
      <div class="PHhome">
        <!-- <span >home</span>     -->
        <router-link class="router-link" to="/phonehome">Home</router-link>
      </div>
      <div class="PHabout">
        <!-- <span @click="handletoPabout">about</span> -->
        <router-link class="router-link" to="/phoneabout">about</router-link>
      </div>
      <div class="PHschool">
        <!-- <span>school</span> -->
        <router-link class="router-link" to="/phoneschool">school</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneHeader from "@/components/Phone/PhoneHeader";
export default {
  data() {
    return {
      transitionName: "left",
      isblue: true,
      updateTime: "",
      nowWeek:'',
      nowhour:'',
      nowDate:''
    };
  },
  components: {
    PhoneHeader,
  },
  mounted() {
    const nowDate = new Date();
    const date = {
      year: nowDate.getFullYear(),
      month: nowDate.getMonth() + 1,
      date: nowDate.getDate(),
      hour:nowDate.getHours()
    };
    const wk = nowDate.getDay()
    const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    const week = weeks[wk]
    this.nowWeek=week
    const newmonth = date.month > 10 ? date.month : "0" + date.month;
    const day = date.date > 10 ? date.date : "0" + date.date;
    this.updateTime = date.year + "/" + newmonth + "/" + day;
    this.nowhour=date.hour
    this.currentTime();
  },
  methods: {
    handleClick: function () {
      // e= event||window.event
      // console.log(1);
      this.$routers.push("/plogin/phonelogin");
      this.$store.state.isPhoneLoginShow = !this.$store.state.isPhoneLoginShow;
    },
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      this.nowDate = hour;
      this.$store.myDate=this.nowDate
    }
  },
  watch: {
    $route(to, from) {
      console.log(to);
      const { index: toIndex } = to.meta;
      const { index: fromIndex } = from.meta;
      this.transitionName = toIndex < fromIndex ? "right" : "left";
      console.log(this.transitionName);
    },
  },
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
    }
  }
};
</script>

<style scoped>
.main,
.page {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.balck {
  background-color: gray;
}
.white {
  background-color: #eee;
}
#PhoneHeader {
  width: 100%;
  height: 6rem;
  /* background-color: #eee; */
  /* position: fixed; */
  padding-bottom: 0.7rem;
  border-bottom: solid 1px bisque;
}
.PHheadercontainei {
  position: relative;
}
.PHTime {
  position: absolute;
  font-size: 15px;
  color: #000;
  top: 10px;
  left: 20px;
  padding: 6px 0;
}
.phlogin {
  position: absolute;
  top: 2rem;
  right: 2rem;
}
.phlogin span {
  font-size: 30px;
}
.pLogin {
  position: absolute;
  display: block;
  top: 12rem;
  /* overflow: hidden; */
}
.active {
  display: block;
}
.router-link.router-link-active {
  color: blue;
}
#PhoneFooter {
  height: 100%;
  width: 100%;
  position: absolute;
}
.PHcontainer {
  width: 100%;
  height: 4rem;
  border-top: rgb(201, 201, 201) 1px solid;
  /* background-color: #eee; */
  position: fixed;
  /* position: absolute; */
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.PHhome,
.PHabout,
.PHschool {
  height: 4rem;
  line-height: 4rem;
  align-items: center;
}
.router-link {
  text-decoration: none;
  color: #000;
}

.right-enter-active,
.right-leave-active,
.left-enter-active,
.left-leave-active {
  width: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.right-enter {
  opacity: 0;
  transform: translate3d(0, -50%, 0);
}

.right-leave-active {
  opacity: 0;
  transform: translate3d(0, 50%, 0);
}

.left-enter {
  opacity: 0;
  transform: translate3d(0, 50%, 0);
}

.left-leave-active {
  opacity: 0;
  transform: translate3d(0, -50%, 0);
}
</style>