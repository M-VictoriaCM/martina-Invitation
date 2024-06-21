<script>
export default {
  name: 'App',
  data() {
    return {
      audio: null,
      isPlaying: false,
      musicActive:false
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
}


</style>
