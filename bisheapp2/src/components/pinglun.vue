<template>
  <div class="pinglun" :class="[(this.$store.isDaytime)?'white':'balck']">
    <div class="plcontent">
      <div class="docomment">
        <div class="userface">😀</div>
        <p class="username">
          用户：{{ this.$store.name }}
          <!-- <input v-model="username" type="text" /> -->
        </p>
        <input
          class="usercomment"
          v-model="usertext"
          type="text"
          placeholder="请发表你的演讲"
        />
        <div class="btndiv">
          <button class="btnok" @click="handleTopl">发送</button>
        </div>
      </div>
      <div class="commenttext">
        <ul>
          <li class="pldata"  v-for="data in findresult" :key="data._id">
            <span class="sname"> {{ data.username }}： </span>
            <span class="stext">
              {{ data.text }}
            </span>
          </li>
        </ul>
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
  mounted() {
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
li {
  list-style: none;
}
.balck {
  background-color: gray;
  color: white;
}
.white {
  background-color: #eee;
  color: black;
}
.pldata {
  width: 50%;
  position: relative;
  top: 20px;
  left: 25%;
  /* background: aliceblue; */
  font-size: 20px;
  margin: 10px 0;
  padding: 10px 0;
}
.sname {
  float: left;
}
.pinglun {
  text-align: center;
  line-height: 100%;
  padding: 100px;
}
.plconten {
  /* background-color: aquamarine; */
  display: flex;
  overflow: hidden;
}
.userface {
  position: relative;
  left: -190px;
  font-size: 30px;
  top: -5px;
}
.username {
  position: relative;
  left: -60px;
  top: -10px;
}
.usercomment {
  width: 400px;
  height: 50px;
}
.btnok {
padding: 5px 10px;
  margin-top: 10px;
}
.btnno {
  position: absolute;
  left: 710px;
  top: 180px;
}
.getplbtn {
  position: absolute;
  top: 300px;
  left: 400px;
}
</style>