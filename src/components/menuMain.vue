<template>
<div class="navWrapper">
  <b-navbar class="mainNav" toggleable="md" type="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#" v-scroll-to="'#home'">Scott Thompson</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#" v-scroll-to="'#about'">About</b-nav-item>
        <b-nav-item href="#" v-scroll-to="'#experience'">Experience</b-nav-item>
        <b-nav-item href="#" v-scroll-to="'#tools'">Tools</b-nav-item>
        <b-nav-item href="#" v-scroll-to="'#projects'">Projects</b-nav-item>
        <b-nav-item v-b-modal.contactModal>Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!-- Modal Component -->
      <b-modal id="contactModal" title="Contact Scott" :hide-footer=true>
        <div class="avatarWrapper">
          <img id="avatarimg" src="@/assets/avatarimg.jpeg"/>
        </div>
        <hr/>
        <a href="mailto:sct9107@gmail.com"><i class="fa fa-envelope"></i> sct9107@gmail.com</a>
        <a target="_blank" href="https://www.linkedin.com/in/scottthompsonresume/">
          <i class="fab fa-linkedin"></i> linkedin.com/in/scottthompsonresume
        </a>   
      </b-modal>
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
  .mainNav {
    background-color: #0088ff;
  }
#contactModal a {
  display:block;
}
#contactModal a i {
  font-size:large;
  padding-right:5%;
}

  .navWrapper {
    position:fixed;
    width:100%;
    z-index:999;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: white;
  }

  .avatarWrapper {
    text-align:center;

  }

  #avatarimg {
    width:60%;
    border-radius: 50%;
  }
</style>
