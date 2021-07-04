<template>
  <div id="about">
      <Header />
      <LeftMenu />
  </div>
</template>

<script>
import Header from '@/components/Header'
import LeftMenu from '@/components/LeftMenu'
export default {
  name:'about',
  data(){
    return{

    }
  },
  components:{
    Header,
    LeftMenu
  }
}
</script>

<style>
#about{
  background-color: rgb(78, 73, 73);
  width: 100%;
  height: 100%;
}
</style>