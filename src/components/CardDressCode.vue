<script>
import CardBase from './CardBase.vue';
import IconDress from './icons/IconDress.vue'

export default {
  name:'CardDress',
  components:{
    CardBase,
    IconDress
  },
  data(){
    return{
      title:'DRESS CODE',
      description:'Elegante Sport'
    }
  }
}
</script>

<template>
  <div>
    <card-base>
      <template #icon>
        <icon-dress/>
      </template>
      <template #content>
        <h1 class="card__title">{{ title }}</h1>
        <h2 class="card__description">{{ description }}</h2>
      </template>
    </card-base>
  </div>
</template>

<style scoped>
.card__title,
.card__description{
  text-align: center;
  color: var(--color__principal_dark);
}
.card__title{
  font-family: var(--font__secundaria);
  font-size: 2rem;
  font-weight: 700;
  
}

.card__description{
  margin-top: 1rem;
  font-size: 16px;
  font-weight: 500;
}

</style>