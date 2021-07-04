<template>
  <div class="Photo" :class="['this.$store.isDaytime' ? 'balck' : 'white']">
      <!-- <Header /> -->
      <div class="Hheader" >
        <Header />
      </div>
      <div class="waterfall" :class="['this.$store.isDaytime' ? 'balck' : 'white']">
        <div class="laji" :class="['this.$store.isDaytime' ? 'balck' : 'white']"></div>
        <Waterfall />
      <Prettyfooter />
      </div>
      <!-- <router-link tag="span">1</router-link> -->
      <!-- <Laoding /> -->
      <!-- <div class="pfooter">1</div> -->
  </div>
</template>

<script>
import Header from "@/components/Header"
import Waterfall from "@/components/waterfall"
import Laoding from "@/components/Laoding"
import Prettyfooter from "@/components/footerBar/Prettyfooter"
export default {
    components:{
        Waterfall,
        Header,
        Laoding,
        Prettyfooter
    }
}
</script>

<style scoped>
.balck {
  background-color: gray;
}
.white {
  background-color: #eee;
}
.Photo{
    background-color: #eee;
}
    .Hheader{
        /* background-color: cadetblue; */
        background-color: #eee;
    }
    .laji{
        height: 250px;
    }
    .waterfall{
        position: relative;
        /* top: 150px; */
        /* padding-bottom: 200px; */
        overflow: hidden;
    }
    .pfooter{
        position: relative;
        /* padding-top: 200px; */
        width: 100%;
        height: 200px;
        background-color: chocolate;
    }
</style>