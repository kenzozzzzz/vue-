<template>
  <div id="footer">
      <div class="footer-bg">
          <div class="footer-container">
              <h1>I Made This </h1><span class="iconfont icon-wode"></span>
              <hr>
              <div class="name">
                  <p>kenzo</p>
                  <i></i>
              </div>
          </div>
          <span>Copyright © 2020  kenzo</span>
      </div>
  </div>
</template>

<script>
export default {
    // data(){
    //     return{
    //     sTop:0
    //     }
    // },
    //页面注册滚动事件
    // mounted() {
    //         // 监听事件
            
    //         window.addEventListener('scroll', this.handleScroll, true)
    //         if(this.sTop>100){
    //             // this.$refs.htext.
    //         }
    // },
    // methods:{
    //     handleScroll: function() {
    //             this.$nextTick(()=>{
    //                 var sTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
    //                 console.log(this.sTop)
    //                 // if(sTop>100){
    //                 //   this.$refs.htext.style.display = "block";
    //                 // }
    //                 // else{
    //                 //   this.$refs.htext.style.display = "none";
    //                 // }
    //             })
    //     },
        
    // },
    // //页面注销滚动事件
    // beforeDestroy() {
    //         window.removeEventListener("scroll", this.handleScroll);
    // }

}
</script>

<style scoped>
    #footer{
        /* background: #000; */
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
        bottom: 0px;
        width: 100%;
        height: 400px;
    }
    #footer .footer-bg{
        background-color: rgb(41, 40, 40);
        /* display: flex; */
        /* position: relative;
        top: 0;
        left: 0; */
        height: 100%;
    }
    #footer .footer-bg .footer-container{
        width: 300px;
        height: 300px;
        border-radius: 50%  ;
        background-color: rgb(220, 157, 236);
        text-align: center;
        line-height: 150px;
        margin: 0 auto;
        transition: 1s ease-in-out;
        position: relative;
        top: 50px;
    }
    #footer .footer-bg .footer-container:hover{
        transform: scale(1.3);
       /* width: 350px;
       height: 350px; */
    }
    /* @keyframes footerani {
        0%{
            transform: scale(0.5);
        }
        100%{
            transform: scale(1);
        }
        
    } */
    #footer .footer-bg .footer-container h1{
        font-size: 35px;
        position: relative;
        top: 50px;
    }
    #footer .footer-bg .footer-container p{
        font-size: 18px;
        /* text-align: left; */
        position: relative;
         top: -50px;
    }

</style>