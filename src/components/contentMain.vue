<template>
  <div>
    <ContentHeader />
      <AboutContainer />
      <JobContainer />
      <toolsContainer />
    </div>
</template>

<script>
import CardContainer from './cardContainer.vue'
import ContentHeader from './contentHeader.vue'
import AboutContainer from './aboutContainer.vue'
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
    ToolsContainer,
    AboutContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    font-size: 3em;
  }

</style>
