<template>
  <div id="app">
    <!-- 添加博客组件 -->
    <!-- <contens/> -->
    <!-- 博客主页 -->
    <!-- <zonglan/> -->
    <!-- 路由导航 -->
    <routerv/>
    <!-- 路由视图 -->
    <router-view></router-view>
    <footr/>
  </div>
</template>

<script>

//添加博客
import contens from './components/contens'
//博客列表
import zonglan from './components/zonglan'
//博客导航(路由)
import routerv from './components/routerv'
//博客详情页
import xiangqing from './components/xiangqing'
//关于页
import admin from './components/admin'
//底部模板
import footr from './components/footr'

export default {
  name: 'App',
  components: {
    contens,
    zonglan,
    routerv,
    xiangqing,
    admin,
    footr
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
a{
  text-decoration: none;
  color:#000;
  border-radius: 5px;
  padding: 5px;
}
a:hover{
  text-decoration: none;
}
ul{
  list-style: none;
}
body{
  background: url(./assets/body_repeat.png);
}
html,body{
  height: 100%;
}
@media screen and (max-width: 800px) {
  #app {
    height: 100%;
  }
}
@media screen and (min-width: 800px) {
  #app {
  }
}
</style>
