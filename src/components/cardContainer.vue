<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <Card icon="fa-user-circle" subtitle="About" body="Short about me"/>
      </div>
      <div class="col-md-4">
        <Card icon="fa-desktop" subtitle="Experience" body="Short experience things"/>
      </div>
      <div class="col-md-4">
        <Card icon="fa-file" subtitle="Projects" body="Add another thing here. Projects?"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './card.vue'

export default {
  name: 'cardContainer',
  props: {
    msg: String
  },
  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
