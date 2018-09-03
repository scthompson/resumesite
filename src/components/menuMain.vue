<template>
<div class="navWrapper">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" href="#about">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#experience">Experience</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#tools">Tools</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#" v-b-modal.modal1>Contact</a>
        <!-- Modal Component -->
        <b-modal id="modal1" title="Contact Scott" hide-footer="true">
          <a href="mailto:sct9107@gmail.com"><i class="fa fa-envelope"></i> sct9107@gmail.com</a>
          <a href="#"><i class="fa fa-linkedin"></i> linkedin.com/in/scottthompsonresume</a>
          <a href="#"><i class="fa fa-github"></i> github.com/scthompson</a>   
        </b-modal>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'menuMain',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav {
    background-color: #0073e6;
  }
#modal1 a {
  display:block;
}
#modal1 a i {
  font-size:large;
  padding-right:5%;
}

  .navWrapper {
    position:fixed;
    width:100%;
    z-index:999;
  }
  .nav-link {
    color: white;
  }
</style>
