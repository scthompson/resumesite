<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div id="about" class="anchorPadding"></div>
          <div><h3>About</h3></div>
          <div class="container">
            <p>
              I have been a full time Software Engineer for about three years. I am experienced in developing 
              and testing web applications using a variety of <a href="#" v-scroll-to="'#tools'">tools</a>. 
              I strive to advance my knowledge of technologies and coding. I also enjoy solving 
              challenging problems and improving my programming knowledge.
            </p>

                <div class="row">
                  <div class="col-md-12">
                    <span><i class="fa fa-graduation-cap"></i></span>
                    <strong class="cardTitleText"> University of Maryland, Baltimore County</strong>
                  </div>
                  <div class="col-md-6 pt-3 ml-3">
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
