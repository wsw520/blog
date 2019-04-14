//引入组件
import zonglan from './components/zonglan.vue'
import contens from './components/contens.vue'
import xiangqing from './components/xiangqing.vue'
import admin from './components/admin.vue'
import login from './components/login.vue'
import zhuce from './components/zhuce.vue'
import store from './store/store.js'
import updata from './components/updata.vue'

export var routerjs = [
   {
   	path:"/",
   	component:zonglan
   },
   {
   	path:"/contens",
   	component:contens
   },
   {
   	path:"/xq/:id",
   	component:xiangqing
   },
   {
      path:'/admin',
      component:admin,
      beforeEnter: (to,from,next)=> {//路由独享的守卫
            //获取vuex用户名
            var name=store.getters.usename
            //获取本地数据用户名
            var str_name=sessionStorage.getItem("name")
            if(name || str_name){
               next()
            }else{
               alert("请登陆！")
               next({path:'/login'})
            }
      }
   },
   {
      path:'/login',
      component:login
   },
   {
      path:'/zhuce',
      component:zhuce
   },
   {
      path:'/updata/:id',
      component:updata
   },
   //路由重定向
   {  path:'*',
      redirect:'/'
   }  
]

