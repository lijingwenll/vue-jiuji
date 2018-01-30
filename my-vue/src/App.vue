<template>
  <div id="app">
    <IndexPage></IndexPage>

    <router-view/>
    <FooterCom></FooterCom>
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
