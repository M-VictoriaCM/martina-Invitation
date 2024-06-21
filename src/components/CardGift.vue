<script>
import CardBase from './CardBase.vue'
import IconGift from './icons/IconGift.vue'

export default {
    components:{
    CardBase,
    IconGift
  },
  data(){
    return{
      title:'Regalos',
      description:'xxxxxx'
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
        <icon-gift/>
      </template>
      <template #content>
        <h1 class="card__title">{{ title }}</h1>
        <h2 class="card__description">{{ description }}</h2>
      </template>
    </card-base>
  </div>
</template>

<style scoped>
.card__gift{
    margin-bottom:5rem;
}
.card__title{
  font-family: var(--font__secundaria);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: var(--color__principal_dark);
}

.card__description{
  margin-top: 1rem;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color: var(--color__principal_dark);
}

</style>