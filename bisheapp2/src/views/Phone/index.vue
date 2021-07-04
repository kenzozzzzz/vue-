<template>
  <div class="Phone" >
    <!-- <router-view></router-view> -->
    <!-- <PhoneHeader class="pHeader"/>
      <Skeleton class="Skeleton"/> -->
    <Phonefooter class="phfooter" />
    <!-- <PhoneLogin /> -->
  </div>
</template>

<script>
import Skeleton from "@/components/Skeleton";
import Phonefooter from "@/components/Phone/Phonefooter";
import PhoneHeader from "@/components/Phone/PhoneHeader";
import PhoneLogin from "@/components/Phone/PhoneLogin";
export default {
  components: {
    Skeleton,
    PhoneHeader,
    Phonefooter,
    PhoneLogin,
  },
};
</script>

<style scoped>
.Phone {
  position: relative;
}
.Skeleton {
  z-index: 100;
}
.pHeader {
  /* position: fixed; */
  z-index: 10;
}
.balck {
  background-color: gray;
}
.white {
  background-color: #eee;
}
/* .phfooter{
        position: absolute;
        position: fixed;
        bottom: 0;
    } */
</style>