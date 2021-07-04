<template>
  <div>
    <div class="center"> 
      <h1>欢迎；{{this.$store.name}}</h1>
      <h1>现在你可以去评论</h1>
      <h1>或者再逛逛再离开</h1>
    </div>
    <div class="btn">
            <a class="a1" @click="handleTopinglun">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              评论
            </a>
            <a class="a2" @click="handleToLogout">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              退出
            </a>
    <!-- <router-link to="/phonecomment">pinglun</router-link> -->
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleToLogout() {
      this.axios.get("api2/users/logout").then((res) => {
        var status = res.data.status;
        if (status === 0) {
          this.$store.commit("USER_NAME", { name: "" });
          this.$router.push("/plogin/phonelogin");
        }
      });
    },
    handleTopinglun(){
      this.$router.push('/phonecomment')
    }
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
        next("/plogin/phonelogin");
      }
    });
  },
};
</script>

<style scopde>
.center{
  padding: 6rem 0;
  text-align: center;
}
 .btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
 .a1 {
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
 .a2 {
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
  color: #58e3eb;
  /* padding-left: 4rem; */
  margin-left: 1em;
}
</style>