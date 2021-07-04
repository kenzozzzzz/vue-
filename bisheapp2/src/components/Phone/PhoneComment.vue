<template>
  <div class="pinglun" :class="[(this.$store.isDaytime)?'white':'balck']" >
    <div class="plcontent">
      <div class="userface">😀</div>
      <p class="username">用户：{{this.$store.name}}</p>
      <input
        class="usercomment"
        v-model="usertext"
        type="text"
        placeholder="请发表你的演讲"
      />
      <div>
        <button class="btnok" @click="handleTopl">发送</button>
      </div>
      <div class="commenttext" :class="[(this.$store.isDaytime)?'white':'balck']">
        <ul>
          <li class="pldata" v-for="data in findresult" :key='data._id'>
            <span class="sname"> {{ data.username }}： </span>
            <span class="stext">
              {{ data.text }}
            </span>
          </li>
        </ul>
        <div class="kongbai"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      usertext: "",
      username: "",
      pltext: "",
      findresult: [],
    };
  },
  beforeMount() {
    axios.get("api2/comment/getcomment").then((res) => {
      var pllength = res.data.findresult.length;
      this.findresult = res.data.findresult;
    });
  },
  methods: {
    handleTopl() {
      this.axios
        .post("api2/comment/docomment", {
          username: this.$store.name,
          text: this.usertext,
          iszan: true,
        })
        .then((res) => {
          var status = res.data.status;
          console.log(res);
        });
      this.axios.get("api2/comment/getcomment").then((res) => {
        var pllength = res.data.findresult.length;
        this.findresult = res.data.findresult;
      });
    },
  },
};
</script>

<style scoped>
.kongbai{
    height:5rem;
}
li {
  list-style: none;
}
.balck {
  background-color: gray;
}
.white {
  background-color: #eee;
}
.pldata {
  width: 80%;
  position: relative;
  top: 2rem;
  left: 2.5rem;
  /* background: aliceblue; */
  font-size: 20px;
  margin: 10px 0;
  padding: 0.8rem 0 0 0;
}
.sname {
  float: left;
}
.commenttext{
    margin: 0;
}
.pinglun {
  text-align: center;
  /* line-height: 100%; */
  padding: 3rem 0 15rem 0;
  overflow: auto;
}
.plconten {
  /* background-color: aquamarine; */
  display: flex;
  overflow: hidden;
}
.userface {
  position: relative;
  font-size: 40px;
  top: -5px;
}
.username {
  position: relative;
}
.usercomment {
  width: 200px;
  height: 50px;
}
.btnok {
  position: relative;
}
.btnno {
  position: absolute;
}
.getplbtn {
  position: absolute;
}
</style>