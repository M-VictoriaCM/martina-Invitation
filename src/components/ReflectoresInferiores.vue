<script>
export default {
    name: 'ReflectoresInferiores',
    data() {
        return {
             description: 'La música de fondo es parte de la experiencia.'
        }
    }
}
</script>

<template>
    <div class="home__box3">
        <img src="../assets/img/reflector_der.png" class="reflec1" alt="reflectores_derecho">
        <p class="subtitle1">{{ description }}</p>
        <img src="../assets/img/reflector_izq.png" class="reflec2" alt="reflectores_izquierdo">

    </div>
</template>

<style scoped>
.home__box3 {
    position: absolute;
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.reflec1,
.reflec2 {
    width: 84px;
    height: 120px;
}

.reflec1 {
    margin-left: 2rem;
}

.reflec2 {
    margin-right: 2rem;
}

.subtitle1 {
    font-family: var(--font__secundaria);
    font-size: 12px;
    font-weight: 500;
    margin-top: 3rem;
    text-align: center;
    width: 400px;
}
@media (min-width: 481px) and (max-width: 767px) {
    .home__box3 {
    margin-top: -10rem;
    width: 90%;
    }
}
/*Small table*/
@media (min-width: 768px) and (max-width: 991px) {
    .home__box3{
        margin-top: -25rem;
        width:60%;
    }
}
@media (min-width: 1025px) {
    .home__box3 {
        margin-top:-14%;
        height:30%;
    }
    .reflec1 {
        margin-left: 25rem;
    }

    .reflec2 {
        margin-right: 25rem;
    }
    .subtitle1 {
        font-size: 14px;
    }
}
@media (min-width: 1280px) {
    .home__box3 {
        margin-top:-19%;
        height:30%;
    }
}
</style>