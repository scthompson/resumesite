<template>
  <div id="app">
    <HeaderMain />
    <ContentMain />
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from './components/headerMain.vue'
import ContentMain from './components/contentMain.vue'
import FooterMain from './components/footerMain.vue'

export default {
  name: 'app',
  components: {
    HeaderMain,
    ContentMain,
    FooterMain
  }
}
</script>

<style>

  body {
    margin:0;
  }
</style>
