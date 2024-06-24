<script>
import { ref } from 'vue';
import LoadingV from '../components/LoadingV.vue';
import Portada from '../components/Portada.vue';
import FilmDinamic from '../components/FilmDinamic.vue';

export default {
    name: 'Home',
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
                <img class="reflect" src="../assets/img/reflectores_superiores.png" alt="reflectores_superiores">
            </div>
            <portada></portada>
        </div>
    </div>
</template>


<style scoped>
#home,
.main-content,
.home_container {
    display: flex;
    align-items: center;
    width: 100%;
}

.main-content,
.reflect {
    height: 100%;
}

#home {
    justify-content: center;
    height: 100vh;
}

.main-content {
    flex-direction: column;
    justify-content: space-between;
}

.home_container {
    flex-direction: row;
    justify-content: center;
}

.reflect {
    width: 450px;
    position: relative;
    z-index: 2;
    top: 0;
}

.img__reflect {
    display: none;
}

@media(max-width:360px) {

    #home,
    .reflect {
        width: 100%;
    }
}

@media (min-width: 481px) and (max-width: 767px) {
    .reflect {
        display: none;
    }

    .img__reflect {
        display: block;
        background-image: url('../assets/img/reflectores_superiores.png');
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
        background-image: url('../assets/img/reflectores_superiores.png');
        background-repeat: repeat-x;
        background-size: contain;
        width: 100%;
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
        background-image: url('../assets/img/reflectores_superiores2.png');
        background-repeat: repeat-x;
        background-size: contain;
        width: 100vw;
        height: 100vh;
        /* position: relative; */
        z-index: 1;
        overflow: hidden;
    }
}
</style>
