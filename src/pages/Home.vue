<script>
import { ref } from 'vue';
import LoadingV from '../components/LoadingV.vue';
import Portada from '../components/Portada.vue';
import FilmDinamic from '../components/FilmDinamic.vue';
import ReflectorSuperior from '../assets/img/reflectores_superiores.webp';

export default {
    name: 'Home',
    data(){
        return{
            ReflectorSuperior
        }
    },
    components: { LoadingV, FilmDinamic, Portada },
    setup() {
        const showLoading = ref(true);

        function onCountdownFinished() {
            showLoading.value = false;
        }

        return {
            showLoading,
            onCountdownFinished
        };
    }
};
</script>
<template>
    <div id="home">
        <loading-v v-if="showLoading" @countdown-finished="onCountdownFinished"></loading-v>
        <div v-else class="main-content">
            <film-dinamic class="film1" />
            <div class="home_container">
                <div class="img__reflect"></div>
                <img class="reflect" v-lazy="ReflectorSuperior" alt="reflectores_superiores">
            </div>
            <portada></portada>
        </div>
    </div>
</template>


<style scoped>
#home {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}

.main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.home_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-content: center;
}

.reflect {
    width: 450px;
    height: 100%;
    position: relative;
    z-index: 2;
    top: 0;
}

.img__reflect {
    display: none;
}

/*Mobile */
@media(max-width:360px) {
    #home {
        width: 100%;
    }
    .reflect{
        width:100%;
    }
}
@media (min-width: 481px) and (max-width: 767px) {
    .reflect {
        display: none;
    }

    .img__reflect {
        display: block;
        background-image: url('../assets/img/reflectores_superiores.webp');
        background-repeat: repeat-x;
        background-size: contain;
        width: 100%;
        height: 100vh;
        position: relative;
        margin-top: 2rem;
        z-index: 1;
    }
}


@media (min-width: 768px) and (max-width: 1024px) {
    .reflect {
        display: none;
    }

    .img__reflect {
        display: block;
        background-image: url('../assets/img/reflectores_superiores.webp');
        background-repeat: repeat-x;
        background-size: contain;
        width: 100vw;
        height: 100vh;
        position: relative;
        z-index: 1;
    }
}

@media (min-width: 1025px) {
    #home {
        height: 100vh;
    }


    .reflect {
        display: none;
    }

    .img__reflect {
        display: block;
        background-image: url('../assets/img/reflectores_superiores2.webp');
        background-repeat: repeat-x;
        background-size: contain;
        width: 100vw;
        height: 100vh;
        position: relative;
        z-index: 1;
    }
}
</style>
