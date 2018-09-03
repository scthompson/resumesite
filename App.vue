<template>
  <div id="app">
    <HeaderMain />
    <ContentMain />
  </div>
</template>

<script>
import HeaderMain from './components/headerMain.vue'
import ContentMain from './components/contentMain.vue'

export default {
  name: 'app',
  components: {
    HeaderMain,
    ContentMain
  }
}
</script>

<style>

  body {
    margin:0;
  }
</style>
