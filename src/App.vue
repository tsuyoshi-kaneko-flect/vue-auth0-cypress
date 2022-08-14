<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <SomeWebApp msg="message"/>
</template>

<script>
import SomeWebApp from './components/SomeWebApp.vue'

export default {
  name: 'App',
  components: {
    SomeWebApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
