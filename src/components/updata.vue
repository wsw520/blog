<template>
  <div class="updata">
    <form v-if="flag">
      <h2>修改博客</h2>
      <hr>
      <h3>
         标题：
         <span class="span_">*</span>
         <span v-if="datas.biaoti?false:true">请输入</span>
      </h3>
      <input type="text" v-model="datas.biaoti" placeholder="请输入标题">
      <h3>
         内容：
         <span class="span_">*</span>
         <span v-if="datas.neirong?false:true">请输入</span>
      </h3>
      <textarea v-model="datas.neirong" placeholder="请输入内容">
      </textarea>
      <div>
        <h3>分类：</h3>
        <label>vue</label>
         <input type="checkbox" value="vue" v-model="datas.fenlei">
        <label>mysql</label>
         <input type="checkbox" value="mysql" v-model="datas.fenlei">
        <label>php</label>
         <input type="checkbox" value="php" v-model="datas.fenlei">
        <label>其他</label>
         <input type="checkbox" value="其他" v-model="datas.fenlei">
      </div>
      <!-- 添加.prevent去掉默认事件防止页面刷新 -->
      <button @click.prevent="_post">确定修改</button>
    </form>
    <div class="tianjia" v-else="!flse">修改成功！</div>
  </div>
</template>

<script>
export default {
  name: 'updata',
  data () {
    return {
       datas:{
         biaoti:'',
         neirong:'',
         fenlei:[]
       },
       flag:true,
       id:this.$route.params.id
    }
  },
  created(){
     this.$http.get("http://bk.wsw520.top/post.php").then(function(data){
           var data=data.body;
           // 循环获取相应id的数据
           for(var key in data){
             if(data[key].id==this.id){
                this.datas.biaoti=data[key].biaoti
                this.datas.neirong=data[key].neirong
                var arr=[];
                arr.push(
                    data[key].fenlei_1,
                    data[key].fenlei_2,
                    data[key].fenlei_3,
                    data[key].fenlei_4
                )
                //过滤空值
                for(var i in arr){
                   if(arr[i]!=''){
                     this.datas.fenlei.push(arr[i])
                   }
                }
             }
           }
     })
  },
  methods:{
    // 点击向服务器post数据   
    // emulateJSON 的作用：Web服务器无法处理编码为 application/json 的请求，你可以启用 emulateJSON 选项
    _post:function(){
      if(this.datas.biaoti && this.datas.neirong){
        this.$http.post("http://bk.wsw520.top/post.php",{
           upid:this.id,
           biaoti:this.datas.biaoti,
           neirong:this.datas.neirong,
           fenlei:this.datas.fenlei
        },{emulateJSON:true}).then(function(data){
             // console.log(data)
             this.flag=false;
        })
      }else{
        alert("请输入信息")
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.updata{
   max-width: 900px;
   margin: 72px auto;
   padding: 8px;
   height: 100vh;
}
@media screen and (max-width: 500px) {
   .updata{
    margin: 82px auto;
   }
} 
.updata h2{
   margin-bottom: 10px;
   font-size: 20px;
}
.updata h3{
   margin: 10px 0px 10px;
   font-size: 16px;
}
input[type='text'],textarea{
  width: 100%;
  height: 30px;
  border: 1px solid #ffffff;
  border-radius: 3.5px;
  background: none;
}
textarea{
  height: 150px;
}
input[type='checkbox']{
  margin-right: 20px;
  vertical-align: top;
}
.updata button{
  float: right;
  width: 75px;
  height: 30px;
  margin-top: 35px;
  color: #fff;
  background-color: #5bc0de;
  border: 1px solid transparent;
  border-radius: 4px;
}
.tianjia{
  text-align: center;
  font-size: 21px;
  background: #ccc;
  max-width: 600px;
  padding: 9px;
  margin: 0 auto;
  color: red;
}
span{
  font-size: 12px;
  color: red;
}
.span_ {
  float: left;
}
</style>
