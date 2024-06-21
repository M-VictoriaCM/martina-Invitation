<script>
import Claqueta from './Claqueta.vue';
import ButtonsPortada from '../components/ButtonsPortada.vue';
import ReflectoresInferiores from './ReflectoresInferiores.vue';

export default {
    components: { 
        ButtonsPortada, 
        ReflectoresInferiores, 
        Claqueta 
    },
    
};
</script>

<template>
    <div class="home__content">
        <claqueta/>
        <reflectores-inferiores/>    
        <buttons-portada 
        @music-play="$root.handleMusicPlay" 
        @music-stop="$root.handleMusicPause" />
    </div>
</template>

<style scoped>
.home__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
}
@media (min-width: 481px) and (max-width: 767px) {
    .home__content{
        width:100vw;
        height:100%;
    }
}
/*Mobile */
@media(max-width:360px) {
    .home__content{
        width: 100%;
        height: 100%;
    }
}

@media (min-width: 1025px) {
    .home__content {
        height: 100%;
        width: 100%;
    }

}
</style>