<template>
  <div id="LeftMenu">
    <div class="ct" id="t1">
      <div class="ct" id="t2">
        <div class="ct" id="t3">
          <div class="ct" id="t4">
            <div class="ct" id="t5">
              <ul id="menu">
                <a href="#t1"><li class="icon fa fa-bolt" id="uno">基本信息</li></a>
                <a href="#t2"><li class="icon fa fa-keyboard-o" id="dos">兴趣爱好</li></a>
                <a href="#t3"><li class="icon fa fa-rocket" id="tres">教育经历</li></a>
                <a href="#t4"><li class="icon fa fa-dribbble" id="cuatro">工作经历</li></a>
                <a href="#t5"><li class="icon fa fa-plus-circle" id="cinco">其他</li></a>
              </ul>
              <div class="page" id="p1" :class="[this.$store.isDaytime ? 'white' : 'balck']">
                <section class="icon fa fa-bolt">
                  <span class="title">赵浩源</span>
                  <span class="hint">一个前端入门级选手
                    <br />
                    性别：男</span>
                    <span class="hint">手机号码：15362944297</span>
                    <span class="hint">邮箱账户：gdpu_zhaohaoyuan@163.com</span>
                    <span class="hint">一名土生土长的广东人</span>
                </section>
              </div>
              <div class="page" id="p2" :class="[this.$store.isDaytime ? 'white' : 'balck']">
                <section class="icon fa fa-keyboard-o">
                  <span class="title">爱好</span>
                  <p class="hint">摄影</p>
                  <p class="hint">滑板</p>
                </section>
              </div>
              <div class="page" id="p3" :class="[this.$store.isDaytime ? 'white' : 'balck']">
                <section class="icon fa fa-rocket">
                  <span class="title">教育经历</span>
                  <span class="hint">广东药科大学</span>
                </section>
              </div>
              <div class="page" id="p4" :class="[this.$store.isDaytime ? 'white' : 'balck']">
                <section class="icon fa fa-dribbble">
                  <span class="title">工作经历</span>
                  <p class="hint">
                      <span class="hint">读书郎教育科技有限公司</span> 
                  </p>
                </section>
              </div>
              <div class="page" id="p5" :class="[this.$store.isDaytime ? 'white' : 'balck']">
                <section class="icon fa fa-plus-circle">
                  <span class="title" @click='handletowater'>照片墙</span>
                  <p class="hint">
                    <span></span><br />
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    handletowater(){
      this.$router.push('/photo')
    }
  }
};
</script>

<style scoped>
html,
body,
.page {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
  -webkit-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
  -moz-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
  -o-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
  color: #000;
  overflow: hidden;
}
.balck {
  background-color: gray;
  color:white;
}
.white {
  background-color: #eee;
  color: black;
}
* {
  font-family: Arial, Helvetica, sans-serif;
}
#LeftMenu{
    width: 1024px;
    height: 100%;
    overflow: hidden;
}
.page {
  position: absolute;
}

#p1 {
  left: 0;
}

#p2,
#p3,
#p4,
#p5 {
  left: 200%;
}

/* #p1 {
  background: darkslateblue;
  background-color: #eee;
}
#p2 {
  background: tomato;
  background-color: #eee;
}
#p3 {
  background: rgb(245, 215, 45);
  background-color: #eee;
}
#p4 {
  background: deeppink;
  background-color: #eee;
}
#p5 {
  background: rebeccapurple;
  background-color: #eee;
} */

#t2:target #p2,
#t3:target #p3,
#t4:target #p4,
#t5:target #p5 {
  transform: translateX(-190%);
  -webkit-transform: translateX(-190%);
  -moz-transform: translateX(-190%);
  -o-transform: translateX(-190%);
  transition-delay: 0.4s !important;
}

#t2:target #p1,
#t3:target #p1,
#t4:target #p1,
#t5:target #p1 {
  background:gray;
}

#t2:target #p1 .icon,
#t3:target #p1 .icon,
#t4:target #p1 .icon,
#t5:target #p1 .icon {
filter: blur(3px);
-webkit-filter: blur(3px);
}

.icon {
  color: rgb(46, 44, 44);
  font-size: 32px;
  display: block;
}

ul .icon:hover {
  opacity: 0.5;
}

.page .icon .title {
  line-height: 2;
}

#t2:target ul .icon,
#t3:target ul .icon,
#t4:target ul .icon,
#t5:target ul .icon {
  transform: scale(0.6);
  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  -o-transform: scale(0.6);
  transition-delay: 0.25s;
}

#t2:target #dos,
#t3:target #tres,
#t4:target #cuatro,
#t4:target #cinco {
  transform: scale(1.2) !important;
  -webkit-transform: scale(1.2) !important;
  -moz-transform: scale(1.2) !important;
  -o-transform: scale(1.2) !important;
}

ul {
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 280px;
  width: 10%;
  padding: 0;
  text-align: center;
}

#menu .icon {
  margin: 30px 0;
  transition: all 0.5s ease-out !important;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
}

a {
  text-decoration: none;
}

.title,
.hint {
  display: block;
}

.title {
  font-size: 38px;
}

.hint {
  font-size: 18px;
}

#p4 .hint {
  display: inherit !important;
}

.hint a {
  color: yellow;
  transition: all 250ms ease-out;
  -webkit-transition: all 250ms ease-out;
  -moz-transition: all 250ms ease-out;
  -o-transition: all 250ms ease-out;
}

.hint a:hover {
  color: rgb(44, 43, 46);
}

.line-trough {
  text-decoration: line-through;
}

.page .icon {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10%;
  left: 0;
  width: 270px;
  height: 170px;
  margin: auto;
  text-align: center;
  font-size: 80px;
  line-height: 1.3;
  transform: translateX(360%);
  -webkit-transform: translateX(360%);
  -moz-transform: translateX(360%);
  -o-transform: translateX(360%);
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1.25);
  -webkit-transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1.25);
  -moz-transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1.25);
  -o-transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1.25);
}

.page#p1 .icon {
  height: 220px;
}

.page#p1 .icon {
  transform: translateX(10%) !important;
}

#t2:target .page#p2 .icon,
#t3:target .page#p3 .icon,
#t4:target .page#p4 .icon,
#t5:target .page#p5 .icon {
  transform: translateX(0) !important;
  -webkit-transform: translateX(0) !important;
  -moz-transform: translateX(0) !important;
  -o-transform: translateX(0) !important;
  transition-delay: 1s;
}
</style>