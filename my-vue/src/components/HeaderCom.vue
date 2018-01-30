<template>
<div class="bigbox">
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
          <ul > 
            <li class="black" :class="{redsize:flag==index}" @click="redBtn(index)" v-for="(item,index) in nav">{{item.title}}</li>
          </ul>
        </div>
      </div>
      <i class="iconfont icon-xiangxia"></i>
    </div>
  </div>
  <div class="lunbo">
    <mt-swipe :auto="2000">
      <mt-swipe-item class="banner" v-for="item in list">
        <img :src="item.imgs">
      </mt-swipe-item>
    </mt-swipe>      
  </div>
  <div class="more">
    <ul>
      <li v-for="item in more">
        <img :src="item.imagePath" alt="图片">
      </li>
    </ul>
  </div>
  <div class="time">
    <div class="buy">
      <div class="xian">
        <i class="iconfont icon-fanxiutuihuo"></i>
        <p>限时购</p>
      </div>
      <div class="numb">
        <div class="two">21</div>
        <i>:</i>
        <div class="three">23</div>
        <i>:</i>
        <div class="five">25</div>
        <span class="end">后结束</span>
      </div>
      <div class="day">每天10:00开抢</div>
    </div>
    <div class="buylist">
      <div class="one">
        <div>
          <ul>
            <li>
              <img src="../assets/imgs/1.jpg">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="swipe">
    <div class="image">
      <img src="../assets/imgs/2.png">
    </div>
    <div class="imgs">
      <img src="../assets/imgs/3.jpg">
    </div>
  </div>
  <div class="pic">
    <div class="six">
      <img src="https://img2.ch999img.com/newstatic/765/34c5b58da12d04.jpg">
    </div>
    <div class="sixA">
      <img src="https://img2.ch999img.com/newstatic/766/36b7bf887749c5.jpg">
    </div>
    <div class="sixB">
      <img src="https://img2.ch999img.com/newstatic/771/36d4a6928481af.jpg">
    </div>
  </div>
  <div class="picA">
    <div class="sixC">
      <img src="https://img2.ch999img.com/newstatic/770/34c7163afdbb89.jpg">
    </div>
    <div class="sixD">
      <img src="https://img2.ch999img.com/newstatic/766/36d4ec0d65f7b4.jpg">
    </div>
  </div>
  <div class="peo">
    <div class="new">
      <img src="https://img2.ch999img.com/newstatic/769/31e2cadbf0a546.jpg">
    </div>
    <div class="btn">
      <img src="https://img2.ch999img.com/newstatic/770/31e93b6aa7a531.jpg">
    </div>
  </div>
  <!-- 为你优选 -->
  <div class="you">
    <h2>为你优选</h2>
    <div class="youlist">
      <div class="iphone">
        <div class="souji">
          <ul>
            <li>
              <div class="art">
                <img src="https://img2.ch999img.com/pic/product/440x440/20170518101834118.jpg" >
              </div>
              <div class="fontsize">
                <p>苹果5s/SE半屏钢化膜</p>
                <p>完美贴合 弧边工艺</p>
                <p>￥59.00</p>
              </div>
            </li>
            <li>
              <div class="art">
                <img src="https://img2.ch999img.com/pic/product/440x440/20170518101834118.jpg" >
              </div>
              <div class="fontsize">
                <p>苹果5s/SE半屏钢化膜</p>
                <p>完美贴合 弧边工艺</p>
                <p>￥59.00</p>
              </div>
            </li>
            <li>
              <div class="art">
                <img src="https://img2.ch999img.com/pic/product/440x440/20170518101834118.jpg" >
              </div>
              <div class="fontsize">
                <p>苹果5s/SE半屏钢化膜</p>
                <p>完美贴合 弧边工艺</p>
                <p>￥59.00</p>
              </div>
            </li>
          </ul>
          <!-- <p>fffffffffergs4gyshufdsdiufsghsfdgggggggggggggggggggghhgb</p> -->
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
// 坑  'axios'  要使用'', 双引号报错Cannot read property 'protocol' of undefinedat isURLSameOrigin
  export default{
    name:'HeaderCom',
    data(){
      return{
        nav:[],
        more:[],
        picture:[],
        flag:0,
        list:[
          {imgs:"https://img2.ch999img.com/newstatic/767/362f5f8da217d7.jpg"},
          {imgs:"https://img2.ch999img.com/newstatic/766/33b41926ace0e8.jpg"},
          {imgs:"https://img2.ch999img.com/newstatic/768/36cf9d4bbcc821.jpg"},
          {imgs:"https://img2.ch999img.com/newstatic/767/33b41d473def50.jpg"},
          {imgs:"https://img2.ch999img.com/newstatic/766/36172d3750b880.jpg"},
          {imgs:"https://img2.ch999img.com/newstatic/766/34cf39a538d8fa.jpg"},
          {imgs:"https://img2.ch999img.com/newstatic/766/36172d3750b880.jpg"}
        ]
      }
    },
    methods:{
      redBtn:function(index){
        console.log(this)
        console.log(index);
        this.flag = index;
        console.log(this.flag);
      }
    },
    mounted:function(){
      var that = this;
      axios.get('/web/api/floors/v1?label=0&page=1&random=0')
      .then(function(res){
        console.log(res);//认真一点
        that.nav = res.data.data.label;
        that.more = res.data.data.container.floor[0].content;
        that.picture = res.data.data.container.floor[4].content;
      })
    }
  }
</script>
<style scoped>
.bigbox{
  min-height:40.96rem;
  _height:40.96rem;
  background:#f5f5f5;
}
.box{
  height:1.54rem;
  background:#fff;
}
.pos{
  height:0.87rem;
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
  color:red;
}
.lunbo{
  height:3.2rem;
  background:#fff;
}
.lunbo .banner{
  height:3.2rem;
}
.lunbo .banner img{
  height:100%;
}
.more{
  height:1.27rem;
  background:#fc224a;
}
.more ul{
  width:100%;
  float: left;
}
.more ul li{
  height:1.27rem;
  float: left;
  padding-left:0.01rem;
}
.more ul li img{
  height:100%;
}
.time{
  height:1.88rem;
  background:pink;
  margin-top:0.2rem;
}
.buy{
  font-size:0.26rem!important;
  width:2.37rem;
  height:1.88rem;
  background:#fff;
  float:left;
}
.buy .xian{
  float:left;
  width:2.37rem;
  color:#f36397;
  padding-top: 0.4rem;
  padding-left: 0.2rem;
}
.buy .xian i,.buy .xian p{
  font-size:0.30rem!important;
  float: left;
}
.buy .numb{
  float:left;
  width:2.37rem;
  color:#f36397;
  padding-top: 0.1rem;
  padding-left: 0.2rem;
}
.buy .numb div{
  width:0.4rem;
  height:0.4rem;
  background: #000;
  border-radius: 0.1rem;
  font-size:0.28rem!important;
  text-align: center;
  line-height:0.4rem;
  color:#fff;
  float:left;
}
.buy .numb i{
  font-size:0.28rem!important;
  color:#000;
  float:left;
}
.buy .numb .end{
  font-size:0.24rem!important;
  color:#000;
  float:left;
}
.day{
  font-size: 0.28rem;
  color:#9c9c9c;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
}
.buylist{
  width:4.02rem;
  height: 1.88rem;
  background:#fff;
  float:left;
  overflow: hidden;
}
.one{
  width:9.02rem;
  height:1.88rem;
  background: #fff;
  overflow-x:scroll;
}
.one ul{
  float: left;
}
.one ul li{
  width:3.75rem;
  height:1.88rem;
  float: left;
}
.one ul li img{
  height:100%;
}
.swipe{
  height:0.7rem;
  margin:0.16rem;
  float:left;
}
.swipe .image{
  width:0.7rem;
  height:0.7rem;
  float: left;
}
.swipe .image img{
  height:100%;
}
.swipe .imgs{
  width:5.32rem;
  height:0.7rem;
  float:right;
}
.swipe img{
  height:100%;
}
.pic{
  height:2.14rem;
  background:pink;
  float: left;
}
.pic .six{
  width:3.18rem;
  float: left;
  height:2.14rem;
}
.pic .sixA,.pic .sixB{
  float: left;
  height:2.14rem;
  width:1.59rem;
}
.picA{
  height:1.03rem;
  background:pink;
  float: left;
}
.picA>.sixC,.picA>.sixD{
  height:1.03rem;
  width:3.18rem;
  border:0;
  float: left;
  background: #fff2f9;
}
.picA>.sixD{
  background: #f2f8f4;
}
.pic .six img,.pic .sixA img,.pic .sixB img{
  height:100%;
}
.picA>.sixC>img,.picA>.sixD>img{
  height:100%;
}
.peo{
  height:1.06rem;
}
.peo>.new,.peo>.btn{
  width:50%;
  height:1.06rem;
  float: left;
}
.peo>.new>img,.peo>.btn>img{
  height:100%;
}
.you{
  height:4.6rem;
  background:#fff;
  float: left;
  margin-top:0.2rem;
}
.you h2{
  width:6.4rem;
  height:0.75rem;
  text-align: center;
  line-height:0.75rem;
  font-size: 0.25rem;
  color:#df3a91;
  background:#fff;
}
.youlist{
  width:6.4rem;
  height:3.92rem;
  background:#fff;
  overflow:hidden;
  margin-top:0.2rem;
}
.iphone{
  height:3.95rem;
  overflow:hidden;
}
.souji{
  width:6.4rem;
  height:3.95rem;
  overflow:hidden;
  overflow-x:scroll;
}
.souji ul{
  float: left;
  width:12rem;
  height:3.95rem;
  overflow-x:scroll;
}
.souji ul li{
  width:2.4rem;
  height:3.95rem;
  /*background:#ccc;*/
  margin:0 0.1rem;
  float: left;
}
.souji ul li .art{
  width:2.4rem;
  height:2.4rem;
  border:1px solid #ccc;
}
.souji ul li .art img{
  height:100%;
}
.souji ul li .fontsize{
  font-size:0.22rem;
  height:1.26rem;
}
.souji ul li .fontsize p:nth-child(1){
  color:#000;
  line-height:0.38rem;
}
.souji ul li .fontsize p:nth-child(2){
  color:#9c9c9c;
  line-height:0.38rem;
}
.souji ul li .fontsize p:nth-child(3){
  color:red;
  line-height:0.38rem;
}
</style>