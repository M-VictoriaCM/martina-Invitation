<script>
export default {
    name:'Retrato'
}
</script>

<template>
    <div>
        <div class="section_photo">
          <img class="photo_card" src="../assets/img/foto_card.jpg" alt="foto_marti" />
          <div class="overlay"></div>
        </div>
    </div>
</template>

<style scoped>
.section_photo {
  position: relative;
  border-radius: 9px;
  width: 100%;
  height:100%;
}
.photo_card{
  max-width:350px;
  height:auto;
  border-radius: 9px;
}
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius:9px;
  border: 10px solid blur(5px);
}
@media(max-width:320px){
  .section_photo{
    width:100%;
    display:flex;
    justify-items: center;
    align-items: center;
  }
  .photo_card{
    width:270px;
  }
}
/*Mobile*/
@media(max-width:360px){
  .section_photo{
    width:100%;
  }
  .photo_card{
    max-width:300px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .section_photo {
    width:100%;
  }
  .photo_card{
    max-width: 650px;
  }
}
@media (min-width: 1025px) {
  .section_photo {
    width:100%;
  }
  .photo_card{
    max-width: 100%;
  }
}
</style>