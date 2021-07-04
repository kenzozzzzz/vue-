<template>
  <div>
    <div class="login-box">
      <h2>个人中心</h2>
        <div class="user-box">
          <div class="usern">
            <h2>欢迎你，{{ this.$store.name }}</h2>
          </div>
          <div class="btn">
            <a href="javascript:;" @click="handleToLogout">退出</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "center",
  data() {
    return {};
  },
  methods: {
    handleToLogout() {
      this.axios.get("api2/users/logout").then((res) => {
        var status = res.data.status;
        if (status === 0) {
          this.$store.commit("USER_NAME", { name: "" });
          alert("用户已退出");
          this.$store.isLogin = true;
          this.$store.isUserLogin = false;
          this.$store.centerActive = false;
        }
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    axios.get("/api2/users/getUser").then((res) => {
      var status = res.data.status;
      if (status === 0) {
        next((vm) => {
          vm.$store.commit("USER_NAME", { name: res.data.data.username });
        });
      } else {
        alert("请先登录");
        next("login/login");
      }
    });
  },
};
</script>

<style scoped>
html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

/* .login-box .user-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.usern {
  margin: 10px 10px;
}*/
.btn{
  text-align: center;
} 
.login-box  a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  /* padding-top: 40px; */
  letter-spacing: 4px;
}
.login-box form a:nth-of-type(2) {
  margin-left: 12rem;
}
.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
</style>