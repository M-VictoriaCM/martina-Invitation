<script>
import IconParty from './icons/IconParty.vue';
import Swal from 'sweetalert2';

export default {
    name:'PopupAsistencia',
    components:{
    IconParty
    },
    data(){
        return{
            title: '¿Asistiré a la fiesta?',
            options1: 'Sí, asistiré',
            options2: 'No podré asistir',
            inputName: 'Nombre completo:',
            inputTxtArea: 'Información adicional (opcional):',
            send:'ENVIAR',
            isAttending: '',
            nombre: '',
            informacionAdicional: '',
            errorMessage: ''
        }
    },
    methods: {
        enviarAWhatsApp() {
            if (!this.nombre || !this.isAttending) {
                Swal.fire({
                title: 'Error!',
                text: 'Por favor, complete todos los campos requeridos',
                icon: 'error',
                confirmButtonText: 'OK'
                });
                return;
            }

            const mensaje = `Nombre: ${this.nombre}\nAsistiré: ${this.isAttending === 'yes' ? 'Sí' : 'No'}\nInformación adicional: ${this.informacionAdicional}`;
            const telefono = "2983586371";
            const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

            Swal.fire({
                title: 'Info!',
                text: 'Será redirigido a WhatsApp para confirmar el envío del mensaje.',
                icon: 'info',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                window.open(enlaceWhatsApp, '_blank');
                }
            });
        },
        close(){
            this.$emit('close');
        }
    },
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
                    <icon-party class="icon__circle"></icon-party>
                </div>
                <h1 class="title">{{ title }}</h1>
                <div class="modal-body">
                    <div class="-flex flex-column">
                        <div class="form-group mb-3">
                            <div class="content__radio">
                                <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="attendingYes" name="attendance" v-model="isAttending" value="yes" />
                                <label class="form-check-label" for="attendingYes">{{ options1 }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="attendingNo" name="attendance" v-model="isAttending" value="no" />
                                <label class="form-check-label" for="attendingNo">{{ options2 }}</label>
                            </div>
                            </div>
                            <span class="text-danger" v-if="errorMessage">{{ errorMessage }}</span>
                        </div>
                        <div class="form-group mb-3">
                            <label for="nombre" class="form-label">{{ inputName }}</label>
                            <input type="text" class="form-control" id="nombre" v-model="nombre" placeholder="Ej: Juan Pérez" />
                        </div>
                        <div class="form-group mb-3">
                            <label for="informacionAdicional" class="form-label">{{ inputTxtArea }}</label>
                            <textarea class="form-control" id="informacionAdicional" v-model="informacionAdicional" rows="3" placeholder="Ej: Vegetariano, alergico, etc."></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pop-up-footer">
                <button type="button" class="btn btn-primary" @click="enviarAWhatsApp">{{ send }}</button>
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
    }
    .btn-primary{
        width:60%;
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