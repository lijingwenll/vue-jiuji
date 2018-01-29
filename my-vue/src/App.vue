<template>
  <div id="app">
    <IndexPage></IndexPage>
    <router-view/>
  </div>
</template>

<script>
import IndexPage from  './components/IndexPage'

export default {
  name: 'App',
  components:{
    IndexPage:IndexPage,
  }
}
</script>

<style>
@import "./assets/css/common";
</style>
