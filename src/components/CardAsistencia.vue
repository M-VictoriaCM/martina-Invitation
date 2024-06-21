<script>
import PopupAsistencia from './PopupAsistencia.vue';
import IconParty from './icons/IconParty.vue';
export default {
    components: { 
        PopupAsistencia, 
        IconParty 
    },
    data() {
        return {
            date: 'Sábado 03 de Agosto 21:00hs',
            mostrarModalAsist: false,
            namebtn:'CONFIRMAR ASISTENCIA',
            popup:false
        }
    },
    methods: {
        togglePopUp(){
            this.popup = !this.popup
        }
    }
};
</script>
<template>
    <div>
        <div class="card__info">
            <div class="card__info_icon">
                <icon-party class="icon-card"></icon-party>
            </div>
            <div class="card__info__txt">
                <h3 class="card__info__txt__subtitle">{{ date }}</h3>
            </div>
        </div>

        <div class="card__buttom linea-top">
            <transition name="fade">
                <popup-asistencia v-show="popup" @close="togglePopUp()"/>
            </transition>          
            <button class="btn btn-primary" @click="togglePopUp()">{{ namebtn }}</button>
        </div>
    </div>
</template>

<style scoped>
.btn-primary {
    color: #D38487;
    padding: 5px 10px;
    font-weight: normal;
    cursor: pointer;
    border-radius: 10px;
    height: 44px;
    border: none;
    width:100%;
    background: #FFD7D7;
    font-family: var(--font__secundaria);
    transition: box-shadow 0.3s ease;
    font-size: 14px;
  }
  
  .btn-primary:focus,
  .btn-primary:active {
    outline: none;
  }
  
  .btn-primary:hover {
    background: var(--color__principal_dark);
    color: var(--color__principal);
  }
  
</style>