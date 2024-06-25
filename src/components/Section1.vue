<script>
import Retrato from './Retrato.vue';
import Invitation from './Invitation.vue';
import Timer from './Timer.vue';

export default {
  name: "Section1",
  components: { Retrato, Invitation, Timer },
  data(){
    return{
      animate:false
    };
  },
  mounted(){
    this.animate=true;
  }

};
</script>

<template>
  <div>
    <div class="section__container">
      <div class="section__content">
        <div class="section1"  :class="{ 'fade-in': animate }">
          <retrato />
        </div>
        <div class="section2 " :class="{ 'fade-in': animate }">
          <invitation/>
        </div>
      </div>
      
    </div>
    <div class="section3"><timer/></div>
  </div>

</template>

<style scoped>
.section__container,
.section__content,
.section1,
.section2,
.section3 {
  display: flex;
}
.section__container,
.section__content,
.section1,
.section2,
.section3{
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.section__container,
.section__content,
.section1 {
  position:relative;
}

.section__container {
  padding: 2rem 0 0;
}

.section1 {
  z-index: 1;
}
.section2,
.section3{
  position: absolute;
}

.section2 {
  top: 205px;
  z-index: 2;
  width: 100%;
}
.section3{
  margin-top:36%;
  left: 0;
  z-index: 1;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in {
  animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@media(max-width:320px){
  .section2{
    margin-bottom: 2rem;;
  }
  .section3{
   margin-top: -2rem;
  }
}
@media(max-width:360px){
  .section2{
    margin-top:-2rem;
  }
  .section3{
    margin-top: 40%;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .section2{
    margin-top:12rem;
  }
  .section3{
    margin-top: 38%;
    padding: 0 0 2.5rem;
  }
}
@media (min-width: 1025px) {
  .section__container,
  .section__content,
  .section3 {
    width: 100%;
  }

  .section__content {
    flex-direction: row;
    justify-content: space-between;
  }
  .section1 {
    width: 55%;
  }

  .section2 {
    width: 45%;
    right: 10px;
    top: 0;
  }

  .section2 {
    margin-left: 10%;
  }

  .section3 {
    display: flex;
    justify-content: center;
    align-items: center;
    left:0;
    margin-top:20%;
    height:300px;
    margin-top:3%;
    z-index: -1;
  }
}
</style>
