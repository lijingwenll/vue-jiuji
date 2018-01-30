<template>
  <div class="box">
    <!-- 定位 -->
    <div class="pos">
      <div class="area">
        昌平区
        <i class="iconfont icon-xiangxia"></i>
      </div>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <div class="down">
      <div class="yc">
        <div class="nav">
          <ul @click="redBtn()"> 
            <li class="black" :class="{redsize:flag}"  v-for="item in nav">{{item.title}}</li>
          </ul>
        </div>
      </div>
      <i class="iconfont icon-xiangxia"></i>
    </div>
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
import axios from 'axios'
// import { Navbar, TabItem } from 'mint-ui';
// 坑  'axios'  要使用'', 双引号报错Cannot read property 'protocol' of undefinedat isURLSameOrigin
  export default{
    name:'HeaderCom',
    data(){
      return{
        nav:[],
        flag:false,
      }
    },
    methods:{
      redBtn:(e)=>{
        // console.log(1)
        var e = event || window.event;
        if(e.target){
          console.log(e.target)
          e.target.className="redsize";

        }else{
          e.target.className="black";
          // removeclass="redsize";
        }
      }
    },
    mounted:function(){
      var that = this;
      axios.get('/web/api/floors/v1?label=0&page=1&random=0')
      .then(function(res){
        console.log(res);//认真一点
        that.nav = res.data.data.label;
      })
    }
  }
</script>
<style scoped>
.box{
  height:1.54rem;
  background:#fff;
}
.pos{
  height:0.87rem;
  /*background:blue;*/
  float:left;
}
.pos .area{
  float:left;
  width:1.52rem;
  line-height:0.87rem;
  text-align:center;
  font-size:0.26rem!important;
}
.pos .search{
  width:4.7rem;
  height:0.4rem;
  float:left;
  background:#f0f0f0;
  font-size:0.26rem!important;
  border-radius: 0.5rem;
  padding-left:0.1rem;
  margin-top:0.2rem;
  padding-top:0.1rem;
  color:#9c9c9c;

}
.nav{
  float:left;
  height:0.67rem;
}
.down{
  float: left;
  height:0.67rem;
}
.yc{
  float: left;
  width:5rem;
  height:0.67rem;
  overflow: hidden;
}
.nav{
  float:left;
  width:5rem;
  height:2rem;
  overflow-x:scroll;
}
.nav ul{
  width:10rem;
  float:left;
}
.nav ul .black{
  height:0.67rem;
  float:left;
  font-size:0.26rem;
  padding:0 0.15rem;
  line-height:0.67rem;
  margin-left:0.2rem;
}
.down>i{
  float:left;
  color:#000;
  line-height:0.67rem;
  margin-left:0.3rem;
  font-size:24px!important;
}
.redsize{
  height:0.67rem;
  padding:0 0.15rem;
  line-height:0.67rem;
  margin-left:0.2rem;
  float:left;
  font-size:0.26rem;
  color:blue;
  border-bottom:1px solid #000;
}
.black{
  height:0.67rem;
  padding:0 0.15rem;
  line-height:0.67rem;
  margin-left:0.2rem;
  float:left;
  font-size:0.26rem;
  color:#000;
  border-bottom:1px solid #000;
}
.btm{
  width:100%;
  height:1rem;
  /*background: red;*/
  position:fixed;
  bottom:0;
  left:0;
  border-top: 1px solid #ccc;
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