<template>
  <div id="app">
    <Classification />
    <HeaderCom></HeaderCom>
    <IndexPage></IndexPage>
    <router-view/>
  </div>
  
</template>

<script>
import IndexPage from  './components/IndexPage'
import HeaderCom from  './components/HeaderCom'
import Classification from './components/Classification';
export default {
  name: 'App',
  components: {
  	Classification,
		IndexPage:IndexPage,
    HeaderCom:HeaderCom,
   }
}
</script>

<style>
@import "./assets/css/common";
@import "./assets/iconfont/iconfont";
</style>
