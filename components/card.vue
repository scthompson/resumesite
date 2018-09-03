<template>
  <div class="card">
      <div class="card-header" style="text-align:center;">
        <div class="card-title">
          <h5 class="title fa" :class="[icon]"></h5>
        </div>
        <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>
      </div>
      <div class="card-body">
        {{body}}
      </div>
  </div>
</template>

<script>

export default {
  name: 'card',
  props: {
    icon: String,
    subtitle: String,
    body: String
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    font-size: 3em;
  }
  .card-header {
    text-align:center;
  }

  .card:hover .card-header {
    background-color: rgba(0, 0, 0, 0.125);
    color: #0073e6;
  }
  .card:hover .card-body {
    background-color: rgba(0, 0, 0, 0.03)
  }
  .card {
    height:100%;
  }
</style>
