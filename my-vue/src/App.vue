<template>
  <div id="app">
  <FooterCom></FooterCom>
    <router-view/>
  </div>
  
</template>

<script>
import IndexPage from  './components/IndexPage'
import HeaderCom from  './components/HeaderCom'

export default {
  name: 'App',
  components: {
		IndexPage:IndexPage,
    HeaderCom:HeaderCom,
   }
}
</script>

<style>
@import "./assets/css/common";
@import "./assets/iconfont/iconfont";
</style>
