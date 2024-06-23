<script>
import { inject } from "vue";
import FilmDinamic from "../components/FilmDinamic.vue";
import Section1 from "../components/Section1.vue";
import CardInfo from "../components/CardInfo.vue";
import IconMusicActive from "../components/icons/IconMusicActive.vue";
import IconMusicInactive from '../components/icons/IconMusicInactive.vue';
import CardDressCode from '../components/CardDressCode.vue';
import CardGift from "../components/CardGift.vue";
import ImageSlider from "../components/ImageSlider.vue";
import FadeInOnScroll from '../components/FadeInOnScroll.vue';
import SectionRedes from '../components/SectionRedes.vue';

export default {
  name: "LandingPage",
  components: {
    FilmDinamic,
    Section1, CardInfo,
    IconMusicActive,
    IconMusicInactive,
    CardDressCode,
    CardGift,
    ImageSlider,
    FadeInOnScroll,
    SectionRedes
  },
  
  setup() {
    const audioController = inject('audioController');
    return { audioController };
  },
  methods: {
    toggleMusic() {
      if (this.audioController) {
        this.audioController.toggle();
      }
    },
    
  }

};
</script>

<template>
  <div class="container">
    <film-dinamic class="film1" />
    <div class="landing__content">
      <fade-in-on-scroll>
        <div class="grid-item">
          <section-1 />
        </div>
      </fade-in-on-scroll>

      <fade-in-on-scroll>
        <div class="grid-item">
          <card-info />
        </div>
      </fade-in-on-scroll>

      <fade-in-on-scroll>
        <div class="grid-item">
          <image-slider />
        </div>
      </fade-in-on-scroll>


      <fade-in-on-scroll>
        <div class="grid-item">
          <card-dress-code />
        </div>
      </fade-in-on-scroll>


      <fade-in-on-scroll>
        <div class="grid-item">
          <card-gift />
        </div>
      </fade-in-on-scroll>
      
      <div class="grid-item redes">
        <section-redes/>
      </div>

      <button v-if="audioController.isMusicActive()" class="btn btn-secondary btn-stick" @click="toggleMusic">
        <template v-if="audioController.isPlaying()">
          <icon-music-active />
        </template>
        <template v-else>
          <icon-music-inactive />
        </template>
      </button>
    </div>

  </div>
</template>
<style scoped>
.container,
.landing__content,
.grid-item {
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn-stick {
  position: fixed;
  bottom: 10px;
  right: 5px;
  z-index: 10;
}

.btn,
.btn-secondary {
  background: transparent;
  border: none;
}

.btn-primary:focus,
.btn-primary:active {
  outline: none;
}

.btn-primary:hover {
  border: none;
  background: transparent;
  outline: none;
}


.landing__content {
  display: grid;
  column-gap: 24px;
  grid-template-rows: auto auto 1fr;
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.redes {
    width: 100%;
    position:absolute;
    bottom:0;
    left:0;
}

.carousel {
  margin-bottom: 4rem;
}

@media(max-width:320px) {
  .container {
    width: 100%;
  }
}

@media (min-width: 1025px) {
  .btn-stick {
    top: 10px;
    right: 10px;
  }
}
</style>
