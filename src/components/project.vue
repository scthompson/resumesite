<template>
  <div class="col-sm-6"> 
    <div class="card">
      <div class="card-body">
        <div class="jobTitle">
          <strong>{{title}}</strong>
        </div>
        <div class="jobBody">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'project',
  props: {
    title: String
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
  .col-sm-6 {
    padding-bottom:1vh;
  }

</style>
