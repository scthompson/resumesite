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

                <div class="row">
                  <div class="col-md-12">
                    <span><i class="fa fa-graduation-cap"></i></span>
                    <strong class="cardTitleText"> University of Maryland, Baltimore County</strong>
                  </div>
                </div>
                
                <p>
                  <img src="@/assets/UMBClogo.png"/>
                  Graduated May 2017 with a BS in Information Systems.
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
