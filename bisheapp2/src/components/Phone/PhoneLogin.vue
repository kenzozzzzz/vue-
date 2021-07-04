<template>
  <div id="PLogin" :class="[(this.$store.isDaytime)?'white':'balck']">
    <div class="container">
      <div class="login-box">
        <form>
          <div class="user-box">
            <input v-model="username" type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input v-model="password" type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div class="btn">
            <a class="a1" href="#" @click="handleToLogin">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              登录
            </a>
            <a class="a2" href="#" @click="handleToRegister">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              注册
            </a>
          </div>
        </form>
      </div>
    </div>
    <div class="laji" :class="[(this.$store.isDaytime)?'white':'balck']"></div>
  </div>
</template>

<script>
export default {
  props: ["a", "myshow"],
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleClose() {
      // this.$store.state.isPhoneLoginShow=!this.$store.state.isPhoneLoginShow
    },
    handleToLogin() {
      this.axios
        .post("api2/users/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          var status = res.data.status;
          console.log(res);
          if (status == 0) {
            alert("登录成功");
            this.$store.name=this.username
            this.$router.push('/plogin/phonecenter')
          } else {
            alert("登录失败");
          }
        });
    },
    handleToRegister() {
      this.$router.push("/plogin/phoneregister");
    },
  },
};
</script>

<style scopde>
#PLogin {
  width: 100%;
  height: 70%;
  /* background-color: bisque; */
  padding-top: 1rem;
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
.container {
  /* background-color: rgb(255, 255, 255); */
  width: 100%;
  height: 100%;
  padding: 3rem 0;
}
.balck {
  background-color: gray;
  color: #fff;
}
.white {
  background-color: #eee;
}
.laji{
  height: 16rem;
}
.loginbtn {
  /* background-color: bisque; */
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