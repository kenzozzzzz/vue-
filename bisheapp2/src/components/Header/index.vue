<template>
  <div id="Header" :class="[(this.$store.isDaytime)?'white':'balck']"> 
    <div class="header">
      <!-- <router-link></router-link> -->
      <div class="Header-container-left">
        <h1>
          <span><i>Kenzo</i></span>
        </h1>
      </div>
      <div class="Header-container-right">
        <!-- <a :style="{'--progress':a}" v-on:mouseover="handleOvera" v-on:mouseout="handleOuta" href="#">Home</a> -->
        <router-link
          tag="a"
          to="/"
          active-class="link-active"
          class="a-ToHome"
          :style="{ '--progress': a }"
          v-on:mouseover="handleOvera"
          v-on:mouseout="handleOuta"
          >HOME</router-link
        >
        <router-link
          tag="a"
          to="/About"
          active-class="link-active"
          class="a-ToHome"
          :style="{ '--progress': a }"
          >ABOUT</router-link
        >
        <router-link
          tag="a"
          to="/Lesson"
          active-class="link-active"
          class="a-ToHome"
          :style="{ '--progress': a }"
          >SCHOOL</router-link
        >
        <!-- <router-link tag="span" to='/about'  class="a-ToAbout">ABOUt</router-link> -->
        <a
          :style="{ '--progress2': b }"
          v-on:mouseover="handleOverb"
          v-on:mouseout="handleOutb"
          @click="handleTo"
          >LOGIN</a
        >
        <!-- <router-link tag="a" to="/Login" class="a-ToLogin" :style="{'--progress2':b}" 
            v-on:mouseover="handleOverb" v-on:mouseout="handleOutb">LOGIN</router-link> -->
      </div>
    </div>
    <!-- <div class="poi" @click="handleTozan">点赞</div> -->
    <el-button
      class="poi"
      @click="drawer = true"
      type="primary"
      style="margin-left: 16px"
      >评论</el-button
    >
    <el-drawer
      class="poi1"
      title="评论区"
      v-show="drawer"
      :visible.sync="drawer"
      :modal="false"
      size="60%"
    >
      <div>
        <Pinglun />
      </div>
    </el-drawer>
    <div class="gotop">
      <el-backtop :bottom="100" :right="0">
        <div
          style="
             {
              height: 100%;
              width: 100%;
              background-color: #f2f5f6;
              box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
              text-align: center;
              line-height: 40px;
              color: #1989fa;
            }
          "
        >
          UP
        </div>
      </el-backtop>
    </div>
    <!-- <PrettyLogin class="Plogin" /> -->
    <PrettyLogin class="Plogin" :class="{ active: this.$store.isLogin }" />
    <Logincenter
      class="centerlogin"
      :class="{ centeractive: this.$store.centerActive }"
    />
    <Register
      class="register"
      :class="{ registeractive: this.$store.registerActive }"
    />
  </div>
</template>

<script>
import PrettyLogin from "@/components/PrettyLogin";
import Logincenter from "@/components/Logincenter";
import Register from "@/views/Login/register";
import VLogin from "@/views/Login";
import Pinglun from "@/components/pinglun";
export default {
  data() {
    return {
      a: 0,
      b: 0,
      isActive: false,
      centerActive: false,
      iszan: false,
      isinRegister: false,
      drawer: false,
      direction: "rtl",
    };
  },
  components: {
    PrettyLogin,
    VLogin,
    Logincenter,
    Register,
    Pinglun,
  },
  mounted() {},
  methods: {
    handleClose(done) {
      //使用before-close会暂停 Drawer 的关闭
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handleOvera: function (event) {
      if (this.a < 1) {
        this.a = parseFloat((this.a + 0.01).toFixed(2));
        setTimeout(this.handleOvera, 20);
      }
    },
    handleOverb: function (event) {
      if (this.b < 1) {
        this.b = parseFloat((this.b + 0.06).toFixed(2));
        setTimeout(this.handleOverb, 20);
      }
    },
    handleOuta: function (event) {
      if (this.a != 0) {
        this.a = parseFloat((this.a - 0.01).toFixed(2));
        setTimeout(this.handleOuta, 2);
      }
    },
    handleTo: function (e) {
      e = e || window.event;

      if (this.$store.isUserLogin) {
        // this.isActive=false
        this.$store.centerActive = !this.$store.centerActive;
      } else if (this.$store.isinRegister) {
        this.$store.registerActive = !this.$store.registerActive;
      } else {
        this.$store.isLogin = !this.$store.isLogin;
      }
      // this.centerActive=!this.centerActive
      // this.$router.push({path:'/login'})
    },
    handleOutb: function (event) {
      if (this.b != 0) {
        this.b = parseFloat((this.b - 0.01).toFixed(2));
        setTimeout(this.handleOutb, 2);
      }
    },
    handleTozan() {
      this.iszan = true;
      this.axios
        .get("api2/comment/docomment", {
          iszan: this.iszan,
        })
        .then((res) => {
          var status = res.data.status;
          console.log(res);
        });
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
  color: black;
}
a{
    color: #000;
}
#Header {
  z-index: 200;
  width: 100%;
  position: fixed;
  /* overflow: hidden; */
  background-color: rgba(163, 163, 163, 0.075);
}
#Header .header {
  /* position: absolute; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  /* background-color: #171717; */
  color: rgb(0, 0, 0);
}
@media screen and (max-width: 415px) {
  #Header .header {
    height: 100px;
  }
}
.poi {
  position: fixed;
  right: 0;
  top: 80%;
  padding: 10px 10px;
  width: 60px;
}
.poi1 {
  opacity: 1;
  overflow: hidden;
}
.gotop {
  /* height: 100vh; */
  overflow-x: hidden;
  /* float: right; */
  /* position: absolute;
    right: 0; */
}
.Plogin {
  position: absolute;
  display: none;
  top: 350px;
  right: 400px;
  transition: 0.6s ease-in-out;
}
.centerlogin {
  position: absolute;
  display: none;
  top: 290px;
  right: 400px;
  transition: 0.6s ease-in-out;
}
.register {
  position: absolute;
  display: none;
  top: 430px;
  right: 400px;
  transition: 0.6s ease-in-out;
}
.active {
  display: block;
}
.centeractive {
  display: block;
}
.registeractive {
  display: block;
}
h1 {
  margin: 0;
  letter-spacing: -2px;
}
h1 span {
  display: inline-block;
  /* background-color: aquamarine; */
  overflow: hidden;
}
h1 span i {
  font-style: normal;
  position: relative;
  top: 5rem;
  animation: 1s swift-up ease-in-out forwards;
}
@keyframes swift-up {
  to {
    top: 0rem;
  }
}
.Header-container-left {
  font-size: 30px;
  color: rgb(0, 0, 0);
}

.Header-container-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.Header-container-right .a-ToHome {
  color: transparent;
  margin: 10px 10px;
  font-size: 30px;
  text-decoration: none;
  /* background-image: linear-gradient(
    #fff calc(100% - calc(var(--progress) * 100%)),
    #4cd265 calc(100% - calc(var(--progress) * 100%))
  ); */
  background-clip: text;
  -webkit-background-clip: text;
}
.a-ToAbout {
  color: #000;
}
/* .Header-container-right .a-ToHome:hover{
     background-image: linear-gradient(#fff calc(100% - calc(var(--progress) *100%)),#4cd265 calc(100% - calc(var(--progress) *100%)));
     color: rgb(135, 238, 157);
     transition:  all 1s;
 } */
.link-active {
  background-image: linear-gradient(
    #fff calc(100% - calc(var(--progress) * 100%)),
    #4cd265 calc(100% - calc(var(--progress) * 100%))
  );
  transition: all 1s;
  transform: scale(clamp(1, calc(var(--progress) - 0.99) * 200, 1.3));
}
.Header-container-right .a-ToHome {
  background-image: linear-gradient(
    #fff calc(100% - calc(var(--progress) * 100%)),
    #4cd265 calc(100% - calc(var(--progress) * 100%))
  );
  transition: all 1s;
  transform: scale(clamp(1, calc(var(--progress) - 0.99) * 200, 1.3));
}
.Header-container-right .a-ToLogin {
  color: transparent;
  margin: 10px 10px;
  font-size: 30px;
  text-decoration: none;
  background-image: linear-gradient(
    #fff calc(100% - calc(var(--progress2) * 100%)),
    #4cd265 calc(100% - calc(var(--progress2) * 100%))
  );
  background-clip: text;
  -webkit-background-clip: text;
}
.Header-container-right .a-ToLogin {
  background-image: linear-gradient(
    #fff calc(100% - calc(var(--progress2) * 100%)),
    #4cd265 calc(100% - calc(var(--progress2) * 100%))
  );
  transition: all 1s;
  transform: scale(clamp(1, calc(var(--progress2) - 0.99) * 200, 1.3));
}
.Header-container-right a {
  color: transparent;
  margin: 10px 10px;
  font-size: 30px;
  text-decoration: none;
  background-image: linear-gradient(
    #fff calc(100% - calc(var(--progress2) * 100%)),
    #4cd265 calc(100% - calc(var(--progress2) * 100%))
  );
  background-clip: text;
  -webkit-background-clip: text;
}
.Header-container-right a {
  background-image: linear-gradient(
    #fff calc(100% - calc(var(--progress2) * 100%)),
    #4cd265 calc(100% - calc(var(--progress2) * 100%))
  );
  transition: all 1s;
  transform: scale(clamp(1, calc(var(--progress2) - 0.99) * 200, 1.3));
}
</style>