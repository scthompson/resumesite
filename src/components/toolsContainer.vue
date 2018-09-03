<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
          <h1><span class="badge badge-secondary">Tools</span></h1>
          <div class="container">
            <div class="row">
              <Tools title="Vue.js"></Tools>
              <Tools title="MySql"></Tools>
              <Tools title="Visual Studio Code"></Tools>
              <Tools title="Linux cli"></Tools>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Tools from './tools.vue'

export default {
  name: 'ToolsContainer',
  props: {
    
  },
  components: {
    Tools
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
