<template>
  <div id="PLogin" :class="[(this.$store.isDaytime)?'white':'balck']" >
    <div class="container" :class="[(this.$store.isDaytime)?'white':'balck']" >
      <div class="login-box">
        <form>
          <div class="user-box email">
            <input v-model="email" type="text" name="" required="" />
            <label>邮箱</label>
            <button class="emailbtn" :disabled="disabled" @click="handleVerify">
              {{ verifyInfo }}
            </button>
          </div>
          <div class="user-box">
            <input v-model="username" type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input v-model="password" type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div class="user-box">
            <input v-model="verify" type="text" name="" required="" />
            <label>验证码</label>
            <!-- <button @click="handleVerify">fasong</button> -->
          </div>
          <div class="btn">
            <a class="a1" @click="register">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              注册
            </a>
            <a class="a1" @click="ToLogin">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              登录
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      verify: "",
      verifyInfo: "发送验证码",
      disabled: false,
    };
  },
  methods: {
    handleVerify() {
      if (this.disabled) {
        return;
      }
      this.axios.get("/api2/users/verify?email=" + this.email).then((res) => {
        var status = res.data.status;
        var This = this;
        if (status === 0) {
          alert("验证码发送成功");
          This.countDown();
        } else {
          alert("验证码发送失败");
        }
      });
    },
    register() {
      this.axios
        .post("api2/users/register", {
          email: this.email,
          username: this.username,
          password: this.password,
          verify: this.verify,
        })
        .then((res) => {
          var status = res.data.status;
          var msg = res.data.msg;
          var This = this;
          if (status === 0) {
            alert("注册成功");
            this.$router.push('/plogin/phonelogin');
          } else {
            alert(msg);
          }
        });
    },
    countDown() {
      this.disabled = true;
      var count = 60;
      var timer = setInterval(() => {
        count--;
        this.verifyInfo = "剩余" + count + "秒";
        if (count === 0) {
          this.disabled = false;
          count = 60;
          this.verifyInfo = "发送验证码";
          clearInterval(timer);
        }
      }, 1000);
    },
    ToLogin() {
        this.$router.push('/plogin/phonelogin')
    },
  },
};
</script>

<style scoped>
#PLogin {
  width: 100%;
  height: 70%;
  /* background-color: bisque; */
  padding-top: 1rem;
}
.balck {
  background-color: gray;
}
.white {
  background-color: #eee;
}
.Lheader {
  /* background-color: #eee; */
  /* margin-top: 6rem; */
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  border-bottom: rgb(172, 172, 172) 1px solid;
  box-shadow: 0px -1px 10px rgb(155, 154, 154);
}
.Lheader h1 {
  padding-left: 10rem;
}
.email{
  padding-bottom:0 ;
}
.login-box .user-box .emailbtn{
  position: absolute;
  right: 20px;
  top: 10px;
}
.container {
  /* background-color: rgb(255, 255, 255); */
  width: 100%;
  height: 100%;
  padding: 3rem 0;
}

.loginbtn {
  background-color: bisque;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
}

.login-box {
  padding: 2.5rem;
  box-sizing: border-box;
  /* background-color: #eee; */
  /* box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6); */
  /* border-radius: 10px; */
  border: rgb(172, 172, 172) 1px solid;
  border-left: none;
  border-right: none;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: rgb(0, 0, 0);
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: rgb(0, 0, 0);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid rgb(0, 0, 0);
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: rgb(0, 0, 0);
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}
.login-box form .btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.login-box form a {
  position: relative;
  display: inline-block;
  padding: 1rem 2rem;
  color: #58e3eb;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  /* margin-top: 40px; */
  /* letter-spacing: 1rem; */
  background: #e5feff83;
  box-shadow: 0 0 2px #a4bdbe, 0 0 2px #a4bdbe, 0 0 5px #a4bdbe,
    0 0 10px #a4bdbe;
}
.login-box form .a2 {
  color: #58e3eb;
  /* padding-left: 4rem; */
  margin-left: 8em;
}
.login-box a span {
  position: absolute;
  display: block;
}
</style>