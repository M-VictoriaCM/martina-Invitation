<script>
import CardAsistencia from './CardAsistencia.vue';
import CardLocation from './CardLocation.vue';

export default {
  name: 'CardInfo',
  components: { 
    CardAsistencia, 
    CardLocation},
    data(){
      return{
        title:'DATOS DE LA FILMACIÓN'
      };
    }
};
</script>

<template>
  <div class="marco__section-card">
        <div class="section_card-info">
            <div class="notch left-top"></div>
            <div class="notch left-bottom"></div>
            <div class="notch right-top"></div>
            <div class="notch right-bottom"></div>
            <h1 class="card__info__title">{{ title }}</h1>
            <div class="section_card__content">
              <card-asistencia/>
            </div>
            <div class="section_card__content">
              <card-location/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.marco__section-card {
  margin-top: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  background: var(--color__principal);
  box-shadow: var(--color__shadow);
  border-radius: 9px;
  height: 380px;
}
.section_card__content {
  position: relative;
  width: 100%;
  margin-top: .5rem;
  border: 1px solid var(--color__principal);
  padding: .5rem 0 0;
  border-radius: 9px;
}


.section_card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color_txt__light);
  width: 280px;
  height: 350px;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 0;
}



.card__info__title {
  font-family: var(--font__secundaria);
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--color__principal_dark);
  margin-bottom: .5rem;
  border-radius: 9px;
}

.section_card-info::before {
  content: "";
  position: absolute;
  border-top: 5px dashed var(--color__principal);
  border-bottom: 5px dashed var(--color__principal);
  height: 10px;
}

.section_card-info::before {
  top: 0;
  left: 0;
  width: calc(100% - 20px);
  height: 100%;
  border-left: none;
  border-right: none;
}

.section_card-info::after {
  top: 0;
  right: 0;
  width: 100%;
  height: calc(100% - 40px);
  border-top: none;
  border-bottom: none;
}


.section_card-info .notch {
  position: absolute;
  width: 40px;
  height: 40px;
  background: var(--color__principal);
  border-radius: 50%;
  z-index: 1;
}

.section_card-info .notch.left-top {
  top: -20px;
  left: -20px;
}

.section_card-info .notch.left-bottom {
  bottom: -20px;
  left: -20px;
}

.section_card-info .notch.right-top {
  top: -20px;
  right: -20px;
}

.section_card-info .notch.right-bottom {
  bottom: -20px;
  right: -20px;
}
@media(max-width:320px){
  .marco__section-card {
    width:260px;
  }
  .section_card-info {
    width: 240px;
  }
}
/*Extra small*/
@media (min-width: 450px) and (max-width: 567px) {
  .marco__section-card {
    margin-top: 350px;
  }
}
@media (min-width: 567px) and (max-width: 768px) {
  .marco__section-card {
    margin-top:460px;
  }
}
@media (min-width: 768px) and (max-width: 991px){
  .marco__section-card {
    margin-top: 83%;
    width: 600px;
    height: 400px;
  }
  .section_card-info {
    width: 540px;
    height: auto;
  }
}
@media (min-width: 1025px) {
  .marco__section-card {
    margin-top: 25rem;
    width: 900px;
    height: 500px;
  }
  .section_card__content {
    width: 80%;
    margin-bottom: 1rem;
  }
  .section_card-info .notch {
    width: 60px;
    height: 60px;
    background: var(--color__principal);
  }

  .section_card-info::before {
    top: 0;
    left: 0;
    width: calc(100% - 40px);
    height: 100%;
    border-left: none;
    border-right: none;
  }

  .section_card-info::after {
    top: 0;
    right: 0;
    width: 100%;
    height: calc(100% - 40px);
    border-top: none;
    border-bottom: none;
  }

  .section_card-info {
    width: 840px;
    height: auto;
  }

  .card__info__title {
    font-size: 36px;
  }

  .section_card__content {
    width: 80%;
    margin-bottom: 1rem;
  }
}
</style>