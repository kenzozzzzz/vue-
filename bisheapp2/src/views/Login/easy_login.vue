<template>
  <div>
      <div>
          <input v-model="username" type="text" placeholder="用户名/手机号">
      </div>
      <div>
          <input v-model="password" type="password" placeholder="输入密码">
      </div>
      <div class="login_btn">
          <input type="submit" value="登录" @click='handleToLogin'>
      </div>
  </div>
</template>

<script>
export default {
    name:'center',
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        handleToLogin(){
            this.axios.post('api2/users/login',{
                username:this.username,
                password:this.password
            }).then((res)=>{
                var status = res.data.status
                console.log(res);
            });
        }
    }
}
</script>

<style>

</style>