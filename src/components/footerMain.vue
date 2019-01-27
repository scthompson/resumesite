<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <button class="btn btn-primary btn-lg" v-b-modal.contactModal>Contact Me</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerMain',
  props: {

  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    height:200px;
    width:100%;
  }

  .container {
    text-align: center;
  }

  .btn {
    margin-top:75px;
  }

</style>
