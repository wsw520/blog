<template>
<div id="">

  <div class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link class="navbar-brand hidden-sm" to="/">博客首页
      </router-link>
    </div>
    <div class="navbar-collapse collapse" role="navigation">
      <ul class="nav navbar-nav">
        <li>
           <router-link to="/contens">写博客</router-link>
        </li>
        <li>
           <router-link to="/admin">管理</router-link>
        </li>
      </ul>
      <ul v-if="!if_login" class="nav navbar-nav navbar-right hidden-sm">
        <li>
            <router-link to="/login">登录</router-link>
        </li>
        <li>
            <router-link to="/zhuce">注册</router-link>
        </li>
      </ul>
      <ul v-else-if="if_login" class="nav navbar-nav navbar-right hidden-sm">
        <li>
            <a href="#">{{username}}</a>
        </li>
        <li>
            <a href="#" @click="tuichu">退出</a>
        </li>
      </ul>
    </div>
  </div>
  </div>

 </div>

<!--   <div id="routerv">
    <div class="routerv">
     <ul>
       <li>
         <router-link to="/" exact>博客首页</router-link>
       </li>
       <li>
         <router-link to="/contens" exact>写博客</router-link>
       </li>
       <li>
         <router-link to="/about" exact>关于</router-link>
       </li>
       <li>
         <router-link to="/login" exact>登录</router-link>
       </li>
       <li>
         <router-link to="/zhuce" exact>注册</router-link>
       </li>
     </ul>
    </div>
  </div> -->
</template>

<script>

export default {
  name: 'routerv',
  data(){
    return{
      // if_login:false,
      // username:''
    }
  },
  mounted(){
     //获取本地sessionStorage数据
     var name = sessionStorage.getItem("name");
     if(name!=null){
        //数据存到vuex
        this.$store.commit("com_name",name)
        // this.username=name;
     }
  },
  methods:{
    //点击退出按钮
    tuichu(){
      if(confirm('确定退出？')){
        //删除sessionStorage中的name
        sessionStorage.removeItem("name");
        //传一个空数据过去 
        this.$store.commit("com_name",null)
        this.$router.push({path:'/'})
      }
    }
  },
  computed:{
     //获取数据方法1=>在this.$store.getters中获取用户名
     username(){
        // get(){
            return this.$store.getters.usename
        // },
        // set(){

        // }
     },
     //获取数据方法2=>在this.$store.state中获取if_login
     if_login(){
         return this.$store.state.if_login
     }
  }

}

//手机端点击导航选择隐藏
$(document).ready(function(){
  $(".container a").click(function(){
    $(".navbar-collapse").removeClass("show");;
  });
});

</script>

<style>
.container {
    font-size: 18px;
}
#routerv{
  background: #00bfd8;
  width: 100%;
}
.routerv{
  background: #00bfd8;
  max-width: 900px;
  height: 50px;
  margin: 72px auto;
  line-height: 50px;
  padding: 8px;
  font-size: 21px;
}
@media screen and (max-width: 500px) {
   .routerv{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
   }
} 
.routerv ul li{
  margin-right: 25px;
  float: left;
}
/*点击导航的背景和字体*/
/*.router-link-active{
  background: #3db0bf;
  color: white;
}*/
</style>
