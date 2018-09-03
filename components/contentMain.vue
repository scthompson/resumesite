<template>
  <div>
    <ContentHeader />
    <CardContainer />
    <div class="container" style="padding-top:5vh">
      <div class="row">
        <div class="col-sm-12">
          <h1><span class="badge badge-secondary">About</span></h1>
          <div class="container">
            To do.....
          </div>
          </div>
        </div>
      </div>
      <div class="container" style="padding-top:5vh">
        <div class="row">
          <div class="col-sm-12">
            <h1><span class="badge badge-secondary">Experience</span></h1>
            <div class="container">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Position</th>
                    <th scope="col">Workplace</th>
                    <th scope="col">Years</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Software Engineer</td>
                    <td>ProObject</td>
                    <td>June 2017 - Current</td>
                  </tr>

                  <tr>
                    <td>Software Engineer Intern</td>
                    <td>Government Services Group</td>
                    <td>Jan 2017 - June 2017</td>
                  </tr>
                  <tr>
                    <td>Site Technician Intern</td>
                    <td>Prometric</td>
                    <td>June 2016 - August 2016</td>
                  </tr>
                  <tr>
                    <td>Systems Developer Intern</td>
                    <td>Prometric</td>
                    <td>June 2015 - August 2015</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import CardContainer from './cardContainer.vue'
import ContentHeader from './contentHeader.vue'

export default {
  name: 'contentMain',
  props: {

  },
  components: {
    CardContainer,
    ContentHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    font-size: 3em;
  }
  .table tbody tr:hover {
    background-color: #0073e6;
    color:white;
  }
</style>
