<template>
  <div class="waterfall" :class="['this.$store.isDaytime' ? 'balck' : 'white']">
    <div class="masonry">
      <div class="item">
        <img :src="imgsrc1" />
      </div>
      <div class="item">
        <img :src="imgsrc2" />
      </div>
      <div class="item">
        <img :src="imgsrc3" />
      </div>
      <div class="item">
        <img :src="imgsrc4" />
      </div>
      <div class="item">
        <img :src="imgsrc5" />
      </div>
      <div class="item">
        <img :src="imgsrc6" />
      </div>
      <div class="item">
        <img :src="imgsrc7" />
      </div>
      <div class="item">
        <img :src="imgsrc8" />
      </div>
      <div class="item">
        <img :src="imgsrc9" />
      </div>
      <div class="item">
        <img :src="imgsrc10" />
      </div>
      <div class="item">
        <img :src="imgsrc11" />
      </div>
      <div class="item">
        <img :src="imgsrc12" />
      </div>
      <div class="item">
        <img :src="imgsrc13" />
      </div>
      <div class="item">
        <img :src="imgsrc14" />
      </div>
      <div class="item">
        <img :src="imgsrc15" />
      </div>
      <div class="item">
        <img :src="imgsrc16" />
      </div>
      <div class="item">
        <img :src="imgsrc17" />
      </div>
      <div class="item">
        <img :src="imgsrc18" />
      </div>
      <div class="item">
        <img :src="imgsrc19" />
      </div>
      <div class="item">
        <img :src="imgsrc20" />
      </div>
      <div class="item">
        <img :src="imgsrc21" />
      </div>
      <div class="item">
        <img :src="imgsrc22" />
      </div>
      <div class="item">
        <img :src="imgsrc23" />
      </div>
      <div class="item">
        <img :src="imgsrc24" />
      </div>
      <div class="item">
        <img :src="imgsrc25" />
      </div>
      <div class="item">
        <img :src="imgsrc26" />
      </div>
      <div class="item">
        <img :src="imgsrc27" />
      </div>
      <div class="item">
        <img :src="imgsrc28" />
      </div>
    </div>
    <div class="wfooter"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgsrc1:require('@/assets/photo/a1.jpg'),
      imgsrc2:require('@/assets/photo/a2.jpg'),
      imgsrc3:require('@/assets/photo/a3.jpg'),
      imgsrc4:require('@/assets/photo/a4.jpg'),
      imgsrc5:require('@/assets/photo/a5.jpg'),
      imgsrc6:require('@/assets/photo/b1.jpg'),
      imgsrc7:require('@/assets/photo/b2.jpg'),
      imgsrc8:require('@/assets/photo/b3.jpg'),
      imgsrc9:require('@/assets/photo/b4.jpg'),
      imgsrc10:require('@/assets/photo/b5.jpg'),
      imgsrc11:require('@/assets/photo/b6.jpg'),
      imgsrc12:require('@/assets/photo/c1.jpg'),
      imgsrc13:require('@/assets/photo/c2.jpg'),
      imgsrc14:require('@/assets/photo/c3.jpg'),
      imgsrc15:require('@/assets/photo/c4.jpg'),
      imgsrc16:require('@/assets/photo/d1.jpg'),
      imgsrc17:require('@/assets/photo/d2.jpg'),
      imgsrc18:require('@/assets/photo/d3.jpg'),
      imgsrc19:require('@/assets/photo/d4.jpg'),
      imgsrc20:require('@/assets/photo/d5.jpg'),
      imgsrc21:require('@/assets/photo/d6.jpg'),
      imgsrc22:require('@/assets/photo/d7.jpg'),
      imgsrc23:require('@/assets/photo/e1.jpg'),
      imgsrc24:require('@/assets/photo/e2.jpg'),
      imgsrc25:require('@/assets/photo/e3.jpg'),
      imgsrc26:require('@/assets/photo/e4.jpg'),
      imgsrc27:require('@/assets/photo/e5.jpg'),
      imgsrc28:require('@/assets/photo/e6.jpg'),
    }
  }
};
</script>

<style scoped>
body {
  margin: 4px;
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
  overflow-y: auto;
}
::-webkit-scrollbar {
  display: none;
}
.balck {
  background-color: gray;
}
.white {
  background-color: #eee;
}
.masonry {
  columns: auto 400px;
}
.item {
  padding: 2px;
  position: relative;
  counter-increment: item-counter;
}
.item img {
  display: block;
  width: 100%;
  height: auto;
}
.item::after {
  position: absolute;
  display: block;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  background-color: #000;
  color: #eee;
  break-inside: avoid;
  content: counter(item-counter);
}
.item:nth-child(4n + 1) {
  order: 1;
}
.item:nth-child(4n + 2) {
  order: 2;
}
.item:nth-child(4n + 3) {
  order: 3;
}
.item:nth-child(4n) {
  order: 4;
}
.wfooter {
  width: 100%;
  height: 10rem;
  background-color: #eee;
}
</style>