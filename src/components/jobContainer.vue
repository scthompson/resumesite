<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div id="experience" class="anchorPadding"></div>
          <div><h3>Experience</h3></div>
          <div class="container">
              <Job title="Software Engineer" company="ProObject" url="https://proobject.com">
                I have been employed at ProObject since June 2017. During my time with the company so far I have:
                <ul>
                  <li>Creating a question-answer web application on an intranet for a government agancy using CakePHP, JavaScript, React.js, and MySql
                    Read more about this <a href="#" v-scroll-to="'#projects'">here</a>.
                  </li>
                  <li>Administering multiple production WordPress websites, requiring updating on a regular basis.</li>
                  <li>Created an Android app that loads a web page and injects JavaScript to add functionality and interation with the Android system. 
                    Read more about this <a href="#" v-scroll-to="'#projects'">here</a>.
                  </li>
                  <li>Interim Team lead for interns. Use the Atlassian Suite to manage tasks and sprints (September 2017 - December 2017)</li>
                </ul>
              </Job>
              <Job title="Software Engineer Intern" company="ProObject" url="https://proobject.com/">
               I was an intern at ProObject from January 2017 - May 2017. I worked on the following during my internship: 
                <ul>
                  <li>Developed web forms for upgrading accounts to VIP status using PHP, JQuery, and Django</li>
                  <li>Setup Jenkins Continuous Integration</li>
                  <li>Created Android (Espresso) and web (Selenium) tests</li>
                </ul>
              </Job>
              <Job title="Systems Engineer Intern" company="Prometric" url="https://prometric.com">
                I was a Systems Engineer Intern at Prometric between June 2016 - August 2016. My main tasks during the internship were
                to assist with server maintenance and installation. To do this, I needed to maintain an organized list of what servers needed 
                to be updated, and check to make sure that they were updated or replaced on time. I helped setup temporary testing centers, and 
                configure the computers within them. 
              </Job>
              <Job title="Software Developer Intern" company="Prometric" url="https://prometric.com">
                I was a Software Developer Intern at Prometric between June 2015 - August 2015. My main task during the summer was to 
                design and develop a data cube using an existing data warehouse. The data cube was then used to create analytical charts 
                for clients to see who was taking their tests. This was a difficult task at first because I had never heard of a data cube 
                and only had minimal SQL experience, but after researching I was able to understand and begin development. By the end of my 
                internship the data cube was moved into quality control. 
              </Job>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Job from './job.vue'

export default {
  name: 'cardContainer',
  props: {
    msg: String
  },
  components: {
    Job
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
