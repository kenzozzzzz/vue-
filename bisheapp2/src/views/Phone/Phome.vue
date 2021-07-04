<template>
  <div class="biaoti" :class="[(this.$store.isDaytime)?'white':'balck']">
    <!-- <PhoneHeader class="pHeader"/> -->
    <!-- <Skeleton class="Skeleton"/> -->
    <!-- <PhoneLogin /> -->
    <div>
      <h1>
        <span><i>Welcome</i></span>
        <span><i>To</i></span>
        <span><i>My</i></span>
        <span><i>Blog</i></span>
      </h1>
    <div class="laji" :class="[(this.$store.isDaytime)?'white':'balck']"></div>
    </div>
  </div>
</template>

<script>
import Skeleton from "@/components/Skeleton";
import PhoneHeader from "@/components/Phone/PhoneHeader";
import PhoneLogin from "@/components/Phone/PhoneLogin";
export default {
  components: {
    Skeleton,
    PhoneHeader,
    PhoneLogin,
  },
};
</script>

<style scoped>

.balck {
  background-color: gray;
}
.white {
  background-color: #eee;
}
.laji{
  height: 8rem;
}
h1 span {
  display: inline-block;
  overflow: hidden;
}
h1 span i {
  font-style: normal;
  position: relative;
  top: 7rem;
  animation: 1s swift-up ease-in-out forwards;
}
@keyframes swift-up {
  to {
    top: 0rem;
  }
}
div:nth-child(1) {
  height: inherit;
  padding: 4.4rem 0;
  /* background-color: #eee; */
}
div:nth-child(2) {
  height: var(--hc1height);
  /* background-color: #eee; */
}
div:nth-child(2) h1 {
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  flex-direction: column;
  text-align: right;
}
div:nth-child(2) h1 span:nth-child(2) {
  position: relative;
  left: -130px;
}
div:nth-child(2) h1 span:nth-child(3) {
  position: relative;
  left: -120px;
}
div:nth-child(2) h1 span:nth-child(4) {
  position: relative;
  left: -87px;
  /* transform: translateX(10px); */
}
</style>