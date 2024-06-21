<script>
export default {
    name:'CardBase',
    data(){
        return{
            numberCode:'0 30820 092024 15',
            titleCode:"Marti's version",
            subtitleCode:'XV'
        }
    }
}
</script>
<template>
      <div class="container__card">
    <div class="container__line">
      <div class="card__image">
        <div class="icon__card">
          <slot name="icon"></slot>
        </div>
      </div>

      <div class="card__content">
        <div class="card__content-text">
          <slot name="content"></slot>
        </div>
      </div>

      <div class="card__footer">
        <div class="card__footer-code">
          <div class="barcode">
            <i class="fa-solid fa-barcode code"></i>
            <i class="fa-solid fa-barcode code"></i>
            <i class="fa-solid fa-barcode code"></i>
            <i class="fa-solid fa-barcode code"></i>
            <i class="fa-solid fa-barcode code"></i>
            <i class="fa-solid fa-barcode code"></i>
            <i class="fa-solid fa-barcode code"></i>
            <i class="fa-solid fa-barcode code"></i>
            <i class="fa-solid fa-barcode code"></i>
            <i class="fa-solid fa-barcode code"></i>
            <!--<i class="fa-solid fa-barcode code"></i>-->
          </div>
          <p class="number__code">{{ numberCode }} </p>
          <h1 class="title__code">{{ titleCode }}</h1>
          <h2 class="title__code">{{ subtitleCode }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container__card{
    width: 320px;
    height:370px;
    background: var(--color__principal);
    box-shadow: var(--color__shadow);
    border-radius: 9px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-top:-2rem;
    margin-bottom: 3rem;
}
.container__line{
  margin: .5rem;
  background: transparent;
  display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 95%;
    height:95%;
    border-radius: 9px;
}
.card__content-text{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card__image{
    background: var(--color_txt__light);
    border-radius: 9px;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid var(--color__principal_dark);
    border-radius: 9px;
   
}
.icon__card{
  width:90px;
  height:90px;
  padding: 1rem;
}
.card__content{
    width: 100%;
    height:50%;
    border:1px solid var(--color__principal_dark);
    border-radius: 9px;
    background: var(--color_txt__light);
}
.card__footer{
    width: 100%;
    height:32%;
    display:flex;
  justify-content: center;
  border:1px solid var(--color__principal_dark);
  border-radius: 9px;
  background: var(--color_txt__light);
}
.card__footer-code{
  width: 80%;
}
.barcode{
  margin-top: .5rem;
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: center;
}
.code{
  color: var(--color__principal_dark);
  font-size: 1.3rem;
}
.number__code{
  font-family: var(--font__secundaria);
  font-size: .5rem;
  text-align: center;
  color: var(--color__principal_dark);
}
.title__code{
  font-size: 24px;
  font-family: var(--font__principal);
   line-height: 90%;
   text-align: center;
   color: var(--color__principal_dark);
}

@media (min-width: 1025px) {
  .container__card{
    width: 900px;
    height: 250px;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    
  }
  .container__line{
    width:100%;
    display:flex;
    flex-direction: row;
  }
  .card__image{
    height:100%;
    width:25%;
  }
  .card__content{
    width: 50%;
    height:100%;
  }
  .card__footer{
    width:25%;
    height:100%;
    border:1px solid red;
  }
  .card__footer-code{
    /* display: inline-block; */
    margin-top:205px;
    transform: rotate(270deg);
    transform-origin: left top;
  }
  .title__code{
    font-size: 36px;
    margin: 1rem 0;
  }
  .barcode{
    height:100%;
    margin-top: 1rem;
  }
  .icon__card{
    width:100px;
    height:100px;
    padding: 1rem;
  }
}
</style>