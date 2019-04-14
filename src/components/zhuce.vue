<template>
   <div id="zhuce">
    <form class="form-signin" @submit.prevent="submit_">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">注册中心</h1>
      </div>
      <div class="form-label-group">
        <input type="email" id="inputEmail" class="form-control" placeholder="请输入邮箱" required="" autofocus="" v-model="youixang">
        <label for="inputEmail"></label>
      </div>
      <div class="form-label-group">
        <input type="password" id="inputPassword" class="form-control" placeholder="请输入密码" required="" v-model="pass">
        <label for="inputPassword"></label>
        <input type="password" id="inputPasswordx" class="form-control" placeholder="确认密码" required="" v-model="queding_pass">
        <label for="inputPasswordx"></label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        马上注册
      </button>
    </form>
   </div>
</template>

<script>
//引入axios
// import axios from 'axios'

 export default{
   data(){
   	  return{
   	  	youixang:'',
   	  	pass:'',
   	  	queding_pass:''
   	  }
   },
   methods:{
      submit_(){
      	  //密码和确认密码一致且密码不为空
          if(this.pass==this.queding_pass && this.pass !=""){
          	 var formdata={
                 youixang:this.youixang,
                 pass:this.pass
          	 }
          	 //axios提交数据
            this.$http.post("http://bk.wsw520.top/user.php",formdata,{emulateJSON:true}).then(data=>{
            	  //注册成功跳转登录页
             	  this.$router.push({path:'/login'})
             })
          }else{
          	alert("两次密码不一致！")
          }
      }
      
   }

 }
</script>

<style scoped>
#zhuce{
   max-width: 350px;
   margin: 72px auto;
   padding: 8px;
   height: 100vh;
}
input{
  border: 1px solid #ffffff;
  background: none;
}
</style>