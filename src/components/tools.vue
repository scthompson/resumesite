<template>
  <div class="col-sm-3">
    <div class="card" :class="icontype">
      <div class="card-body">
        <i class="fa" :class="icon"></i>
        <strong>{{title}}</strong>
        <span class="weak">{{exp}} years</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tools',
  props: {
    title: String,
    icon: String,
    exp: Number
  },
  components: {

  },
  data: function() {
    return {
      icontype: "none"
    }
  },
  methods: {
    changeBorder: function() {
      this.$data.icontype = this.icon.split("-")[1];
    }
  },
  beforeMount() {
    this.changeBorder();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col-sm-12 {
    text-align: right;
    color:darkgray;
  }

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
  .col-sm-3 {
    padding-bottom:1%;
  }
  .card.code {
    border-color: tomato;
  }
  .card.database {
    border-color:orange;
  }
  .card.terminal{
    border-color:rgb(0, 156, 0);
  }
  .card.file {
    border-color:purple;
  }
  .card.briefcase {
    border-color:dodgerblue;
  }
  .card-body i {
    padding-right:5%;    
  }
  .card-body i.fa-code {
    color:tomato;
  }

  .card-body i.fa-database {
    color: orange;
  }

  .card-body i.fa-briefcase {
    color: dodgerblue;
  }

  .card-body i.fa-file {
    color:purple;
  }

  .card-body i.fa-terminal {
    color: rgb(0, 156, 0);
  }
  
  .weak {
    font-weight:lighter;
    float:right;
  }

</style>
