<template>
  <div class="col-sm-3">
    <div class="card" :class="icontype" v-b-modal="modalName">
      <div class="card-body">
        <i class="fa" :class="icon"></i>
        <strong>{{title}}</strong>
        <b-modal v-bind:id="modalName" :title="title" size="lg" :hide-footer=true>
          <div class="col-sm-12">
            Years Used: {{exp}}
          </div>
          <div class="col-sm-10">
            <slot></slot>
          </div>
        </b-modal>
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
    modalName: String,
    exp: String
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
  .card:hover .card-header {
    background-color: rgba(0, 0, 0, 0.125);
    color: #0073e6;
  }
  .card:hover {
    background-color: rgba(0, 0, 0, 0.03);
    cursor:pointer;
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

</style>
