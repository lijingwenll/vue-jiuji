<template>
  <div class="minebox">
    <div class="redtop">
      <i class="iconfont icon-shezhi"></i>
      <p>设置</p>
    </div>
    <div class="minelist">
      <div class="listred"></div>
      <div class="onefff">
        <div class="logopic">
          <img src="../assets/imgs/4.jpg">
        </div>
        <div class="listright">
          <router-link to="/login">
          <p class="login">登录</p>
          </router-link>
          <router-link to="/register">
          <p class="register">注册</p>
          </router-link>
        </div>
        <ul class="active">
          <li>
            <i>0</i>
            <p>账户余额</p>
          </li>
          <li>
            <i>0</i>
            <p>优惠券</p>
          </li>
          <li>
            <i>0</i>
            <p>积分</p>
          </li>
          <li>
            <i>0</i>
            <p>九机币</p>
          </li>
        </ul>
      </div>
      <!-- 我的订单 -->
      <div class="lists">
        <div class="liststop">
          <div class="my">我的订单</div>
          <div class="all">全部订单 ></div>
        </div>
        <ul class="alllist">
          <li>
            <i class="iconfont icon-daifukuan01"></i>
            <p>代付款</p>
          </li>
          <li>
            <i class="iconfont icon-wodeshouhuodizhi"></i>
            <p>待收货</p>
          </li>
          <li>
            <i class="iconfont icon-daipingjia20"></i>
            <p>待评价</p>
          </li>
          <li>
            <i class="iconfont icon-fanxiutuihuo"></i>
            <p>返修/退款</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"MineCom",
    data(){
      return{
        
      }
    }
  }
</script>
<style scoped>
.minebox{
  min-height:11rem;
  background: #f1f1f1;
}
.redtop{
  height:0.75rem;
  background: #ef3c44;
}
.redtop i{
  font-size:0.34rem!important;
  color:#fff;
  float:right;
  line-height:0.75rem;
  padding: 0.05rem 0.1rem 0 0.1rem;
}
.redtop p{
  font-size:0.34rem;
  color:#FFF;
  line-height:0.75rem;
  float:right;
}
.minelist{
  height:9rem;
}
.listred{
  height:0.75rem;
  background:#ef3c44; 
}
.onefff{
  width:5.8rem;
  height:3.57rem;
  background:#fff;
  border-radius:0.3rem;
  position:fixed;
  top:1rem;
  left:0.3rem;
  float: left;
}
.logopic{
  width:1.67rem;
  height:1.67rem;
  padding:0.39rem 0.13rem;
  float: left;
}
.logopic img{
  height:100%;
}
.listright{
  width:3rem;
  height:2.43rem;
  font-size:0.28rem;
  color:#000;
  float:left;
}
.listright .login{
  border-right:2px solid #7a7a7a;
}
.listright .login,.listright .register{
  float: left;
  margin-top:1.06rem;
  padding:0 0.2rem;
}
.active{
  height:0.98rem;
  float: left;
  border-radius: 0.2rem;
}
.active>li{
  height:0.97rem;
  float: left;
  font-size:0.26rem!important;
  color:#000;
  padding:0 0.335rem;
}
.active li i{
  /*float: left;*/
  display:block;
  height:0.40rem;
  text-align:center;
}
.active li p{
  /*float: left;*/
  height:0.40rem;
}
.lists{
  width:5.80rem;
  height:2.5rem;
  background:#fff;
  position:fixed;
  top:4.85rem;
  left:0.3rem;
  border-radius:0.3rem;
}
.liststop{
  height:0.9rem;
  /*background:pink;*/
  font-size:0.28rem;
  line-height:0.9rem;
  border-bottom:1px solid #ccc;
}
.liststop .my{
  height:0.9rem;
  /*background:pink;*/
  float: left;
  padding-left:0.2rem;
}
.liststop .all{
  padding-right: 0.2rem;
  float:right;
  color:#9b9b9b;
}
.alllist{
  height:0.98rem;
  float: left;
  border-radius: 0.2rem;
}
.alllist>li{
  height:0.97rem;
  float: left;
  font-size:0.26rem!important;
  color:#000;
  padding:0 0.27rem;
  line-height:0.97rem;
}
.alllist li i{
  /*float: left;*/
  display:block;
  height:0.40rem;
  text-align:center;
}
.alllist li p{
  /*float: left;*/
  height:0.40rem;
}
</style>