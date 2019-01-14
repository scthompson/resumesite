<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div id="projects" class="anchorPadding"></div>
          <div><h3>Projects</h3></div>
          <div class="container">
            <div class="row">
              <Project title="Stack Overflow-like Application">
                <p>
                  I have been on a contract for the last year, where we are rewriting a popular question/answer application on an intranet
                  , to a new framework. The technologies that are being used are 
                  <strong>CakePHP</strong>, <strong>MySql</strong>, <strong>jQuery</strong>, <strong>Bootstrap</strong>, 
                  <strong>Docker</strong>, <strong>ReactJs</strong>, and <strong>ElasticSearch</strong>.
                </p>
                <p>
                  The main portions of the site that I have worked on have been user notifications (email and in-site), 
                  database migration scripts (from the old schema to our new schema), and visually displaying metrics. During my time on this contract, I 
                  have learned many new technologies that I had not previously known. For some of these technologies I have become our teams' go-to person 
                  for that technology. Some examples are <strong>ReactJs</strong> and <strong>ElasticSearch</strong>.
                </p>
              </Project>
              <Project title="Independent Research at UMBC">
                <p>
                  During my final year of college, I assisted in research on "Detecting Malicious Web Visitors using Data 
                  Mining and Clustering". The questions that we wanted to answer were:
                  <ol>
                    <li>Which features effectively identify malicious behavior?</li>
                    <li>What are the best input parameters to cluster on (Number of clusters to generate, distance metric)</li>
                    <li>What is the cost of pre-preprocessing, clustering and analyzing the data?</li>
                  </ol>
                </p>
                <p>                  
                  To answer the questions, we decided to use a data mining technique called clustering. Before I could get to that 
                  step, I first had to pre-process our user logs. To do this, I developed a <strong>python</strong> program to convert
                  the logs to a matrix. I wrote the script using the <strong>Eclipse</strong> IDE. I then took that matrix and ran it through 
                  an <strong>R</strong> program, that I helped develop and improve, to perform the clustering. Once the data was clustered, the 
                  program would also output a color-coded graph of the results. This program was written while using <strong>RStudio</strong>.
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
                  The goal of this project was to determine if we could run web applications as if they were a native <strong>Android</strong> 
                  app, without the user knowing any different. Meaning that we needed the web application to be able to interact with the 
                  <strong>Android</strong> architecture to do things like save user information or use Bluetooth. To achieve 
                  these requirements, I figured out a way to inject <strong>JavaScript</strong> onto any web page from <strong>Android</strong>. 
                  This allowed us to manipulate the web page, and call <strong>JavaScript</strong> or <strong>Android</strong> functions. 
                  For example, we were able to use a <strong>JavaScript</strong> to call an <strong>Android</strong> function that would store 
                  username's and password's in the internal <strong>Android</strong> database. Then, the next time a user launched the app, 
                  we would insert their username and password and click the login button for them.
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
