<script>
import CardBase from './CardBase.vue'
import IconGift from './icons/IconGift.vue'
import PopupBancario from './PopupBancario.vue';

export default {
    components:{
    CardBase,
    IconGift,
    PopupBancario
  },
  data(){
    return{
      title:'Regalos',
      description:'Tu compañía es el mejor regalo que puedo pedir..',
      namebtn:'DATOS BANCARIOS',
      popup:false
    }
  },
  methods: {
        togglePopUp(){
            this.popup = !this.popup
        }
  },
  mounted(){
    this.animate=true;
  }
}
</script>
<template>
    <div class="card__gift">
    <card-base>
      <template #icon>
        <icon-gift class="icon-card"/>
      </template>
      <template #content>
        <h1 class="card__title">{{ title }}</h1>
        <p class="card__description">{{ description }}</p>
        <div class="card__buttom ">
            <transition name="fade">
              <popup-bancario v-show="popup" @close="togglePopUp()"/>
              
            </transition>          
            <button class="btn btn-primary" @click="togglePopUp()">{{ namebtn }}</button>
        </div>
      </template>
    </card-base>
  </div>
</template>

<style scoped>
.card__gift{
    margin-bottom:40rem;
}
.card__title{
  margin-top:1rem;
  font-family: var(--font__secundaria);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: var(--color__principal_dark);
}

.card__description{
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color: var(--color__principal_dark);
}
.btn-primary {
    color: var(--color__principal_dark);
    padding: 5px 32px;
    font-weight: normal;
    cursor: pointer;
    border-radius: 10px;
    height: 44px;
    border: none;
    width:100%;
    background: var(--color__btn);
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
  .icon-card{
    width:70px;
    height:70px;
  }
</style>