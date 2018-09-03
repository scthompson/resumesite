<template>
    <div class="container" style="padding-top:5vh">
      <div class="row">
        <div class="col-sm-12">
          <a name="experience">
            <div class="anchorPadding"></div>
            <div><span class="badge badge-secondary">Experience</span></div>
          </a>
          <div class="container">
              <Job title="Software Engineer" company="ProObject" url="https://proobject.com">
                I have been emplyed at ProObject since November 2017. I do things for this company and that helps them make money. Since I do those things, they pay me an amount of money. 
              </Job>
              <Job title="Software Engineer Intern" company="Government Services Group" url="https://governmentservicesgroup.com">
                Some texts
              </Job>
              <Job title="Systems Engineer Intern" company="Prometric" url="https://prometric.com">
                Some texts
              </Job>
              <Job title="Software Developer Intern" company="Prometric" url="https://prometric.com">
                Some texts
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
