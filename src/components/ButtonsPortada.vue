<script>
import { inject } from 'vue';
export default {
  name: 'ButtonsPortada',
  data() {
    return {
      option1: 'Ingreso con música',
      option2: 'Ingreso sin música'
    }
  },
  setup() {
    const audioController = inject('audioController');
    return { audioController };
  },
  methods: {
    enterWithMusic() {
      this.audioController.play();
      this.$router.push({ name: 'LandingPage' });
    },
    enterWithoutMusic() {
      this.audioController.stop();
      this.$router.push({ name: 'LandingPage' });
    }
  }   
}
</script>

<template>
  <div class="home__box2">
    <button class=" btn btn-primary btn1 " @click="enterWithMusic">{{ option1 }}</button>
    <button class="btn  btn-primary btn1" @click="enterWithoutMusic">{{ option2 }}</button>
  </div>
</template>

<style scoped>
.home__box2 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 70%;
  position: absolute;
  margin-top: 10rem;
  z-index: 10;
}

.btn-primary {
  color: #D38487;
  padding: 5px 10px;
  font-weight: normal;
  cursor: pointer;
  border-radius: 20px;
  height: 50px;
  border: none;
  width:100%;
  background: #FFD7D7;
  font-family: var(--font__secundaria);
  transition: box-shadow 0.3s ease;
  box-shadow: 0 0 8px 3px rgba(255, 215, 215, 0.75);
}

.btn-primary:focus,
.btn-primary:active {
  outline: none;

}

.btn-primary:hover {
  background: #D38487;
  color: #FFD7D7;
}

.btn1 {
  margin-bottom: 2rem;
}
@media (min-width: 481px) and (max-width: 767px) {
  .home__box2 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 70%;
  position: absolute;
  margin-top: -2rem;
  z-index: 10;
}
}
/*Small table*/
@media (min-width: 768px) and (max-width: 991px) {
  .home__box2 {
    margin-top: -250px;
    width:60%;
}
}
@media (min-width: 1025px) {
  .home__box2 {
    margin-top: -6%;
    height: 50px;
    width: 80%;
  }

  .home__box2 {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 12rem;
  }

  .btn-primary {
    width: 250px;
  }

  .btn1 {
    margin-bottom: 0;
  }

  .btn-primary:focus,
  .btn-primary:active {
    outline: none;
  }

  .btn-primary:hover {
    background: #D38487;
    color: #FFD7D7;
  }
}
</style>