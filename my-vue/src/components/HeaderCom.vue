<template>
<div class="bigbox">
  <div class="box">
    <!-- 定位 -->
    <div class="pos">
      <div class="area">
        {{position}}
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
            <li>
              <div class="art">
                加载全部
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- 手机精品 -->
  <div class="mobile">
    <h3>手机精品</h3>
    <div class="age" v-for="item in mobile">
      <img :src="item.imagePath"/>
    </div>
    <div class="age" v-for="item in mobile_A">
      <img :src="item.imagePath"/>
    </div>
    <div class="small" v-for="item in mobile_B">
      <img :src="item.imagePath"/>
    </div>
  </div>
  <!-- 办公专家 -->
  <div class="mobile">
    <h3>办公专家</h3>
    <div class="age" v-for="item in work">
      <img :src="item.imagePath"/>
    </div>
    <div class="age" v-for="item in work_A">
      <img :src="item.imagePath"/>
    </div>
    <div class="small" v-for="item in work_B">
      <img :src="item.imagePath"/>
    </div>
  </div>
  <!-- 智能生活 -->
  <div class="self">
    <h3>智能生活</h3>
    <div class="age" v-for="item in self">
      <img :src="item.imagePath"/>
    </div>
    <div class="small" v-for="item in self_A">
      <img :src="item.imagePath"/>
    </div>
  </div>
  <!-- 发现好货 -->
  <div class="goods clearfix">
    <h4>发现好货</h4>
    <ul class="goodslist">
      <li v-for = "item in package"> 
        <div class="listimg">
          <img :src="item.imagePath">
        </div>
        <p class="screen">{{item.sellingPoint}}</p>
        <div class="price">
          <p>{{item.title}}</p>
          <p>{{item.price}}</p>
        </div>
      </li>
      <li v-for = "item in find"> 
        <div class="listimg">
          <img :src="item.imagePath">
        </div>
        <p class="screen">{{item.sellingPoint}}</p>
        <div class="price">
          <p>{{item.title}}</p>
          <p>{{item.price}}</p>
        </div>
      </li>
    </ul>
  </div>
  <div class="bottom">footer</div>
</div>
</template>
<script>
import axios from 'axios'
  export default{
    name:'HeaderCom',
    data(){
      return{
        position:"昌平区",
        nav:[],
        more:[],
        picture:[],
        mobile:[],
        mobile_A:[],
        mobile_B:[],
        work:[],
        work_A:[],
        work_B:[],
        self:[],
        self_A:[],
        package:[],
        find:[],
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
        this.flag = index;
        console.log(this.flag);
      }

    },
    mounted:function(){
      var that = this;
      axios.get('/web/api/floors/v1?label=0&page=1&random=0')
      .then(function(res){
        console.log(res);
        that.nav = res.data.data.label;
        that.more = res.data.data.container.floor[0].content;
        that.picture = res.data.data.container.floor[4].content;
        that.mobile = res.data.data.container.floor[6].content;
        that.mobile_A = res.data.data.container.floor[7].content;
        that.mobile_B = res.data.data.container.floor[8].content;
        that.work = res.data.data.container.floor[9].content;
        that.work_A = res.data.data.container.floor[10].content;
        that.work_B = res.data.data.container.floor[11].content;
        that.self = res.data.data.container.floor[12].content;
        that.self_A = res.data.data.container.floor[13].content;
        that.package = res.data.data.container.floor[14].content;
        that.find = res.data.data.container.floor[15].content;
      });
          // 定位
          // var that = this;
       var geolocation = new window.BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
              var geoc = new BMap.Geocoder();    
              geoc.getLocation(r.point, function(rs){
                var addComp = rs.addressComponents;
                alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
              that.position= addComp.district;
              
              });
          }else {
            console.log('failed'+this.getStatus());
          }        
        },{enableHighAccuracy: true})
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
  font-size:0.40rem;
  text-align: center;
  margin:0 0.1rem;
  float: left;
}
.souji ul li .art{
  width:2.4rem;
  height:2.4rem;
  border:1px solid #ccc;
  line-height:2.4rem;
  color:#ccc;
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
.mobile{
  width:100%;
  height:6.08rem;
  background:#fff;
  float:left;
  margin-top:0.2rem;
}
.self{
  height:3.93rem;
  width:100%;
  background:#fff;
  float:left;
  margin-top:0.2rem;
}
.mobile h3,.self h3{
  height:0.74rem;
  font-size:0.30rem;
  color:#ac9be9;
  text-align: center;
  line-height:0.74rem;
}
.mobile .age{
  width:49.5%;
  height:2.15rem;
  float:left;
}
.mobile .small{
  width:50%;
  height:1.05rem;
  float:left;
}
.self .age{
  width:24.5%;
  height:2.15rem;
  float:left;
}
.self .small{
  width:50%;
  height:1.05rem;
  float:left;
}
.mobile .age img,.mobile .small img,.self .age img,.self .small img{
  height:100%;
}
/*发现好货*/
.goods{
  min-height:6.3rem;
  _height:6.3rem;
  background:#f5f5f5;
  float:left;
  margin-top:0.2rem;
}
.goods h4{
  width:6.4rem;
  font-size: 0.28rem;
  text-align:center;
  line-height: 0.72rem;
  border-bottom:1px solid #f8fafc;
  background:#fff;
  color:#de3796;
}
.goods .goodslist{
  width:100%;
  min-height:5.22rem;
  float:left;
  border-top: 1px solid #999;
}
.goods .goodslist li:nth-child(odd){
  height:4.4rem;
  width:49%;
  background:#fff;
  margin-bottom:0.2rem;
  float:left;
}
.goods .goodslist li:nth-child(even){
  height:4.4rem;
  width:49%;
  background:#fff;
  margin-bottom:0.2rem;
  float:right;
}
.goods .goodslist li .listimg{
  height:3rem;
  float:left;
}
.goods .goodslist li .listimg img{
  height:100%;
}
.goods .goodslist li .screen{
  float: left;
  width:87%;
  height:0.52rem;
  background: #eaf5fd;
  font-size: 0.2rem;
  color:#87abd7;
  line-height:0.52rem;
  padding-left:0.4rem;
}
.goods .goodslist li .price{
  font-size: 0.2rem;
}
.goods .goodslist li .price p:nth-child(1){
  padding-left:0.4rem;
  color:#545454;
  line-height: 0.42rem;
}
.goods .goodslist li .price p:nth-child(2){
  font-size: 0.26rem;
  padding-left:0.45rem;
  color:#c70f1d;
  line-height: 0.42rem;
}
.bottom{
  width:1rem;
  height:0.4rem;
  background:red;
  font-size:0.7rem;
}
</style>