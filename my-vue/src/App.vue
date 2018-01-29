<template>
  <div id="app">
    <Classification />
    <router-view/>
  </div>
  
</template>

<script>
	import Classification from './components/Classification';
export default {
  name: 'App',
  components: {
  	Classification
  }
}
</script>

<style>
</style>
