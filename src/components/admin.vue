<template>
  <div v-sliceval="'wih'" id="admin">
     <h2>文章管理</h2>
     <input type="text" v-model="sousuo" placeholder="搜索文章">
     <div v-for="(datax,index) in _sousuo" class="admin">
        <router-link v-bind:to="'/xq/'+datax.id">
           <h3 v-titleColor>{{index+1}}、{{datax.biaoti}}</h3> 
           <div class="neirong">{{datax.neirong | contenSlice}}</div>
        </router-link>
        <router-link :to="'/updata/' + datax.id">
          编辑
        </router-link>
        <router-link to="#" @click.native="_del(datax.id)">
          删除
        </router-link>
     </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data:function(){
      return{
         getdata:[],
         sousuo:''
      }
  },
  created(){
     this.$http.get("http://bk.wsw520.top/post.php").then(function(data){
           // this.getdata=data.body.slice(0,100);
           // console.log(this.getdata);
           this.getdata=data.body;
     })
  },
  methods:{
    //点击删除按钮用_del(id)传id数据过来
     _del:function(id){
         if(confirm("确定要删除？")){
             this.$http.post("http://bk.wsw520.top/del.php",{id},{emulateJSON:true}).then(res=>{
                  this.getdata=res.body;
             })
         }
     }
  },
  //计算属性computed
  computed:{ 
      //搜索文章
      _sousuo:function(){
        return this.getdata.filter((datax)=>{
          //match()方法可在字符串内检索指定的值
          return datax.biaoti.match(this.sousuo);
        })
      }
  }
}
</script>

<style scoped>
*{margin:0;padding:0;}
#admin{
  max-width: 800px;
  margin:72px auto;
  padding: 8px;
}
@media screen and (max-width: 500px) {
   #admin{
    margin: 62px auto;
   }
} 
@media screen and (min-width: 800px) {
   #admin{
    height: 100%;
   }
} 
h2{
  margin-top: 20px;
  font-size: 20px;
}
input[type="text"]{
  width: 100%;
  height: 25px;
  border-radius: 3px;
  margin: 13px 0 10px 0px;
  border: 1px solid #ffffff;
  background: none;
}
.admin{
  background: #00000014;
  border-radius: 5px;
  margin-top: 8px;
  padding: 5px;
}
.admin a:nth-child(2) , .admin a:nth-child(3){
  color: red;
}
h3{
  margin-bottom:5px;
  font-size: 16px;
}
.neirong{
  text-indent: 30px;
  line-height: 26px;
  letter-spacing: 1px;
}
</style>
