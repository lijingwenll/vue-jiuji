<template>
  <div id="app">
  <FooterCom></FooterCom>
  <router-view/>
  </div>
  
</template>

<script>
import HeaderCom from  './components/HeaderCom'

export default {
  name: 'App',
  components: {
    HeaderCom:HeaderCom,
   }
}
</script>

<style>
@import "./assets/css/common";
@import "./assets/iconfont/iconfont";
</style>
