<template>
    <div class="container" style="padding-top:5vh">
      <div class="row">
        <div class="col-sm-12">
          <a name="about">
            <div class="anchorPadding"></div>
            <div><h3>About</h3></div>
          </a>
          <div class="container">
            <p>
              I have about 2 years of experience as a Software Engineer. I am experienced in developing websites and web applications using a variety of technologies. 
              I have experience in testing and integration, writing tests and setting up a continuous development enviornment. I have experience using the Agile Scrum 
              Methodology as a team lead and developer.
            </p>
            <span class="subTitle"><i class="fa fa-graduation-cap"></i> Education</span>
            <div class="card">
              <div class="card-title">
                <div class="row">
                  <div class="col-md-1">
                    <img src="@/assets/UMBClogo.png"/>
                  </div>
                  <div class="col-md-11">
                    <strong class="cardTitleText">University of Maryland, Baltimore County</strong>
                  </div>
                </div>
                
              </div>
              <div class="card-body">
                <p>I graduated from UMBC in <strong>May of 2017</strong> with a <strong>BS in Information Systems</strong>.</p>
                <p>
                  My favorite class during his college career was "Independent Research". In this class I collaborated with a research
                  professor at UMBC as well as with a professor and student combo from another college. To learn more <a href="#projects">click here</a>
                </p>
                <p>
                  I was part of "UMBC Rockets and More", a club about doing fun experiements with science with a focus on Rockets. During my 3rd year I became president of the club. 
                  I was in charge of the organizing club activities and outreach events, presenting and justifying the budget for funding and maintaining the budget. 
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
</template>

<script>


export default {
  name: 'aboutContainer',
  props: {
    
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card  {
  width:fit-content;
  padding:2%;
  margin-left:2%;
  margin-right:2%;
}

.subTitle {
  color:dodgerblue;
  font-size: 1.2em;
  font-weight: bolder;
}
.cardTitleText {
  font-size:larger;
}

img  {
  height:50px;
  padding-right:2%;
}
 a span {
    color: white;
    font-size:1.7em;
  }
  .anchorPadding {
    padding-top:50px;
  }
</style>
