<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
          <div id="tools" class="anchorPadding"></div>
          <div><h3>Tools</h3></div>
        </div>
        <div class="col-sm-6">
          <b-form-select v-model="selected" :options="options" class="mb-3">
          </b-form-select>
        </div>
        <div class="col-sm-12">
          <div class="container">
            <div class="row">
              <Tools v-for="tool in sorted" :key="tool.title"
                    v-bind:title="tool.title"
                    v-bind:icon="tool.icon"
                    v-bind:exp="tool.exp"
              >
              </Tools>     
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Tools from './tools.vue'
import _ from 'lodash'

export default {
  name: 'ToolsContainer',
  props: {
    
  },
  components: {
    Tools
  },
  data () {
    var currentYear = new Date().getFullYear();
    return {
      selected: 'exp',
      options: [
        { value: 'alpha', text: 'Alphabetical' },
        { value: 'exp', text: 'Confidence' },
        { value: 'type', text: 'Type' },
      ],
      tools: [
        {title: 'Vue.js', exp: 3, icon: 'fa-code'},
        {title: 'MySql', exp: 4, icon: 'fa-database'},
        {title: 'VS Code', exp: 3, icon: 'fa-file'},
        {title: 'Vim', exp: 3, icon: 'fa-file'},
        {title: 'Android Studio', exp: 3, icon: 'fa-file'},
        {title: 'RStudio', exp: 3, icon: 'fa-file'},
        {title: 'Linux CLI', exp: 3, icon: 'fa-terminal'},
        {title: 'Windows CLI', exp: 2, icon: 'fa-terminal'},
        {title: 'JavaScript', exp: 4, icon: 'fa-code'},
        {title: 'jQuery', exp: 4, icon: 'fa-code'},
        {title: 'ReactJs', exp: 3, icon: 'fa-code'},
        {title: 'PHP', exp: 5, icon: 'fa-code'},
        {title: 'CakePHP', exp: 4, icon: 'fa-code'},
        {title: 'Python', exp: 3, icon: 'fa-code'},
        {title: 'R', exp: 3, icon: 'fa-code'},
        {title: 'Java', exp: 2, icon: 'fa-code'},
        {title: 'C++', exp: 1, icon: 'fa-code'},
        {title: 'Bash', exp: 3, icon: 'fa-terminal'},
        {title: 'HTML5', exp: 5, icon: 'fa-code'},
        {title: 'CSS3', exp: 5, icon: 'fa-code'},
        {title: 'Boostrap', exp: 3, icon: 'fa-briefcase'},
        {title: 'Jenkins', exp: 2, icon: 'fa-briefcase'},
        {title: 'Django', exp: 2, icon: 'fa-briefcase'},
        {title: 'WordPress', exp: 3, icon: 'fa-briefcase'},
        {title: 'Selenium', exp: 2, icon: 'fa-briefcase'},
        {title: 'Atlassian Suite', exp: 4, icon: 'fa-briefcase'},
        {title: 'Git', exp: 4, icon: 'fa-briefcase'},
        {title: 'Docker', exp: 1, icon: 'fa-briefcase'},
        {title: 'ElasticSearch', exp: 2, icon: 'fa-briefcase'},
        {title: 'NodeJs', exp: 1, icon: 'fa-code'}
      ]
    }
  },
  computed: {
    sorted: function () {
      if (this.selected == 'alpha') {
        return _.orderBy(this.tools, 'title');
      } else if (this.selected == 'exp') {
        return _.reverse(_.orderBy(this.tools, 'exp'));
      } else if (this.selected == 'type') {
        return _.orderBy(this.tools, 'icon');
      }
      
    }
  },
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
  select {
    width:30%;
  }
</style>
