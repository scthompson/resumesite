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
      <a class="nav-link" href="#projects">Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#tools">Tools</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#" v-b-modal.contactModal>Contact</a>
        <!-- Modal Component -->
        <b-modal id="contactModal" title="Contact Scott" :hide-footer=true>
          <div class="avatarWrapper">
            <img id="avatarimg" src="@/assets/avatarimg.jpeg"/>
          </div>
          <hr/>
          <a href="mailto:sct9107@gmail.com"><i class="fa fa-envelope"></i> sct9107@gmail.com</a>
          <a target="_blank" href="https://www.linkedin.com/in/scottthompsonresume/">
            <i class="fa fa-linkedin"></i> linkedin.com/in/scottthompsonresume
          </a>   
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
  .nav-link {
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
