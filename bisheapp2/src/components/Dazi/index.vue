<template>
  <div class="Dazi-container">
      <h1 ref="htext" >
          <span>K</span>
          <span>e</span>
          <span>n</span>
          <span>z</span>
          <span>o</span>
          <span>z</span>
          <span>x</span>
          <span>y</span>
          <span>c</span>
          <span>v</span>
          
          </h1>
  </div>
</template>

<script>
export default {
    created:function(){
        // console.log(0 && true)
    },
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
    .Dazi-container{
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    h1{
        font-size: 6rem;
        margin: 0;
        padding: 0;
        font-family: monospace;
        position: relative;
        /* width: 6ch; */
        /* overflow: hidden; */
        /* animation: 2s typing steps(10,jump-none) forwards; */
    }
    h1::after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 10px;
        height: 6rem;
        background-color: #000;
        border-radius: 2px;
        right: -30px;
        animation: 1.1s cursor steps(2,jump-none) infinite;
    }
    @keyframes cursor {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    /* @keyframes typing{
        from {
            width: 1ch;
        }
        to {
            width: 10ch;
        }
    } */
    h1 span{
        display: inline-block;
        overflow: hidden;
        width: 0ch;
        animation: 1s text-in ease-in-out forwards;
        animation-delay:var(--dalay) ;
    }
    @keyframes text-in{
        from {
            width: 0ch;
        }
        to {
            width: 1ch;
        }
    }
</style>