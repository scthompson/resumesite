<template>
  <div>
    <ContentHeader />
      <AboutContainer />
      <JobContainer />
      <ProjectsContainer />
      <toolsContainer />
    </div>
</template>

<script>
import CardContainer from './cardContainer.vue'
import ContentHeader from './contentHeader.vue'
import AboutContainer from './aboutContainer.vue'
import JobContainer from './jobContainer.vue'
import ToolsContainer from './toolsContainer.vue'
import ProjectsContainer from './projectsContainer.vue'

export default {
  name: 'contentMain',
  props: {

  },
  components: {
    CardContainer,
    ContentHeader,
    JobContainer,
    ToolsContainer,
    AboutContainer,
    ProjectsContainer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    font-size: 3em;
  }

</style>
