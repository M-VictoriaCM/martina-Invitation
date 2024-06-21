<script>

export default {
    name: 'Intitation',
    data() {
        return {
            portada: '¡ESTÁS INVITADO!',
            title: "Martina's version",
            subtitle: 'MIS 15 AÑOS',
            text: 'Te espero para compartir la alegría de esa noche que será para mi mágica, inolvidable y única.'
        };
    },
}
</script>

<template>
    <div class="section__card">
        <div class="card__body">
            <p class="card_txt">{{ portada }}</p>
            <div class="line-container1">
                <div class="horizontal-line"></div>
            </div>
            <h1 class="section__title">{{ title }}</h1>
            <h2 class="section__subtitle">{{ subtitle }}</h2>
            <div class="line-container2">
                <div class="horizontal-line"></div>
            </div>
            <p class="card_text1">{{ text }}</p>
        </div>
    </div>
</template>

<style scoped>
.section__card {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  height:auto;
  border-radius: 9px;
}
.section__card{
    background: var(--color__principal);
    color: var(--color_txt__light);
    box-shadow: 10px 10px 9px -9px rgba(0, 0, 0, 0.75);
}
.card__body{
    position: relative;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card_txt,
.section__title,
.section__subtitle,
.card_text1 {
    text-align: center;
}
.card_txt {
    font-family: var(--font__secundaria);
    font-size: 11px;
    color: var(--color_txt__light);
    margin-top: .5rem;
}
.card_text1 {
    font-family: var(--font__secundaria);
    font-size: 12px;
    margin: .7rem 2rem;
    line-height: 100%;
}

.section__title {
    font-size: 48px;
    font-family: var(--font__principal);
    line-height: 90%;
    margin-top: .5rem;

}

.section__subtitle {
    font-family: var(--font__secundaria);
    font-weight: 100;
    font-size: 20px;
    line-height: 90%;
}

.line-container1 {
    top: 26px;
}

.line-container2 {
    top: 124px;
}

.line-container1,
.line-container2 {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 2px;
    position: absolute;
}

.horizontal-line {
    width: 80%;
    border: none;
    border-top: 1px solid white;
    background-color: transparent;
    margin: none;
}

@media(max-width:360px){
    .section__card {
        max-width: 260px;
        height:auto;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .section__card {
        max-width: 500px;
        height:300px;
    }
    .section__title{
        font-size: 72px;
        margin-top: 1.5rem;
    }
    .card_txt{
        font-size: 16px;
        margin-top: .5rem;
    }
    .section__subtitle{
        font-size: 36px;
    }
    .card_text1{
        font-size: 16px;
        margin: 1.5rem 2rem 0;
    }
    .line-container1 {
    margin-top: 12px;
    }   

    .line-container2 {
    margin-top: 64px; 
    }
}
@media (min-width: 1025px) {
    .section__card{
        max-width:100%;
        height:405px;
    }
    .card__body{
        width:100%;
        height: 100%;
    }
    .section__title{
        font-size: 96px;
        margin-top: 1.5rem;
    }
    .card_txt{
        font-size: 18px;
        margin-top: 1rem;
    }
    .section__subtitle{
        font-size: 46px;
    }
    .card_text1{
        font-size: 24px;
        margin: 1.5rem 2rem 0;
    }
    .line-container1 {
    top: 42px;
    }   

    .line-container2 {
    top: 224px; 
    }
}

</style>