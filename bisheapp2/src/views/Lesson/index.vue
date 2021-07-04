<template>
  <div>
      <Header/>
      <!-- <LessonBar /> -->
      <!-- <Test/> -->
      <!-- <Dazi /> -->
      <!-- <LeftMenu /> -->
      <!-- <Skeleton /> -->
      <PreetyBar />
  </div>
</template>

<script>
import LessonBar from '@/components/LessonBar'
import Dazi from '@/components/Dazi'
import Test from '@/components/test'
import LeftMenu from '@/components/LeftMenu'
import Skeleton from '@/components/Skeleton'
import PreetyBar from '@/components/LessonBar/PreetyBar'
import Header from '@/components/Header'
export default {
    name:'lesson',
    components:{
        LessonBar,
        Dazi,
        Test,
        LeftMenu,
        Skeleton,
        PreetyBar,
        Header
    }
    
}
</script>

<style>

</style>