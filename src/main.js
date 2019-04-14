// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入VueResource
import VueResource from 'vue-resource'

//引入vuex
// import {store} from './store/store.js'
import store from './store/store.js'

//引入axios
// import axios from 'axios'

//引入路由
import VueRouter from 'vue-router'
//引入创建的router.js文件
import {routerjs} from './router'

Vue.config.productionTip = false

//配置全局axios
// axios.defaults.baseURL="http://bk.wsw520.top"


//安装使用VueResource
Vue.use(VueResource)

//安装使用VueRouter
Vue.use(VueRouter)
//设置路由  mode:"history"属性去掉浏览器地址栏的#
var router=new VueRouter({
     routes:routerjs,
     mode:"history"
});


//路由全局守卫
// router.beforeEach((to,from,next)=>{
//   console.log(store.getters.usename)
//   console.log(store.getters.if_login)
//     if(to.path=='/admin'){
//        alert("请登录")
//        router.push({path:'/login'})
//     }else{
//       next()
//     }
// });


//自定义全局指令,不传参(给标题添加颜色)----html调用v-titleColor
Vue.directive("titleColor",{
      bind:function(el,binding,vnode){
      	  //随机颜色
          el.style.color='#'+Math.random().toString(16).slice(2,8);
      }
});

//自定义全局指令,传参=wih(设置#zonglan的宽度)----html调用v-sliceval
Vue.directive("sliceval",{
    bind:function(el,binding,vnode){
        if(binding.value=="wih"){
        	el.style.maxWidth="900px";
        }
    }
});


//自定义全局过滤器-截取首页文章内容
Vue.filter("contenSlice",function(val){
	   //slice(0,90)截取0到90
       return val.slice(0,90)+"..."
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
  store
})
