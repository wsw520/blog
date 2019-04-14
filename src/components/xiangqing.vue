<template>
   <div id="xiangqing">
       <h2>{{dataxq.biaoti}}</h2>
       <div class="neirong" v-html="neirong_"></div>
       <div class="fenlei"">
          分类：
          <span>{{dataxq.fenlei_1}}</span>
          <span>{{dataxq.fenlei_2}}</span>
          <span>{{dataxq.fenlei_3}}</span>
          <span>{{dataxq.fenlei_4}}</span>
       </div>
   </div>
</template>

<script>
export default {
   name: 'xiangqing',
   data(){
   	   return{
   	   	   // this.$route.params.id  获取路由传来的id参数
   	   	   id:this.$route.params.id,
   	   	   dataxq:[],
           neirong_:'',
   	   }
   },
   created(){
       this.$http.get('http://bk.wsw520.top/post.php').then(function(data){
             var vdata=data.body;
             //路由传来的id
             var idx=this.id;
             //遍历数组中和路由传来的id匹配就输出相应的数据
             for(var i=0;i<vdata.length;i++){
                if(vdata[i].id==idx){
                   this.dataxq=vdata[i];
                   //获取内容部分
                   var nr=vdata[i].neirong;
                   //使用正则/\n/g替换成<br>和&lt;
                   var str= nr.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>");
                   this.neirong_=str;
                }
             };
       })
   }
}
</script>

<style scoped>
#xiangqing{
    max-width: 900px;
    background: #e8e8e8;
    padding: 85px 8px 8px 8px;
    margin: 0px auto;
    padding-bottom: 69px;
    word-break: break-all;
}
h2{
    padding-bottom: 12px;
    margin-top: 23px;
    text-align: center;
}
.fenlei{
   margin-top: 10px;
   color: #613b2e;
}
.fenlei span{
   margin-right: 8px;
}
@media screen and (max-width: 500px) {
   #xiangqing{
    padding-bottom: 69px;
   }
} 
.neirong{
   text-indent: 30px;
   line-height: 26px;
   letter-spacing: 1px;
}
</style>