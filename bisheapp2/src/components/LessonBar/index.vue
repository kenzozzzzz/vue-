<template>
  <div id="LessonBar">
      <div class="wrapper" >
          <ul class="ulcontent" ref="wrapper">
              <!-- <li><h1 class="static" ref="h1text" @mouseover="handleOver" :class="{h1hover:isHover}">lesson</h1></li> -->
              <li>Lesson 2</li>
              <li>Lesson 3</li>
              <li>Lesson 4</li>
              <li>Lesson 5</li>
              <li>Lesson 6</li>
          </ul>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            a:'',
            isHover:false
        }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
    },
    methods:{
        
        handleOver:function(e){
            e = e||window.event
            this.$refs.h1text.style.animation='2s h1after steps(50,start) forwards'
            // this.$refs.h1text.style.color='black'
            this.isHover=true
            console.log(1);
        }
    }
}
</script>

<style scoped>
#LessonBar{
    font-family: Arial, Helvetica, sans-serif;
}
.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
ul{
    list-style: none;
    font-size: 200px;
    height: 100vh;
    width: 80rem;
    overflow: auto;
    position: relative;
    margin: 0;
    padding: 0;
}
li{
    overflow: hidden;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 0;
    padding: 0;
    /* top: 0; */
}
li:nth-of-type(1){
    top: 0;
    background-color: aquamarine;
}
li:nth-of-type(2){
    top: 20%;
    background-color: rgb(170, 76, 189);
}
li:nth-of-type(3){
    top: 40%;
    background-color: rgb(183, 209, 113);
}
li:nth-of-type(4){
    top: 60%;
    background-color: rgb(235, 172, 37);
}
li:nth-of-type(5){
    top: 80%;
    background-color: rgb(90, 91, 160);
}
li .static{
    /* display: inline-block; */
    /* background-image: linear-gradient(#fff 0%,#7e2a2a 50%); */
    color: transparent;
    background-clip: text;
    -webkit-ackground-clip: text; 
    -webkit-text-stroke: 1px black;
    /* animation: ligbc 1s; */
    
}
.static::after{
    color: #000;
    position: absolute;
    top: 0;
    left: 0;
    content: 'lesson';
    line-height: 115px;
    overflow: hidden;
    width: 0ch;
    animation:2s h1after steps(50,start) forwards;
    /* animation:2s all; */
    /* transform:  translateX(10px); */
}
.h1hover{
    color: red;
}
@keyframes h1after{
    from{
        width: 0ch;
    }
    to{
        width: 6ch;
    }
}
li:hover{
    /* background-image: linear-gradient(#fff 0%,#7e2a2a 50%); */
    animation: ligbc 1s;
    /* color: aquamarine; */
}
@keyframes libgc{
    /* from{
        background-image: linear-gradient(#fff 0%,#7e2a2a 50%);
    } */
    to{
         background-image: linear-gradient(#fff 0%,#7e2a2a 100%);
    }
}
</style>