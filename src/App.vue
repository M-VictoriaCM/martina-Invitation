<script>
import PopupAsistencia from './components/PopupAsistencia.vue';
import PopupLocalizacion from './components/PopupLocalizacion.vue';
import PopupBancario from './components/PopupBancario.vue';
export default {
  name: 'App',
  components: { 
    PopupAsistencia,
    PopupLocalizacion,
    PopupBancario
  },
  data() {
    return {
      audio: null,
      isPlaying: false,
      musicActive:false,
      title:'Martina',
      subtitle:'MIS 15 AÑOS',
      opcion1:'CONFIRMAR ASISTENCIA',
      opcion2:'¿CÓMO LLEGAR?',
      opcion3:'DATOS BANCARIOS',
      showPopupAsistencia: false,
      showPopupLocalizacion: false,
      showPopupBancario: false
    }
  },
  methods: {
    async handleMusicPlay() {
      if (!this.audio) {
        this.audio = new Audio((await import('./assets/music/TaylorSwift_CruelSummer.mp3')).default);
      }
      this.audio.play();
      this.isPlaying = true;
      this.musicActive=true;
    },
    togglePopUp(popupType) {
      if (popupType === 'asistencia') {
        this.showPopupAsistencia = !this.showPopupAsistencia;
      } else if (popupType === 'localizacion') {
        this.showPopupLocalizacion = !this.showPopupLocalizacion;
      } else if (popupType === 'bancario') {
        this.showPopupBancario = !this.showPopupBancario;
      }
    },
    handleMusicPause() {
      if (this.audio) {
        this.audio.pause();
        this.isPlaying = false;
      }
    },
   
    handleMusicToggle() {
      if (this.audio) {
        if (this.isPlaying) {
          this.handleMusicPause();
        } else {
          this.handleMusicPlay();
        }
      }
    },
    handleMusicStop(){
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        this.musicActive = false;
      }
    },
    handleVisibilityChange() {
      if (document.hidden && this.isPlaying) {
        this.handleMusicPause();
      }
    }
  },
  provide() {
    return {
      audioController: {
        play: this.handleMusicPlay,
        pause: this.handleMusicPause,
        toggle: this.handleMusicToggle,
        stop: this.handleMusicStop,
        isPlaying: () => this.isPlaying,
        isMusicActive: () => this.musicActive
      }
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.musicActive) {
      this.handleMusicStop();
    }
    next();
  },
  mounted() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }
}
</script>

<template>
  <div id="app-container">
    <main class="content">
      <section class="section">
        <router-view/>
      </section>
    </main>
    <footer v-if="$route.path === '/landing-page'">
      <div class="footer__content1">
        <div class="box1">
         <h1 class="title__footer">{{ title }}</h1>
         <h2 class="subtitle__footer" >{{ subtitle }}</h2>
        </div>
        <div class="box2">
          <div class="card__buttom">
            <transition name="fade">
                <popup-asistencia v-show="showPopupAsistencia" @close="togglePopUp('asistencia')"/>
            </transition>          
            <h1 class="opcion__footer" @click="togglePopUp('asistencia')">{{ opcion1 }}</h1>
          </div>
          <!-------------------------------------------------------------------->
          <div class="card__buttom">
            <transition name="fade">
              <popup-localizacion v-show="showPopupLocalizacion" @close="togglePopUp('localizacion')"/>
            </transition>          
            <h1 class="opcion__footer" @click="togglePopUp('localizacion')">{{ opcion2 }}</h1>
          </div>
          <!-------------------------------------------------------------------->
          <div class="card__buttom">
            <transition name="fade">
              <popup-bancario v-show="showPopupBancario" @close="togglePopUp('bancario')"/>
            </transition>          
            <h1 class="opcion__footer" @click="togglePopUp('bancario')">{{ opcion3 }}</h1>
          </div>
          <!-------------------------------------------------------------------->
        </div>
      </div>
      <div class="footer__content">
        <h4 class="footer__txt">Desarrollado por</h4> 
        <div class="footer__container">
        <img class="img__marca" src="./suma(copia).png" alt="">
        <span><i class="fa-solid fa-plus icon__footer"></i></span>
        <img class="img__marca1" src="./logo_sitio_web_victoria.png" alt="">
        </div>
      </div>
    </footer>
  </div> 
</template>

<style scoped>
#app-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: var(--m-12);
    overflow: hidden;
    align-items: center;
    width:100%;
}
.content {
    grid-column-end: span 4;
}
.title__footer{
  font-size: 100px;
  font-family: var(--font__principal);
  color:var( --color__principal_dark);
  text-align: center;
  line-height: 70%;
}
.subtitle__footer{
  font-family: var(--font__secundaria);
  font-size: 32px;
  font-weight: lighter;
  color:var( --color_txt__light);
  text-align: center;
  line-height: 70%;
}
.opcion__footer{
  font-family: var(--font__secundaria);
  font-size: 1.2rem;
  text-align: center;
  font-weight: lighter;
  color:var( --color__principal_dark);
  line-height:150%;
}
.opcion__footer {
    text-decoration: none; /* elimina el subrayado */
    cursor: pointer;
}

.opcion__footer:hover {
    text-decoration: underline; /* subraya el texto al pasar el ratón */
}
/*------------ MEDIA QUERIES Medium devise and Large devise------------*/
@media (min-width: 599px) and (max-width: 1023px) {
  .grid__container {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        width: 100%;
        column-gap: var(--m-16);
    }
    .content {
        grid-column-end: span 6;
    }
}
@media screen and (min-width: 1024px) {
  .grid__container {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        width: 100%;
        column-gap: var(--m-24);
    }
    .content {
        grid-column-end: span 12;
    }
    .title__footer{
      font-size:150px;
    }
}


</style>
