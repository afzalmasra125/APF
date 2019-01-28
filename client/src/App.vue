<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router'
import Header from './components/Header.vue'

export default {
  name: 'app',
  router,
  components: {
    Header
  }
}
</script>

<style>
</style>
