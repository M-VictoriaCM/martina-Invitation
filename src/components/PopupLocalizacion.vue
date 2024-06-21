<script>
import IconLocation from './icons/IconLocation.vue';
export default {
    components: { IconLocation },
    data() {
        return {
        infoBtn: '¿CÓMO LLEGAR?',
        modalTitle: 'Cómo llegar a la Fiesta',
        map: 'ABRIR APP',
        mapUrl:'https://maps.app.goo.gl/rw2LUxJ9kbTKGh999'
        };
    }, 
    methods:{
        openMap(){
            window.open(this.mapUrl, '_blank');
        },
        close(){
            this.$emit('close');
        }
        
    }
};
</script>
<template>
    <div class="pop-up">
        <div class="pop-up-inner">
            <div class="pop-up-close" @click="close()">
                <i class="fa-solid fa-xmark icon__close"></i>
            </div>
            <!--body-->
            <div class="pop-up-body">
                <div class="circle">
                    <IconLocation class="icon__circle"/>
                </div>
                <h1 class="title">{{ modalTitle }}</h1>
                <div class="modal-body">
                    <div class="map-container">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.610837648265!2d-60.1006553241042!3d-38.03285107192159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9592311e20184ea5%3A0x9e747032d11e3a61!2sLa%20Cascada%20Eventos%20Adolfo%20Gonzales%20Chaves!5e0!3m2!1ses-419!2sar!4v1717480729319!5m2!1ses-419!2sar"
                        width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

            </div>
            <div class="pop-up-footer">
                <button type="button" class="btn btn-primary" @click="openMap()">{{ map }}</button>
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
    /* padding:32px 16px 120px; */
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
    width:90%;
    box-shadow: var(--shadow);
    transition:all 250ms ease-in-out;
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
}
.content__radio{
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
    margin-top:.5rem;
    width:100%;
}
.circle {
 width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #FEFEFE;
  border: 1px solid #D38487;
  display: flex;
  flex-direction: column;
  align-content: center;
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
input, textarea{
    border:2px solid var(--color__principal);
}
::placeholder{
    color:rgb(165, 165, 165);
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
.pop-up-footer{
    width:100%;
    display: flex;
    justify-content:center;
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
        border:1px solid red;
    }
    .btn-primary{
        width:60%;
    }
}
@media (min-width: 1025px) {
    .pop-up-inner{
        width: 50%;
        border:1px solid red;
    }
    .pop-up-body{
        width:100%;
    }
    .circle{
        width: 90px;
        height:90px;
    }
    .pop-up-footer{
        width:100%;
    }
    .btn-primary{
        width:50%;
    }
}

</style>