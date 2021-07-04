<template>
  <div id="PhoneHeader" v-show="$store.state.isPhoneHeaderShow">
    <div class="PHcontainer">
      <div class="PHTime">
        <span>{{ this.Time }}</span>
        <h1>Today</h1>
      </div>
      <div class="phlogin">
        <span class="iconfont icon-wode loBtn"> 🌝 </span>
      </div>
    </div>
    <!-- <router-view></router-view> -->
    <!-- <PhoneLogin v-show='$store.state.isPhoneLoginShow' class="pLogin" /> -->
  </div>
</template>

<script>
import PhoneLogin from "@/components/Phone/PhoneLogin";
export default {
  data() {
    return {
      Time: "",
      newDate:''
    };
  },
  // props:[
  //     'myshow'
  // ],
  components: {
    PhoneLogin,
  },
  mounted() {
    const nowDate = new Date();
    const date = {
      year: nowDate.getFullYear(),
      month: nowDate.getMonth() + 1,
      date: nowDate.getDate(),
    };
    const newmonth = date.month > 10 ? date.month : "0" + date.month;
    const day = date.date > 10 ? date.date : "0" + date.date;
    this.Time = date.year + "-" + newmonth + "-" + day;
    // console.log(nowDate);
    this.currentTime();
  },
  methods: {
    handleClick: function () {
      this.$router.push("/phonelogin");
    },
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
    }
  },
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
    }
  }
};
</script>

<style scoped>
#PhoneHeader {
  width: 100%;
  height: 6rem;
  background-color: #eee;
}
.PHcontainei {
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
</style>