<script>
import Counter from '../components/Counter.vue';
import FilmBackground from '../assets/img/film1.webp';
export default {
    name: 'Timer',
    components: { Counter },
    data(){
        return{
            FilmBackground
        }
    }
};
</script> 

<template>
    <div>
        <div class="section__timer">
            <img  class="background_count" v-lazy="FilmBackground" alt="film" />
            <div class="countdown">
                <counter :year="2024" :month="8" :date="3" :hour="21" :minute="0" :second="0" :millisecond="31" />
            </div>
            
        </div>
    </div>

</template>

<style scoped>
.section__timer {
    position:relative;
    width: 100%;
    height:120px;
    display: flex;
    justify-content: center;
    align-items: center;

}
.background_count{
    width: 100%;
    height:auto;
    box-shadow: 10px 10px 9px -9px rgba(0,0,0,0.75);

  
}
.countdown{
    position: absolute;
    top: 25px;
}
@media(max-width:320px){
    .section__timer{
        margin-top:1.6rem;
    }
}
@media (min-width: 768px) and (max-width: 991px){
   
}
@media (min-width: 1025px) {
    .section__timer {
        width: 100%;
    }
    .background_count{
        width:100%;
    }
}
</style>