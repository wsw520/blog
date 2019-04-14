<template>
  <div id="footr">
     <div class="footr">
        <div>Copyright © 2019 博客 </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'footr',
}
</script>

<style scoped>
#footr{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #02707d;
    margin-top: 25px;
}
.footr{
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    background: #02707d;
    color: #fff;
    clear: both;
    position: absolute;
    right: 0;
    left: 0;
}
</style>
