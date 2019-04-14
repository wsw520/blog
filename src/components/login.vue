<template>
   <div id="login">
    <form class="form-signin" @submit.prevent="login_">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">登录中心</h1>
      </div>
      <div class="form-label-group">
        <input type="email" id="inputEmail" class="form-control" placeholder="请输入邮箱" required="" autofocus="" v-model="youixang">
        <label for="inputEmail"></label>
      </div>
      <div class="form-label-group">
        <input type="password" id="inputPassword" class="form-control" placeholder="请输入密码" required="" v-model="pass">
        <label for="inputPassword"></label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        登录
      </button>
    </form>
   </div>
</template>

<script>
//引入axios
import axios from 'axios'

 export default{
    data(){
    	return{
           youixang:'',
           pass:''
    	}
    },
    methods:{
       login_(){
       	   axios.get("http://bk.wsw520.top/user.php").then(data=>{
       	   	     var dataarr=data.data;

                 var arr=[];
                 for(var key in dataarr){
                      var obj=dataarr[key];
                      arr.push(obj)
                 }

       	   	     //过滤，匹配成功有返回值fanhuizhi
       	   	     var fanhuizhi=arr.filter((obj)=>{
       	   	     	return obj.name===this.youixang && obj.pass===this.pass
       	   	     })
       	   	     //返回值fanhuizhi是一个数组
       	   	     if(fanhuizhi!=null && fanhuizhi.length>0){
                     this.$router.push({path:'/'})
                     //把用户名保存sessionStorage
                     sessionStorage.setItem("name", this.youixang);
                     //数据存到vuex
                     this.$store.commit("com_name",this.youixang)
       	   	     }else{
       	   	     	 alert("账号或密码错误！")
       	   	     }
       	   })
       }
    }
 }
</script>

<style scoped>
#login{
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