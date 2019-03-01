<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from "./router";

export default {
  name: "app",
  router
};
</script>

<style>
body,
html,
#app {
  height: 100%;
}
</style>
