<template>
  <div id="app">
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
