<template>
  <div>
    <v-header-info></v-header-info>
    <router-view></router-view>
    <v-footer-menu></v-footer-menu>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
</style>
