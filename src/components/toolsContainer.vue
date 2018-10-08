<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-12">
          <a name="tools">
            <div class="anchorPadding"></div>
            <div><h3>Tools</h3></div>
          </a>
        </div>
        <div class="col-sm-6">
          <b-form-select v-model="selected" :options="options" class="mb-3">
          </b-form-select>
        </div>
        <div class="col-sm-12">
          <div class="container">
            <div class="row">
              <Tools title="Vue.js" icon="fa-briefcase" modalName="vueModal" exp="<1">
                <ul>
                  <li>Created a resume website</li>
                </ul>
              </Tools>
              <Tools title="MySql" icon="fa-database" modalName="mysqlModal" exp="6">
                I have been using MySql for about 6 years. It is my most known database language, I have done a 
                variety of projects with MySql.
                <ul>
                  <li>Helped create scripts to migrate a MySql database in an old schema to a new schema</li>
                  <li>Some other stuff goes here</li>
                </ul>
              </Tools>
              <Tools title="Visual Studio Code" icon="fa-file" modalName="vscModal" exp="1">
                Visual Studio Code is my IDE of choice.
              </Tools>
              <Tools title="Vim" icon="fa-file" modalName="vimModal" exp="3">
                I like to use Vim for quick access to files, and sometimes for development. 
              </Tools>
              <Tools title="Android Studio" icon="fa-file" modalName="androidStudioModal" exp="2">
                I have used Android Studio to make some small Android apps. The most intersting app that
                I craeted was a web frame that used JavaScript injection to store username's and passwords, 
                so that users did not have to type in their login information every time. The app would also, 
                recieve Firebase notifications. 
              </Tools>
              <Tools title="RStudio" icon="fa-file" modalName="RstudioModal" exp="3">
                RStudio is my IDE of choice when writing scripts or apps using R. 
              </Tools>
              <Tools title="Linux cli" icon="fa-terminal" modalName="linuxCliModal" exp="3">
                I am familiar with the basics of the Linux Cli (navigation, search, etc), 
                and some advanced commands (selecting the file that was last edited in a given folder). 
              </Tools>
              <Tools title="Windows cli" icon="fa-terminal"  modalName="windowsCliModal" exp="2">
                I am familar with the basics of the Windows Cli. 
              </Tools>
              <Tools title="JavaScirpt" icon="fa-code" modalName="javascriptModal" exp="6">
                I have done numerous projects that use JavaScript. I need to write some more. here
              </Tools>
              <Tools title="jQuery" icon="fa-code" modalName="jqueryModal" exp="5">
                Again, done too many things to write right now.
              </Tools>
              <Tools title="AngularJs 2" icon="fa-code" modalName="angularModal" exp="<1">
                Created a basic web site using AngularJs 2
              </Tools>
              <Tools title="ReactJs" icon="fa-code" modalName="reactModal" exp="<1">
                Created a portion of a web app that displayed notifications to users. (probs write more)
              </Tools>
              <Tools title="PHP" icon="fa-code" modalName="phpModal" exp="5">
                So many things. WordPress plugins, RoundTable, DnD apps, Button Clicking App, etc. 
              </Tools>
              <Tools title="CakePHP" icon="fa-briefcase" modalName="cakePhpModal" exp="1">
                RoundTable
              </Tools>
              <Tools title="Python" icon="fa-code" modalName="pythonModal" exp="3">
                Django endpoints, Research pre-processing, CompSci Projects
              </Tools>
              <Tools title="R" icon="fa-code" modalName="rModal" exp="2">
                 Twitter text mining app (shiny), research
              </Tools>
              <Tools title="Java" icon="fa-code" modalName="javaModal" exp="2">
                AI stuff in that one class
              </Tools>
              <Tools title="C++" icon="fa-code" modalName="cppModal" exp="1">
                 School projects
              </Tools>
              <Tools title="Bash" icon="fa-code" modalName="bashModal" exp="2">
                Wrote some bash scripts that did some things
              </Tools>
              <Tools title="HTML5" icon="fa-code" modalName="jqueryModal" exp="6">
                Yeah, every website I've written
              </Tools>
              <Tools title="CSS3" icon="fa-code" modalName="cssModal" exp="6">
                Yeah, every website I've written
              </Tools>
              <Tools title="Bootstrap" icon="fa-briefcase" modalName="cssModal" exp="3">
                Familiar with the basics. Made this site, some other stuff
              </Tools>
              <Tools title="Jenkins" icon="fa-briefcase" modalName="jenkinsModal" exp="1">
                Setup JenkinsCI enviornment on a MacServer. Created tests and accounts for them. Be more verbose. 
              </Tools>
              <Tools title="Django" icon="fa-briefcase" modalName="djangoModal" exp="1">
                Creted endpoints for an API
              </Tools>
              <Tools title="WordPress" icon="fa-briefcase" modalName="wordpressModal" exp="2">
                Created and Maintained WordPress sites and themes. Created some plugins. Be more verbose. 
              </Tools>
              <Tools title="Selenium" icon="fa-briefcase" modalName="seleniumModal" exp="1">
                Wrote UI tests for Android Applications. These tests were then run by Jenkins CI. 
              </Tools>
              <Tools title="Atlassian Suite" icon="fa-briefcase" modalName="atlassianModal" exp="2">
                I am familar with how to navigate and use BitBucket, Confluence and Jira
              </Tools>
              <Tools title="Git" icon="fa-briefcase" modalName="gitModal" exp="3">
                I know how to use git. Be more verbose. 
              </Tools>
              <Tools title="Docker" icon="fa-briefcase" modalName="dockerModal" exp="<1">
                I have created some docker containers. Just started learning. 
              </Tools>
              
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
  },
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Sort By:' },
        { value: 'type', text: 'Type' },
        { value: 'alpha', text: 'Alphabetical' },
        { value: 'exp', text: 'Experience' },

      ]
    }
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
  select {
    width:30%;
  }
</style>
