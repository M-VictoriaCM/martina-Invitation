<script>
import Swal from 'sweetalert2';
import IconInstagram from './icons/IconInstagram.vue';
export default {
    name: 'SectionRedes',
    components: {
        IconInstagram
    },
    data() {
        return {
            title: 'Los momentos mágicos merecen ser compartidos con personas especiales.',
            subtitle: 'Compartí tus fotos y videos de ese hermoso día, usando el hashtag',
            hashTag: "#LosQuinceDeMarty",
            copia:'COPIAR #'
        }
    },
    methods:{
        copyToClipboard(text){
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
           Swal.fire({
            title:'OK!',
            icon: 'success',
            text:'¡El texto ha sido copiado!',
            confirmButtonText:'OK'
           });
        }
        
    }
}
</script>
<template>
    <div class="container__redes">
        <div class="content__redes">
            <h1 class="title_redes">{{ title }}</h1>
            <h2 class="subtitle_redes">{{ subtitle }}</h2>
            <icon-instagram class="icon__redes"/>
            <h1 class="hastag">{{ hashTag }}</h1>
            <button type="button" class="btn btn-primary" @click="copyToClipboard(hashTag)">{{ copia }}</button>
        </div>
       
        <div class="custom-shape-divider-top-1719161079">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    class="shape-fill"></path>
            </svg>
        </div>
        <div class="custom-shape-divider-bottom-1719161146">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    class="shape-fill"></path>
            </svg>
        </div>
    </div>
</template>

<style scoped>
.container__redes {
    width: 100%;
    max-width: 100%;
    height: 500px;
    position: relative;
    margin-bottom: 10rem;
    background: var(--color_txt__light);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
}
.content__redes{
    display: flex;
    height:80%;
    width:100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top:2.5rem;
}
.icon__redes{
    margin: 0 auto;
}
.custom-shape-divider-top-1719161079 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1719161079 svg {
    position: relative;
    display: block;
    width: calc(138% + 1.3px);
    height: 54px;
}

.custom-shape-divider-top-1719161079 .shape-fill {
    fill: #D5D5D5;
    stroke-linecap:round red;
}

.custom-shape-divider-bottom-1719161146 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1719161146 svg {
    position: relative;
    display: block;
    width: calc(138% + 1.3px);
    height: 54px;
}

.custom-shape-divider-bottom-1719161146 .shape-fill {
    fill: #D5D5D5;
}

.title_redes {
    padding-top:2rem;
    font-size: 42px;
    font-family: var(--font__principal);
    font-weight:normal;
    line-height: 110%;
    text-align: center;
    color: var(--color__principal_dark);
    margin: 0 1rem;
}

.subtitle_redes {
    font-family: var(--font__secundaria);
    font-weight: 100;
    font-size: 12px;
    line-height: 90%;
    text-align: center;
    color: var(--color__principal_dark);
}

.hastag {
    font-family: var(--font__secundaria);
    line-height: 100%;
    text-align: center;
    color: var(--color__principal_dark);
   font-size: 1rem;
}
.btn-primary {
    color: #D38487;
    /* padding:  2px; */
    font-weight: normal;
    cursor: pointer;
    border-radius: 10px;
    height: 44px;
    width: 80%;
    border: none;
    background: #FFD7D7;
    font-family: var(--font__secundaria);
    font-size: 16px;
    margin-bottom:.5rem;
}

.btn-primary:focus,
.btn-primary:active {
    outline: none;
}

.btn-primary:hover {
    background: #D38487;
    color: #FEFEFE; 
}

.btn-close:hover,
.btn-close:focus {
    outline: none;
    box-shadow: none;
    background-color: var(--color__principal_dark);
    border-radius: 50%;
}

.btn-close::before {
    color: #D38487;
}
@media (min-width: 1025px) {
   
    .container__redes{
        height:550px;
        margin-bottom:8rem;
    }
    .btn-primary{
        height:64px;
        width:60%;

    }
    .content__redes{
        width:70%
    }
    .title_redes{
        font-size:64px
    }
    .subtitle_redes{
        font-size:1.5rem;
    }
    .hastag {
        margin:2rem 0;
        font-size:2rem;
    }
}
</style>