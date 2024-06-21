<template>
  <div class="film__dinamic">
    <div class="content left">
      <div class="cuadrado" v-for="n in 32" :key="'left-' + n"></div>
    </div>
    <div class="content right">
      <div class="cuadrado" v-for="n in 32" :key="'right-' + n"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmDinamic'
};
</script>

<style scoped>
.film__dinamic {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -3;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 1.8rem;
}

.left {
  position: fixed;
  left: 1.5rem;
}

.right {
  position: fixed;
  right: 1.5rem;
}

.cuadrado {
  width: 1.625rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  background-color: white;
  margin-bottom: 0.5rem;
}
/*Small table*/
@media (min-width: 768px) and (max-width: 991px) {
  .film__dinamic{
    height:100%;
  }
  .content {
    width: 2rem;
  }

  .cuadrado {
    width: 2rem;
    height: 2.5rem;
    margin-bottom: 2rem;
  }
}

@media (min-width: 1025px) {
  .film__dinamic{
    height:100%;
  }
  .content {
    width: 3rem;
  }

  .cuadrado {
    width: 3rem;
    height: 3.5rem;
    margin-bottom: 3.5rem;
  }
}
</style>