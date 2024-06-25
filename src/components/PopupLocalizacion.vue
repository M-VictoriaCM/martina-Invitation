<script>
import IconLocation from './icons/IconLocation.vue';
import PopupBase from './PopupBase.vue';
export default {
    components: { 
        PopupBase,
        IconLocation 
    },
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
        }   
    }
};
</script>
<template>
    <popup-base :title="modalTitle" >
        <template #icon>
            <div class="circle">
                    <IconLocation class="icon__circle"/>
            </div>
        </template>
        <div class="modal-body">
            <div class="map-container">
                <iframe class="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.610837648265!2d-60.1006553241042!3d-38.03285107192159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9592311e20184ea5%3A0x9e747032d11e3a61!2sLa%20Cascada%20Eventos%20Adolfo%20Gonzales%20Chaves!5e0!3m2!1ses-419!2sar!4v1717480729319!5m2!1ses-419!2sar"
                width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
        <template #footer>
            <button type="button" class="btn btn-primary" @click="openMap()">{{ map }}</button>
        </template>
    </popup-base>
</template>

<style scoped>
.circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--color__circle);
    border: 1px solid var(--color__principal_dark);
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

::placeholder{
    color:rgb(165, 165, 165);
}
.btn-primary {
    color: var(--color__principal_dark);
    /* padding:  2px; */
    font-weight: normal;
    cursor: pointer;
    border-radius: 10px;
    height: 44px;
    width: 100%;
    border: none;
    background: var(--color__btn);
    font-family: var(--font__secundaria);
    font-size: 16px;
}

.btn-primary:focus,
.btn-primary:active {
    outline: none;
}

.btn-primary:hover {
    background: var(--color__principal_dark);
    color: var(--color__circle); 
}

.btn-close:hover,
.btn-close:focus {
    outline: none;
    box-shadow: none;
    background-color: var(--color__principal_dark);
    border-radius: 50%;
}

.btn-close::before {
    color: var(--color__principal_dark);
}
.map{
    width:260px;
    height:auto;
}
@media(max-width:320px) {   
    

    .map{
        margin-top:2rem;
        width:200px;
    }
}

@media(max-width:360px) {
    
    .circle{
        width: 45px;
        height:45px;
    }
    
    
}
@media (min-width: 768px) and (max-width: 991px){
    
    .btn-primary{
        width:60%;
    }
}
@media (min-width: 1025px) {
    
    
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