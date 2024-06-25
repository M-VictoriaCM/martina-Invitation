<script>
import PopupBase from './PopupBase.vue';
import Swal from 'sweetalert2';
import IconGift from './icons/IconGift.vue';

export default {
    name: 'CardBancario',
    components: {
        PopupBase,
        IconGift
    },
    data() {
        return {
            title: 'Regalos',
            name: 'Carla Viviana Rodriguez',
            cvu: ' 0000003100021546244068',
            alias: 'LOS.XV.DEMARTI',
            datos: '27306652090',
            cuenta: 'Mercado de pago',
            send1: 'COPIAR CBU',
            send2: 'COPIAR ALIAS'
        }
    },
    methods: {
        copyToClipboard(text) {
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            Swal.fire({
                title: 'OK!',
                icon: 'success',
                text: '¡El texto ha sido copiado!',
                confirmButtonText: 'OK'
            });
        }

    }
}
</script>

<template>
    <popup-base :title="title" >
        <template #icon>
            <div class="circle">
                <icon-gift class="icon__circle"/>
            </div>
        </template>
        <div class="modal-body">
            <span class="block__text">
                <h3 class="title__section">TITULAR:</h3>
                <p class="text__section">{{ name }}</p>
            </span>
            <span class="block__text">
                <h3 class="title__section">CVU:</h3>
                <p class="text__section">{{ cvu }}</p>
            </span>
            <span class="block__text">
                <h3 class="title__section">ALIAS:</h3>
                <p class="text__section">{{ alias }}</p>
            </span>
            <span class="block__text">
                <h3 class="title__section">CUIT/CUIL</h3>
                <p class="text__section">{{ datos }}</p>
            </span>
            <span class="block__text">
                <h3 class="title__section">CUENTA:</h3>
                <p class="text__section">{{ cuenta }}</p>
            </span>
        </div>
        <div class="pop-up-footer">
            <button type="button" class="btn btn-primary" @click="copyToClipboard(cvu)">{{ send1 }}</button>
            <button type="button" class="btn btn-primary" @click="copyToClipboard(alias)">{{ send2 }}</button>
        </div>
    </popup-base>
</template>

<style scoped>
.circle {
    width: 95px;
    height: 95px;
    border-radius: 50%;
    background:var(--color__circle);
    border: 1px solid var(--color__principal_dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
}

.icon__circle {
    width: 100%;
    display: flex;
    justify-content: center;
}

.block__text {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.title__section {
    font-family: var(--font__secundaria);
    color: var(--color__principal_dark);
    font-size: 1rem;
}

.text__section {
    font-family: var(--font__secundaria);
    color: var(--color__principal_dark);
    font-size: 14px;
    margin-top: .6rem;
    margin-left: .5rem;
    line-height: 100%;
}


.btn-primary {
    color: var(--color__principal_dark);
    font-weight: normal;
    cursor: pointer;
    border-radius: 10px;
    height: 44px;
    width: 100%;
    border: none;
    background: var(--color__btn);
    font-family: var(--font__secundaria);
    font-size: 16px;
    margin-bottom: .5rem;
}

.btn-primary:focus,
.btn-primary:active {
    outline: none;
}

.btn-primary:hover {
    background: var(--color__principal_dark);
    color: var(--color__btn);
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
.pop-up-footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media(max-width:320px) {
    .pop-up {
        padding: 3px 16px 200px;
    }
    .pop-up-body{
        height:100%;
    }
}

@media(max-width:360px) {
    .pop-up-inner {
        width: 100%;
        height: 530px;
    }

    .circle {
        width: 45px;
        height: 45px;
    }

    .pop-up-body {
        height: 90%;
    }

    .title {
        margin: 0;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .pop-up-inner {
        width: 70%;
    }
}

@media (min-width: 1025px) {
    .pop-up-inner {
        width: 50%;
    }

    .pop-up-body {
        width: 100%;
    }

    .circle {
        width: 150px;
        height: 150px;
    }

    .pop-up-footer {
        width: 100%;
    }

    .btn-primary {
        width: 70%;
    }
}
</style>