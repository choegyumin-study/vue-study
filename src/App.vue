<template>
  <div id="app">
    <div>
      <img src="./assets/logo.png" style="vertical-align: middle;" aria-hidden="true">
    </div>
    <router-link to="/">Dashboard</router-link>
    <router-link to="about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang="less">
  @import "styles/styles.less";
</style>
