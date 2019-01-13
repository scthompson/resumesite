<template>
    <div class="container" style="padding-top:5vh">
      <div class="row">
        <div class="col-sm-12">
          <div id="experience" class="anchorPadding"></div>
          <div><h3>Experience</h3></div>
          <div class="container">
              <Job title="Software Engineer" company="ProObject" url="https://proobject.com">
                I have been employed at ProObject since November 2017. During my time with the company so far I have:
                <ul>
                  <li>Helped develop "Stack Exchange" like application for intranet at a government agency.</li>
                  <li>Web developer of multiple front-facing WordPress websites, requiring updates on a regular basis. Write plugins for the websites in PHP and JavaScript. </li>
                  <li>Interim Team lead for interns. Use the Atlassian Suite to manage tasks and sprints (September 2017 - December 2017)</li>
                  <li>Developed web endpoints using Django, and implemented those into existing web forms that utilize HTML, CSS, JavaScript, and PHP in a WordPress environment. </li>
                </ul>
              </Job>
              <Job title="Software Engineer Intern" company="Government Services Group" url="https://governmentservicesgroup.com">
               I was an intern at Government Services Group from January 2017 - May 2017. I worked on the following during my internship: 
                <ul>
                  <li>Developed web forms using PHP and jQuery</li>
                  <li>Setup Jenkins Continuous Integration environment on a Mac server</li>
                  <li>Created Android (Espresso) and web (Selenium) tests using Eclipse</li>
                </ul>
              </Job>
              <Job title="Systems Engineer Intern" company="Prometric" url="https://prometric.com">
                I was an Systems Engineer Intern at Prometric between June 2016 - August 2016. My main tasks during the internship were
                to assisted with server maintenance and installation. To do this, I needed to maintain an organized list of what servers needed 
                to be updated, and check to make sure that they were updated or replaced on time. I helped setup temporty testing centers, and 
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
