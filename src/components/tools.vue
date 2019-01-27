<template>
  <div class="col-sm-4">
    <div class="card" :class="icontype">
      <div class="card-body">
        <div>
          <i class="fa" :class="icon"></i>
          <strong>{{title}}</strong>
        </div>
        <div class="starContainer" v-b-tooltip.html.bottom :title="expText">
          <i style="padding-right: 0" :class="star.class" v-for="star in stars" v-bind:key="star.id"></i>
        </div>
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
    var stars = [];
    var exper = this.exp;
    while(stars.length != 5) {
      var starId = stars.length;
      if (exper >= 1) {
        stars.push({id: starId, class: 'fa fa-star'});
      } else if (exper > 0) {
        stars.push({id: starId, class: 'fas fa-star-half-alt'});
      } else {
        stars.push({id: starId, class: 'far fa-star'});
      }
      exper--;
    }
    var expText = 'I am confident with this tool';
    if (this.exp < 4) {
      expText = 'I am moderately confident with this tool';
    } else if (this.exp < 5) {
      expText = 'I am fairly confident with this tool'
    }
    return {
      icontype: "none",
      stars: stars,
      expText: expText
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
  .col-sm-3, .col-sm-4 {
    padding-bottom:1%;
  }
  .card.code {
    border-color: #ff4f4d;
  }
  .card.database {
    border-color: black;
  }
  .card.terminal{
    border-color:limegreen;
  }
  .card.file {
    border-color:purple;
  }
  .card.briefcase {
    border-color:dodgerblue;
  }
  .card.cubes {
    border-color: orange;
  }

  .card-body i {
    padding-right:5%;    
  }
  .card-body i.fa-code {
    color:#ff4f4d;
  }

  .card-body i.fa-database {
    color: black;
  }

  .card-body i.fa-briefcase {
    color: dodgerblue;
  }

  .card-body i.fa-file {
    color:purple;
  }

  .card-body i.fa-terminal {
    color: limegreen;
  }

  .card-body i.fa-cubes {
    color: orange;
  }
  
  .weak {
    font-weight:lighter;
  }

  .starContainer {
    height:fit-content;
    width:fit-content;
  }

</style>
