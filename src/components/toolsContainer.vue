<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
          <div id="tools" class="anchorPadding"></div>
          <div><h3>Tools</h3></div>
        </div>
        <div class="col-sm-1">
          <label>Sort By:</label>
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
        {title: 'Vue.js', exp: 4, icon: 'fa-cubes', priority: 2},
        {title: 'MySql', exp: 4.5, icon: 'fa-database', priority: 5},
        {title: 'VS Code', exp: 3, icon: 'fa-file', priority: 8},
        {title: 'Vim', exp: 3, icon: 'fa-file', priority: 9},
        {title: 'Android Studio', exp: 3, icon: 'fa-file', priority: 16},
        {title: 'RStudio', exp: 3, icon: 'fa-file', priority: 17},
        {title: 'Bash', exp: 3, icon: 'fa-terminal', priority: 8},
        {title: 'Windows Command Prompt', exp: 3, icon: 'fa-terminal', priority: 9},
        {title: 'JavaScript', exp: 4.5, icon: 'fa-code', priority: 5},
        {title: 'jQuery', exp: 4.5, icon: 'fa-cubes', priority: 4},
        {title: 'ReactJs', exp: 4, icon: 'fa-cubes', priority: 1},
        {title: 'PHP', exp: 4.5, icon: 'fa-code', priority: 6},
        {title: 'CakePHP', exp: 4.5, icon: 'fa-cubes', priority: 7},
        {title: 'Python', exp: 3.5, icon: 'fa-code', priority: 13},
        {title: 'R', exp: 3.5, icon: 'fa-code', priority: 14},
        {title: 'Java', exp: 3, icon: 'fa-code', priority: 15},
        {title: 'HTML5', exp: 4.5, icon: 'fa-code', priority: 18},
        {title: 'CSS3', exp: 4.5, icon: 'fa-code', priority: 19},
        {title: 'Boostrap', exp: 4, icon: 'fa-briefcase', priority: 20},
        {title: 'Jenkins', exp: 3, icon: 'fa-briefcase', priority: 15},
        {title: 'Django', exp: 3, icon: 'fa-briefcase', priority: 16},
        {title: 'WordPress', exp: 4, icon: 'fa-briefcase', priority: 17},
        {title: 'Selenium', exp: 3, icon: 'fa-briefcase', priority: 18},
        {title: 'Atlassian Suite', exp: 4, icon: 'fa-briefcase', priority: 21},
        {title: 'Git', exp: 4, icon: 'fa-briefcase', priority: 10},
        {title: 'Docker', exp: 3, icon: 'fa-briefcase', priority: 11},
        {title: 'ElasticSearch', exp: 3, icon: 'fa-briefcase', priority: 12},
        {title: 'Node.js', exp: 3.5, icon: 'fa-cubes', priority: 3}
      ]
    }
  },
  computed: {
    sorted: function () {
      if (this.selected == 'alpha') {
        return _.orderBy(this.tools, 'title');
      } else if (this.selected == 'exp') {
        return _.orderBy(this.tools, ['exp', 'priority'], ['desc', 'asc']);
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
