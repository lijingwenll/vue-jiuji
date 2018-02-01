<template>
  <div class="loginbox">
    <div class="logintop">
      <router-link to="/">
        <i class="iconfont icon-houtui"></i>
      </router-link>
      <p>账号登录</p>
      <router-link to="/register">
        <span>注册</span>
      </router-link>
    </div>
    <div class="uname">
      <i class="iconfont icon-wode"></i>
      <input type="text" name="username" v-model="username" placeholder="手机号/邮箱/用户名" />
    </div>
     <div class="uname">
      <i class="iconfont icon-14"></i>
      <input type="password" name="psw" v-model="psw" placeholder="密码" />
    </div>
    <button class="loginbtn" @click="loginbtn()">登录</button>
    <p class="go">找回密码</p>
    <div class="loginimg">
      <img src="../assets/imgs/q.jpg">
    </div>
  </div>
</template>

<script>
import axios from "axios"
  export default{
    name:"login",
    data(){
      return{
        username:"",
        psw:""
      }
    },
    methods:{
      loginbtn:function(){
         axios.post('/api/login', {
          username: this.username,
          psw: this.psw,
        })
        .then(function (res) {
          console.log(res);
          if(res.data.code == 1){
              window.location.href = "/"
          }else{
            alert(res.data.message)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>
.loginbox{
  height:11.36rem;
  background: #f6f6f6;
}
.logintop{
  height:0.89rem;
  background:#f4f4f4;
  font-size:0.28rem!important;
  border-bottom:1px solid #ccc;
}
.logintop i{
  float:left;
  width:0.89rem;
  line-height:0.89rem;
  text-align:center;
}
.logintop p{
  float:left;
  width:2rem;
  line-height:0.6rem;
  text-align:center;
  background: #fe6606;
  border-radius: 0.2rem;
  margin:0.15rem 0 0 1.3rem;
}
.logintop span{
  float:right;
  width:0.89rem;
  line-height:0.89rem;
  text-align:center;
}
.uname{
  height: 0.89rem;
  background:#fff;
  border-bottom:1px solid #ccc;
}
/*.uname a{
  float:left;
}*/
.uname  i{
  float: left;
  color: #afafaf;
  line-height:0.89rem;
  font-size:0.28rem!important;
  padding-left:0.3rem;
  font-weight:900;
}
.uname input{
  float: left;
  color: #afafaf;
  height:0.89rem;
  border:0;
  outline: none;
  background:#fff;
  font-size:0.28rem!important;
  padding-left:0.3rem;
}
.loginbtn{
  width:6rem;
  height:0.79rem;
  background:#fe6606;
  border:0;
  border-radius:0.1rem;
  margin-left: 0.2rem;
}
.go{
  font-size:0.28rem;
  color:blue;
  float:right;
  margin:0.3rem 0.2rem 0 0;
}
.loginimg{
  height:1.87rem;
}
.loginimg img{
  height:100%;
}
</style>