<template>
  <div id="app">
    <div>
      <img src="./assets/logo.png" style="vertical-align: middle;" aria-hidden="true">
    </div>
    <router-link to="/">Dashboard</router-link>
    <router-link to="about">About</router-link>
    <router-view></router-view>
    <div>
      Count: {{ count }}
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">Increment if odd</button>
      <button @click="incrementAsync">Increment async</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: mapGetters([
      'count',
      'recentHistory',
    ]),
    methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync',
    ]),
  };
</script>

<style lang="less">
  @import "styles/styles.less";
</style>
