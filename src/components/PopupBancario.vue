<script>
import Swal from 'sweetalert2';
import IconGift from './icons/IconGift.vue';

export default {
    name:'CardBancario',
    components:{
        IconGift
    },
    data(){
        return{
            title:'Regalos',
            name:'Carla Viviana Rodriguez',
            cvu:' 0000003100021546244068',
            alias:'LOS.XV.DEMARTI',
            datos:'27306652090',
            cuenta:'Mercado de pago',
            send1:'COPIAR CBU',
            send2:'COPIAR ALIAS'
        }
    },
    methods:{
        openMap(){
            window.open(this.mapUrl, '_blank');
        },
        close(){
            this.$emit('close');
        },
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
    <div class="pop-up">
        <div class="pop-up-inner">
            <div class="pop-up-close" @click="close()">
                <i class="fa-solid fa-xmark icon__close"></i>
            </div>
            <!--Body-->
            <div class="pop-up-body">
                <div class="circle">
                    <icon-gift class="icon__circle"/>
                </div>
                <h1 class="title">{{ title }}</h1>
                <span  class="block__text">
                    <h3 class="title__section" >TITULAR:</h3>
                    <p class="text__section">{{ name }}</p>
                </span>
                <span class="block__text">
                    <h3 class="title__section" >CVU:</h3>
                    <p class="text__section">{{ cvu }}</p>
                </span>
                <span class="block__text">
                    <h3 class="title__section" >ALIAS:</h3>
                    <p class="text__section">{{ alias }}</p>
                </span>
                <span class="block__text">
                    <h3 class="title__section" >CUIT/CUIL</h3>
                    <p class="text__section">{{ datos }}</p>
                </span>
                <span class="block__text">
                    <h3 class="title__section" >CUENTA:</h3>
                    <p class="text__section">{{ cuenta }}</p>
                </span>
                
            </div>
            <div class="pop-up-footer">
                <button type="button" class="btn btn-primary" @click="copyToClipboard(cvu)">{{ send1 }}</button>
                <button type="button" class="btn btn-primary" @click="copyToClipboard(alias)">{{ send2 }}</button>
            </div>
        </div>
        </div>
</template>

<style scoped>
.pop-up{
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    padding:32px 16px 120px;
    height:100vh;
    width:100%;
    background:rgba(0, 0, 0, .6);
    display: grid;
    place-items: center;
}

.icon__close{
    position:absolute;
    height:52px;
    width:52px;
    display:flex;
    border-radius:50%;
    padding:.5rem;
    margin:.5rem;
    justify-content: center;
    align-items: center;
    top:0;
    right:0;
    font-size:1.5rem;
    cursor:pointer;
    color:black;
}
.pop-up-inner{
    background-color: #fff;
    color:black;
    position:relative;
    padding:40px;
    border-radius:9px;
    width:95%;
    box-shadow: var(--shadow);
    transition:all 250ms ease-in-out
}
.fade-enter .pop-up-inner,
.fade-leave-to .pop-up-inner {
    opacity: 0;
    transform: translateY(-32px);
}
.fade-enter-active,
.fade-leave-active{
    transition:all 250ms ease-in-out
}
.fade-leave-active{
    transition-delay:250ms;
}
.pop-up-body{
    width: 100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center ;
    border-radius: 10px;
}
.circle {
 width: 95px;
  height: 95px;
  border-radius: 50%;
  background: #FEFEFE;
  border: 1px solid #D38487;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}

.icon__circle{
  width:100%;
  display:flex;
  justify-content: center;
}
.title {
    font-family: var(--font__secundaria);
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color__principal_dark);
    text-align: center;
    margin:1rem 0;
}

.block__text{
    width:90%;
    display:flex;
    flex-direction: row;
    align-items:center;
}
.title__section{
    font-family: var(--font__secundaria);
    color: var(--color__principal_dark);
    font-size:1rem;
}
.text__section{
    font-family: var(--font__secundaria);
    color: var(--color__principal_dark);
    font-size:14px;
    margin-top: .6rem;
    margin-left:.5rem;
    line-height: 100%;
}
.pop-up-footer{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.btn-primary {
    color: #D38487;
    /* padding:  2px; */
    font-weight: normal;
    cursor: pointer;
    border-radius: 10px;
    height: 44px;
    width: 100%;
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
@media(max-width:360px) {
    .pop-up-inner{
        width: 100%;
        height:530px;
    }
    .circle{
        width: 45px;
        height:45px;
    }
    .pop-up-body{
        height:90%;
    }
    .title{
        margin:0;
    }
}
@media (min-width: 768px) and (max-width: 991px){
    .pop-up-inner{
        width: 70%;
    }
}
@media (min-width: 1025px) {
    .pop-up-inner{
        width: 50%;
    }
    .pop-up-body{
        width:100%;
    }
    .circle{
        width: 150px;
        height:150px;
    }
    .pop-up-footer{
        width:100%;
    }
    .btn-primary{
        width:70%;
    }
}

</style>