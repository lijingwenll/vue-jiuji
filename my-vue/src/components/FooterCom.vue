<template>
  <div class="box">    
    <!-- footer -->
    <div class="btm">
      <ul>
        <li>
          <i class="iconfont icon-shouye1"></i>
          <p>首页</p>
        </li>
        <router-link to='/class'>
        <li>
          <i class="iconfont icon-fenlei"></i>
          <p>分类</p>
        </li>
        </router-link>
        <li>
          <i class="iconfont icon-xiaoxi"></i>
          <p>消息</p>
        </li>
        <li>
          <i class="iconfont icon-daohanggouwuche"></i>
          <p>购物车</p>
        </li>
        <li>
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { Navbar, TabItem } from 'mint-ui';
// 坑  'axios'  要使用'', 双引号报错Cannot read property 'protocol' of undefinedat isURLSameOrigin
  export default{
    name:'FooterCom',
    data(){
      return{
        nav:[],
        flag:false,
      }
    },
  }
</script>
<style scoped>
.box{
  height:1.54rem;
  background:#fff;
}
.btm{
  width:100%;
  height:1rem;
  /*background: red;*/
  position:fixed;
  bottom:0;
  left:0;
  border-top: 1px solid #ccc;
  background:#fff;
}
.btm ul{
  width:100%;
  float:left;
}
.btm ul li{
  font-size:0.26rem;
  color:#000;
  float: left;
  padding:0 0.35rem;
  line-height: 0.5rem;
  text-align: center;
}
</style>