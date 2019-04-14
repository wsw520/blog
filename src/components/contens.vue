<template>
  <div class="contens">
    <form v-if="flag">
      <h2>添加博客</h2>
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
      <textarea v-model="datas.neirong" placeholder="请输入内容"></textarea>
      <div>
        <h3>分类：</h3>
        <label>
         vue
         <input type="checkbox" v-model="datas.fenlei" value="vue">
        </label>
        <label>
         mysql
         <input type="checkbox" v-model="datas.fenlei" value="mysql">
        </label>
        <label>
         php
         <input type="checkbox" v-model="datas.fenlei" value="php">
        </label>
        <label>
         其他
         <input type="checkbox" v-model="datas.fenlei" value="其他">
        </label>
      </div>
      <!-- 添加.prevent去掉默认事件防止页面刷新 -->
      <button @click.prevent="_post">添加</button>
    </form>
    <div class="tianjia" v-else="!flse">发布成功！</div>
  </div>
</template>

<script>
export default {
  name: 'contens',
  data () {
    return {
       datas:{
         biaoti:'',
         neirong:'',
         fenlei:[]
       },
       flag:true
    }
  },
  methods:{
    // 点击向服务器post数据   
    // emulateJSON 的作用：Web服务器无法处理编码为 application/json 的请求，你可以启用 emulateJSON 选项
    _post:function(){
      if(this.datas.biaoti && this.datas.neirong){
        this.$http.post("http://bk.wsw520.top/post.php",{
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
.contens{
   max-width: 900px;
   margin: 72px auto;
   padding: 8px;
   height: 100vh;
}
@media screen and (max-width: 500px) {
   .contens{
    margin: 82px auto;
   }
} 
.contens h2{
   margin-bottom: 10px;
   font-size: 20px;
}
.contens h3{
   margin: 10px 0px 10px;
   font-size: 16px;
}
input[type='text'],textarea{
  width: 100%;
  height: 30px;
  border: 1px solid #ffffff;
  background: none;
  border-radius: 3.5px;
}
textarea{
  height: 150px;
}
input[type='checkbox']{
  margin-right: 20px;
  vertical-align: top;
}
.contens button{
  float: right;
  width: 50px;
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
