<template>
    <!-- footer -->
    <div class="btm">
      <ul>
        <router-link to='/'>
        <li>
          <i class="iconfont icon-shouye1"></i>
          <p>首页</p>
        </li>
         </router-link>
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
        <router-link to="/mine" activeClass="act" exact>
        <li>
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
        </li>
        </router-link>
      </ul>
    </div>
</template>
<script>
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
.btm{
  width:100%;
  height:1rem;
  position:fixed;
  bottom:0;
  left:0;
  border-top: 1px solid #ccc;
  background:#fff;
  z-index: 12;
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
.act{
  color:red;
}
</style>