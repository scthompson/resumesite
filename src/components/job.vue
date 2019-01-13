<template>
  <div class="card">
    <div class="card-body">
      <div class="jobTitle">
        <strong>{{title}}</strong> at <a class="text-muted" :href="url" target="_blank">{{company}}</a>
      </div>
      <div class="jobBody">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'job',
  props: {
    title: String,
    company: String,
    url: String
  },
  components: {

  },
  methods: {

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
  .card {
    height:100%;
    margin:5px;
  }
  .jobTitle {
    padding:1em;
    border-bottom: 1px solid #0073e6;
  }
  .jobBody {
    padding: 1.5em;
  }

</style>
