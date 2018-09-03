<template>
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" href="#">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Experience</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
  </ul>
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
  .nav-link {
    color: white;
  }
</style>
