<template>
  <div class="card" v-on:click="jobClick">
    <div class="card-body">
      <div class="jobTitle">
        <strong>{{title}}</strong> at <span class="text-muted">{{company}}</span>
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
    jobClick: function(event) {
      var win = window.open(this.url, "_blank");
      win.focus();
    }
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
