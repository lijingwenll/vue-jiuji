<template>
  <div class="box">
    <div class="top">
      <i class="iconfont icon-houtui"></i>
      <h2>商品详情</h2>
      <span class="iconfont icon-fenlei"></span>
    </div>
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="detaillist">
          <img src="../assets/imgs/5.jpg">
        </mt-swipe-item>
        <mt-swipe-item class="detaillist">
          <img src="../assets/imgs/7.jpg">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <p class="lewoo">乐物（lewoo）10000mAh乐享数显快充移动电源灰色 </p>
    <p class="led">LED智能显示电量，type-接口输入输出二合一，大电流快速快速双向快充</p>
    <div class="price">
      <p>￥99.0</p>
      <div>价格走势</div>
      <span>降价通知</span>
    </div> 
    <div class="point">
      <div>已 选</div>
      <div>灰色一件</div>
      <div>. . .</div>
    </div> 
    <div class="point">
      <div>送 至</div>
      <div>北京市 市辖区 昌平区</div>
      <div>. . .</div>
    </div> 
    <div class="open">
      <div>送 至</div>
      <div>从昆明仓发货,17:00前完成下单，预计3-7天送达</div>
    </div> 
     <div class="point">
      <div>快递运输</div>
      <div>（免费邮寄）</div>
      <div>. . .</div>
    </div> 
    <div class="number">
      <p>基本参数</p>
      <p>商品名称：乐物（lewoo）10000mAh乐享数显快充移动电源</p>
      <p>品牌乐物（Lewoo）</p>
      <p>分类：移动电源</p>
    </div>
    <div class="speak">
      <div>评论(234)</div>
      <div>好评（100%）</div>
    </div>
    <div class="search">
      <div class="look">查看更多</div>
    </div>
    <div class="home">
      <p>厂家维修点</p>
      <h2>></h2>
    </div>
     <div class="home">
      <p>相关配件</p>
      <h2>></h2>
    </div>
     <div class="home">
      <p>维修配件</p>
      <h2>></h2>
    </div>
  <div class="bottom">footer</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
    	
    }
  },
  mounted:function(){
  }
}
</script>

<style scoped>
.box{
  min-height:20rem;
  background: #f4f4f4;
}
.top{
  height:0.88rem;
  background:#f4f4f4;
}
.top i{
  color:#6a6a6a;
  float:left;
  width:1rem;
  text-align: center;
  line-height: 0.88rem;
  font-size:0.3rem!important;
  font-weight: 900;
}
.top h2{
  color:#6a6a6a;
  float:left;
  width:4.3rem;
  text-align: center;
  font-size:0.34rem!important;
  line-height: 0.88rem;
}
.top span{
  color:#6a6a6a;
  float:left;
  width:1rem;
  text-align: center;
  font-size:0.3rem!important;
  font-weight: 900;
  line-height: 0.88rem;
}
.banner{
  width:100%;
  height:5.92rem;
  background:red;
}
.detaillist {
 width:100%;
  height:5.92rem;
  background:#fff;
}
.detaillist img{
  height:100%;
}
.lewoo{
  width:100%;
  height:1.38rem;
  background:#fff;
  float:left;
  font-size: 0.34rem;
  color:#000;
  text-indent:1.5em;
  line-height:0.6rem;
}
.led{
  width:100%;
  height:0.79rem;
  float:left;
  font-size: 0.30rem;
  color:red;
  text-indent:1.5em;
  background:#fff;
  line-height:0.38rem;
}
.price{
  width:100%;
  height:0.82rem;
  background:#fff;
  float: left;
  font-size:0.28rem;
}
.price p{
  font-size:0.34rem;
  line-height:0.82rem;
  padding-left:0.3rem;
  color:red;
  float:left;
}
.price div{
  width:1.31rem;
  height:0.44rem;
  font-size:0.28rem;
  line-height:0.44rem;
  margin-left: 1rem;
  margin:0.2rem;
  float:left;
  border:1px #ccc solid;
  text-align: center;
}
.price span{
  width:1.31rem;
  height:0.44rem;
  font-size:0.28rem;
  line-height:0.44rem;
  margin-left: 1rem;
  margin:0.2rem;
  float:left;
  border:1px #ccc solid;
  text-align: center;
}
.point{
  width:100%;
  height:0.89rem;
  background: #fff;
  float: left;
  margin-top: 0.2rem;
}
.point div:nth-child(1){
  color:#ccc;
  font-size:0.28rem;
  float: left;
  line-height:0.89rem;
  margin-left:0.2rem;
}
.point div:nth-child(2){
  color:#000;
  font-size:0.28rem;
  float: left;
  line-height:0.89rem;
  margin-left:0.2rem;
}
.point div:nth-child(3){
  color:#ccc;
  font-size:0.36rem;
  float: right;
  line-height:0.89rem;
  margin-right:0.2rem;
}
.open{
  height:1rem;
  width:100%;
  background:#fff;
  float:left;
  font-size:0.28rem;
}
.open div:nth-child(1){
  width:0.6rem;
  float: left;
  line-height:1rem;
  margin-left: 0.2rem;
  color:#fff;
}
.open div:nth-child(2){
  width:4rem;
  float: left;
  line-height:0.5rem;
  margin-left: 0.2rem;
  text-indent:2em;
  color:red;
}
.number{
  width:100%;
  height:2.97rem;
  background:#fff;
  float:left;
  font-size:0.28rem;
  margin-top: 0.2rem;
}
.number p{
  margin-left:0.2rem;
  line-height:0.5rem;
}
.speak{
  height:0.89rem;
  width:100%;
  background:#fff;
  float:left;
  font-size: 0.28rem;
  margin-top: 0.2rem;
}
.speak div:nth-child(1){
  line-height: 0.89rem;
  float:left;
  padding-left: 0.2rem;
}
.speak div:nth-child(2){
  line-height: 0.89rem;
  float:right;
  padding-right: 0.2rem;
}
.search{
  width:100%;
  height:0.89rem;
  font-size: 0.34rem;
  float:left;
  background: #fff;
  border-top:1px solid #ccc;
}
.search .look{
  width:2.70rem;
  height:0.7rem;
  border:1px solid #ccc;
  border-radius: 0.1rem;
  text-align: center;
  line-height:0.7rem;
  background: #fff;
  margin-left: 1.7rem;
  margin-top: 0.1rem;
}
.home{
  width:100%;
  height:0.89rem;
  background: #fff;
  float: left;
  font-size: 0.28rem;
  margin-top: 0.1rem;
}
.home p{
  line-height: 0.89rem;
  float:left;
  padding-left:0.2rem;
  color:green;
}
.home h2{
  line-height: 0.89rem;
  float:right;
  padding-right: 0.2rem;
}
.bottom{
  width:1rem;
  height:0.4rem;
  background:red;
  font-size:0.8rem;

}
</style>
