<template>
  <div id="Login">
      <!-- <header>header</header> -->
      <div class="login-container">
        <div class="left-container">
          <div class="title"><span>登录</span></div>
          <div class="input-container">
            <input type="text" name="username" placeholder="用户名">
            <input type="password" name="password" placeholder="密码">
          </div>
          <div class="message-container">
            <span>忘记密码</span>
          </div>
          <div class="loginbtn-container">
            <span>登录</span>
            </div>
        </div>
        <div class="right-container">
          <div class="regist-container">
            <span class="regist">注册</span>
          </div>
          <div class="actoin-container">
            <span>提交</span>
          </div>
        </div>
      </div>
      <!-- <footer>footer</footer> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#Login{
  height: 100%;
  width:650px;
  height: 350px;
  /* background-image: linear-gradient(to bottom right,rgb(114,135,254),rgb(130,88,186)); */
}
body .login-container{
  width: 600px;
  margin: 0 auto;
  /* margin-top: 10%; */
  border-radius: 15px;
  box-shadow: 0 0 50px 0 rgb(59,45,159);
  background-color: rgb(95,76,194);
  display: flex;
}
body .login-container .left-container{
  background-image: linear-gradient(to bottom right,rgb(118,76,163),rgb(92,103,211));
  width: 450px;
  height: 215px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  /* display: inline-block; */
  padding: 60px;
}
body .login-container .left-container .title{
  color: #fff;
  font-size: 18px;
  font-weight: 200;
}
body .login-container .left-container .title span{
  border-bottom: 3px solid rgb(227,221,22);
}
body .login-container .left-container .input-container{
  padding: 20px 0;
}
body .login-container .left-container .input-container input{
  border: 0;
  background: none;
  outline: 0;
  color: rgb(238, 204, 204);
  margin: 20px 0;
  padding: 5px 0;
  display: block;
  width: 100%;
  border-bottom: 1px solid rgb(199,191,219);
  transition: .6s;
}
body .login-container .left-container .input-container input:hover{
  border-bottom-color:rgb(247, 204, 204) ;
}
::-webkit-input-placeholder{
  color: rgb(175, 154, 226);
}
body .login-container .left-container .message-container{
  font-size: 14px;
  transition: .6s;
  color: rgb(199,191,219);
  cursor: pointer;
}
body .login-container .left-container .message-container:hover{
  color: #fff;
}
body .login-container .left-container .loginbtn-container{
  /* border-radius: 20px; */
  position: relative;
}
body .login-container .left-container .loginbtn-container span{
  border: 1px solid rgb(237,221,22);
  padding: 5px 15px;
  display: inline;
  line-height: 25px;
  border-radius: 10px;
  position: absolute;
  bottom: -10px;
  transition: .6s;
  right: 30px;
  cursor: pointer;
}
body .login-container .left-container .loginbtn-container span:hover{
  background-color: rgb(226, 221, 151);
  color: rgb(95,76,194);
}
body .login-container .right-container{
  width: 140px;
  /* display: inline-block; */
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: calc(100%-120px);
  padding: 60px 0;
}
body .login-container .right-container .regist-container{
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 200;
}
body .login-container .right-container .regist-container span{
  border-bottom: 3px solid rgb(227,221,22); 
}
body .login-container .right-container .actoin-container{
  font-size: 10px;
  color: #fff;
  /* text-align: center; */
  position: relative;
  height: 100%;
}
body .login-container .right-container .actoin-container span{
  border: 1px solid rgb(237,221,22);
  padding: 10px;
  display: inline;
  line-height: 25px;
  border-radius: 25px;
  position: absolute;
  bottom: 10px;
  transition: .6s;
  left: calc(72px - 40px);
  cursor: pointer;
}
body .login-container .right-container .actoin-container span:hover{
  background-color: rgb(226, 221, 151);
  color: rgb(95,76,194);
}

/* header{
  height: 30px;
  background: rgb(172, 172, 235);
}
footer{
  background-color:#f6f9fa ;
  height: 100px;
} */
</style>