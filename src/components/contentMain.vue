<template>
  <div>
    <ContentHeader />
    <CardContainer />
    <div class="container" style="padding-top:5vh">
      <div class="row">
        <div class="col-sm-12">
          <h1><span class="badge badge-secondary">About</span></h1>
          <div class="container">
            To do.....
          </div>
          </div>
        </div>
      </div>
      <JobContainer />
      <toolsContainer />
    </div>
</template>

<script>
import CardContainer from './cardContainer.vue'
import ContentHeader from './contentHeader.vue'
import JobContainer from './jobContainer.vue'
import ToolsContainer from './toolsContainer.vue'

export default {
  name: 'contentMain',
  props: {

  },
  components: {
    CardContainer,
    ContentHeader,
    JobContainer,
    ToolsContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    font-size: 3em;
  }

</style>
