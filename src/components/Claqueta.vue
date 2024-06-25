<script>
export default {
    name:'Claqueta',
    data() {
        return {
            subtitle: 'SE APROXIMA LA FILMACIÓN DE',
            title_principal: "Martina's version",
            title: 'XV'
           
        }
    }
}
</script>
<template>
    <div class="home__box1">
            <img src="../assets/img/claqueta_marti(copia).webp" class="claqueta" alt="claqueta">
            <div class="txt_box1_text">
                <p class="txt__subtitle">{{ subtitle }}</p>
                <div class="line-container">
                    <div class="horizontal-line"></div>
                </div>
                <h1 class="txt__title">{{ title_principal }}</h1>
                <h1 class="txt__title1">{{ title }}</h1>
            </div>
        </div>
</template>

<style scoped>
.home__box1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    top: -250px;
    height: auto;
}

.claqueta {
    width: 350px;
}

.txt_box1_text {
    position: absolute;
    width: 80%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
}

.txt__subtitle {
    font-family: var(--font__secundaria);
    font-size: .625rem;
    font-weight: bold;
    margin-top: 4rem;
    line-height: 140%;
}

.line-container {
    width: 100%;
    display: flex;
    height: 2px;
    justify-content: center;
    position: absolute;
    top: 80px;
}

.horizontal-line {
    width: 80%;
    border: none;
    border-top: 1px solid white;
    background-color: transparent;
    margin: none;
}

.txt__title,
.txt__title1 {
    font-family: var(--font__principal);
    font-weight: normal;
}

.txt__title {
    margin-top: 1rem;
    font-size: 3rem;
    line-height: 90%;
}

.txt__title1 {
    font-size: 4rem;
}

/* ~~~~~~~~~~~~~~~~~~ MEDIAS QUERIES ~~~~~~~~~~~~~~~~~~~~ */
@media(max-width:320px){
    .claqueta{
        margin-top:1rem;
    }
}
@media(max-width:360px) {
    .home__box1 {
        margin: 2.5rem 0;
    }
    .claqueta {
        width: 300px;
        height:auto;
    }
}
@media (min-width: 481px) and (max-width: 767px) {
    .home__box1{
        top:-450px;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .home__box1{
        margin-top:-65%;
        padding: 1rem 0 ;       
    }
    .claqueta {
        width: 450px;
        height: 300px;
    }
    .txt_box1_text{
        width: 450px;
        height: 300px;
    }
    .txt__subtitle{
        font-size: 1rem;
    } 
    .line-container {
        width: 100%;
        margin-top: 10px;
        padding: 0 1rem;
    }
    .txt__title{
        font-size: 4rem;
    }
    .txt__title1{
        font-size: 5rem;
    }
}
@media (min-width: 1025px) {
    .home__box1{
        margin-top:-18%;
        padding: 1rem 0;
    }
    .claqueta {
        width: 450px;
        height: 300px;
    }
    .txt_box1_text{
        width: 450px;
        height: 300px;
    }
  
    .txt__subtitle{
        font-size: 1rem;
    } 
    .line-container {
        width: 100%;
        margin-top: .5rem;
        padding: 0 1rem;
    }
    .txt__title{
        font-size: 4rem;
    }
    .txt__title1{
        font-size: 5rem;
    }
    
}

</style>