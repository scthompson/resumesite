<template>
    <div class="container" style="padding-top:5vh">
      <div class="row">
        <div class="col-sm-12">
          <div id="projects" class="anchorPadding"></div>
          <div><h3>Projects</h3></div>
          <div class="container">
            <div class="row">
              <Project title="Stack Overflow like Application">
                <p>
                  I have been on a contract for the last year, where we are rewriting a popular question/answer application that
                  exists on an intranet for a government agency, to a new framework. The technologies that are being used are 
                  <strong>CakePHP</strong>, <strong>MySql</strong>, <strong>jQuery</strong>, <strong>Bootstrap</strong>, 
                  <strong>Docker</strong>, <strong>ReactJs</strong>, and <strong>ElasticSearch</strong>.
                </p>
                <p>
                  The main portions of the site that I have worked on have been user notifications (email and in site) and 
                  database migration scripts (from the old schema to our new schema). During my time on this contract, I 
                  have learned many new technologies that I did not know before, and have become our teams' go-to person 
                  for that technology. Some examples are ReactJS and ElasticSearch. 
                </p>
              </Project>
              <Project title="Independent Research at UMBC">
                <p>
                  During my 4th year of college, I assisted in research on detecting malicious web visitors using data 
                  mining and clustering. The questions that we wanted to answer were:
                  <ol>
                    <li>Which features effectively identify malicious behavior?</li>
                    <li>What are teh best input parameters to cluster on (# of clusters to generate, distance metric)</li>
                    <li>What cost? (Pre-processing, clustering, analysis of which are malicious?) dependent on the features?</li>
                  </ol>
                </p>
                <p>                  
                  To answer the questions, I developed a <strong>python</strong> program to convert a user's history 
                  on a site to a matrix in <strong>Eclipse</strong>, as a pre-processing step. Then I ran the matrix through 
                  an <strong>R</strong> program, that I helped develop and improve to cluster and graph a matrix of 
                  large data using <strong>RStudio</strong>.
                </p>
                <p>
                  
                </p>

              </Project>
              <Project title="Resume Website">
                <p>
                  I built a resume website to begin learning <strong>Vue.js</strong> and <strong>Bootstrap 4</strong>. 
                  You're looking at it right now!
                </p>
              </Project>
              <Project title="Android JavaScript Injection">
                <p>
                  The goal of this project was to determine if we could run web applications as if they were an <strong>Android</strong> app, without the user knowing any different. 
                  This meant that we needed to be able to save user information and create custom <strong>Android</strong> functions (So that we would be able to use Bluetooth, or location services). 
                  To achieve these requirements, I figured out a way to inject <strong>JavaScript</strong> onto any web page from <strong>Android</strong>, that would allow us to store text-box information, and call other JavaScript or 
                  <strong>Android</strong> functions. For example, we were able to use a the <strong>JavaScript</strong> to store username's and password's in the internal <strong>Android</strong> database. Then, the next time a user launched 
                  the app, we would insert their username and password and click the login button for them.
                </p>
              </Project>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Project from './project.vue'

export default {
  name: 'projectsContainer',
  props: {
    
  },
  components: {
    Project
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
