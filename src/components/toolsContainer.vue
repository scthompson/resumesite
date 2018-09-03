<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
          <a name="tools">
            <div class="anchorPadding"></div>
            <div><span class="badge badge-secondary">Tools</span></div>
          </a>
          <div class="container">
            <div class="row">
              <Tools title="Vue.js" icon="fa-toolbox"></Tools>
              <Tools title="MySql" icon="fa-database"></Tools>
              <Tools title="Visual Studio Code" icon="fa-file"></Tools>
              <Tools title="Vim" icon="fa-file"></Tools>
              <Tools title="Android Studio" icon="fa-file"></Tools>
              <Tools title="RStudio" icon="fa-file"></Tools>
              <Tools title="Eclipse" icon="fa-file"></Tools>
              <Tools title="Linux cli" icon="fa-terminal"></Tools>
              <Tools title="Windows cli" icon="fa-terminal"></Tools>
              <Tools title="JavaScirpt" icon="fa-code"></Tools>
              <Tools title="jQuery" icon="fa-code"></Tools>
              <Tools title="AngularJs 2" icon="fa-code"></Tools>
              <Tools title="ReactJs" icon="fa-code"></Tools>
              <Tools title="PHP" icon="fa-code"></Tools>
              <Tools title="CakePHP" icon="fa-toolbox"></Tools>
              <Tools title="Python" icon="fa-code"></Tools>
              <Tools title="R" icon="fa-code"></Tools>
              <Tools title="Java" icon="fa-code"></Tools>
              <Tools title="C++" icon="fa-code"></Tools>
              <Tools title="Bash" icon="fa-code"></Tools>
              <Tools title="HTML5" icon="fa-code"></Tools>
              <Tools title="CSS3" icon="fa-code"></Tools>
              <Tools title="Bootstrap" icon="fa-toolbox"></Tools>
              <Tools title="Jenkins" icon="fa-toolbox"></Tools>
              <Tools title="Django" icon="fa-toolbox"></Tools>
              <Tools title="WordPress" icon="fa-toolbox"></Tools>
              <Tools title="Postman" icon="fa-toolbox"></Tools>
              <Tools title="Selenium" icon="fa-toolbox"></Tools>
              <Tools title="Jenkins" icon="fa-toolbox"></Tools>
              <Tools title="Atlassian Suite" icon="fa-toolbox"></Tools>
              <Tools title="Git" icon="fa-toolbox"></Tools>
              
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Tools from './tools.vue'

export default {
  name: 'ToolsContainer',
  props: {
    
  },
  components: {
    Tools
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    color: white;
    font-size:1.7em;
  }
  .anchorPadding {
    padding-top:50px;
  }
</style>
