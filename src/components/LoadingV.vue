<script>

export default {
  name: 'LoadingV',
  data() {
    return {
      count: 6,
      rotation: 0,
      loading: true,
      countdownAudio: null
    };
  },
  computed: {
    needleStyle() {
      return {
        transform: `rotate(${this.rotation}deg)`
      };
    },
    containerClass() {
      return this.rotation % 720 === 0 ? 'background-black' : 
        this.rotation % 360 === 0 ? 'background-white' : 
        'background-gray';
    }
  },
  mounted() {
    this.updateCountdown();
  },
  methods: {
    updateCountdown() {
      if (this.count > 0) {
        this.count--;
        this.rotation += 360;
        setTimeout(this.updateCountdown, 1000);
      } else {
        this.loading = false;
        this.$emit('countdown-finished');
      }
    }
  }
};


</script>

<template>
  <div class="app-container">
    <div class="preloader" v-if="loading">
      <div class="film-countdown">
        <span id="count">{{ count }}</span>
      </div>
      <div class="hands" id="sec">
        <div class="hand needle" :style="needleStyle"></div>
      </div>
    </div>
    <div class="container" :class="containerClass">
      <div class="square1"></div>
      <div class="square2"></div>
      <div class="square3"></div>
      <div class="square4"></div>
      <div class="line"></div>
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
    </div>

    
  </div>

</template>

<style scoped>
@import '../style.css';

.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(grey, rgb(2, 2, 2) 70%);
  position:fixed;
  top:0;
  left: 0;
  z-index: 100;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 100%;
}

.square1,
.square2,
.square3,
.square4 {
  width: 100%;
  height: 100%;
}
.square1,
.square2{
  border-bottom: 1px solid black;
}
.square3,
.square4{
  border-top: 1px solid black;
}
.square1,
.square3{
  border-right: 1px solid black;
}
.square2,
.square4{
  border-left: 1px solid black;
}

.circle {
  position: absolute;
  border-radius: 50%;
  border: 0.1rem solid white;
}

.circle1,
.circle2 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* position: fixed; */
}

.circle1 {
  width: 370px;
  height: 370px;

}

.circle2 {
  width: 360px;
  height: 360px;
}

.line {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: -1;
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position:fixed */
}

.film-countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 1;
}
#count{
  font-size: 250px;
  font-family: var(--font__secundaria);
  color: rgb(249, 249, 249);
  font-weight: lighter;
  text-align: center;
}
.hands {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.hand{
  bottom: 50%;
  left: 50%;
  transform-origin: bottom center;
  position: absolute;
}
.needle {
  background: black;
  height: 100%;
  width: 4px;
  border-radius: 4px;
  position: absolute;
  z-index: -1;
  transition: transform 1s linear;
}

@media (max-width: 600px)  {
  .app-container {
    height: 100%;
  }

  .circle1,
  .circle2,
  .line {
    position: fixed;
  }
  .circle1{
    width:310px;
    height: 310px;
  }
  .circle2{
    width:300px;
    height: 300px;
  }


  .film-countdown {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 200px
  }

  .hands {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media (min-width: 601px) and (max-width: 1024px) {
  .film-countdown {
    font-size: 200px;
  }
  
  .circle1 {
    width: 360px;
    height: 360px;
  }
  
  .circle2 {
    width: 350px;
    height: 350px;
  }
  
  .needle {
    width: 3px;
  }
}

/* Large desktops */
@media (min-width: 1025px) {
  .film-countdown {
    font-size: 250px;
  }
  
  .circle1 {
    width: 450px;
    height: 450px;
  }
  
  .circle2 {
    width: 440px;
    height: 440px;
  }
  
  .needle {
    width: 4px;
  }
}
</style>