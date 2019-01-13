<template>
  <div class="col-sm-4">
    <div class="card" :class="icontype">
      <div class="card-body">
        <div>
          <i class="fa" :class="icon"></i>
          <strong>{{title}}</strong>
        </div>
        <div class="starContainer" v-b-tooltip.html.bottom :title="expText">
          <i style="padding-right: 0" :class="star + ' fa-star'" v-for="star in stars"></i>
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
    while(stars.length != 5) {
      if (this.exp - stars.length > 0) {
        stars.push('fa');
      } else {
        stars.push('far');
      }
    }
    var expText = 'I am confident with this tool';
    if (this.exp == 1) {
      expText = 'I have not used this tool enough to become confident with it';
    } else if (this.exp == 2) {
      expText = 'I am a little confident with this tool';
    } else if (this.exp == 3) {
      expText = 'I am moderately confident with this tool';
    } else if (this.exp == 4) {
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
  }

  .starContainer {
    height:fit-content;
    width:fit-content;
  }

</style>
