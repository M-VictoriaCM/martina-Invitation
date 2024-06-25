<script>
import IconFilm from '../assets/img/film-strip-roll1.webp';
export default {
    name: 'Counter',
    props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
    data() {
        return {
            displayDays: 0,
            displayHours: 0,
            displayMinutes: 0,
            displaySeconds: 0,
            loaded: false,
            expired: false,
            d:"Días",
            h:"Horas",
            m:"Minutos",
            s:"Segundos",
            title:"La filmación comienza en:",
            title1:"LLegó el día",
            IconFilm
        };
    },
    computed: {
        _seconds() {
            return 1000;
        },
        _minutes() {
            return this._seconds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        },
        end() {
            return new Date(
                this.year,
                this.month - 1, // Los meses en JavaScript van de 0 a 11
                this.date,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            );
        }
    },
    mounted() {
        this.showRemaining();
    },
    methods: {
        formatNum(num) {
            return num < 10 ? '0' + num : num;
        },
        showRemaining() {
            const timer = setInterval(() => {
                const now = new Date();
                const distance = this.end.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(timer);
                    this.expired = true;
                    this.loaded = true;
                    return;
                }

                const days = Math.floor(distance / this._days);
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);

                this.displayMinutes = this.formatNum(minutes);
                this.displaySeconds = this.formatNum(seconds);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);
                this.loaded = true;
            }, 1000);
        }
    }
};
</script>

<template>
    <div v-if="loaded" class="container">
        <section class="title__counter">
            <h3 v-show="!expired" class="counter__txt" >{{ title }}</h3>
            <p v-show="expired">{{ title1 }}</p>
        </section>
        
        <section class="counter__container">
            <div class="counter__content dia">
                {{ displayDays }}
                <span class="counter__label">{{ d }}</span>
            </div>

            <div class="counter__content hora">
                {{ displayHours }}
                <span class="counter__label">{{ h }}</span>
            </div>
            <div class="counter__content minuto">
                {{ displayMinutes }}
                <span class="counter__label">{{ m }}</span>
            </div>
            <div class="counter__content segundos">
                {{ displaySeconds }}
                <span class="counter__label">{{ s }}</span>
            </div>
        </section>
        <img class="icon__film" v-lazy="IconFilm" alt="icon_film_roll">

    </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70%;
}
.title__counter{
    height: 10px;
}
.counter__txt{
    font-size: 12px;
    color: #B8B2B2;
    font-family: var(--font__secundaria);
    font-weight: 100;
    text-align: center;
}
.counter__container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100%;
    color: black;
    font-family: var(--font__secundaria);
    font-weight: 600;
    font-size: 20px;
    margin: .5rem 0 .125rem;
}

.counter__content {
    width: 50px;
    height:30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.dia,
.hora,
.minuto {
    border-right: 2px solid var(--color__principal);
}

.counter__label {
    font-size: 11px;
    color: #B8B2B2;
    font-family: var(--font__secundaria);
    font-weight: 100;
    text-align: center;
}
.icon__film{
    margin-top: .5rem;
    width:14px;
    height: auto;
}
@media (min-width: 768px) and (max-width: 991px){
    .title__counter{
        height: 16px;
        margin-top:-10%;
    }
    .counter__content {
    width: 100px;
    height:80px;
    }
    .counter__container{
        font-size: 36px;
        margin: .5rem 0 ;
    }
    .counter__txt{
        font-size: 24px;
    }
    .counter__label {
        font-size: 24px;
    }
    .icon__film{
        margin-top:0;
        width:40px;
    }
}
@media (min-width: 1025px) {
    .container{
        width:100;
        height: 100%;
        margin-top:-4rem;
}
    .title__counter{
        height: 18px;
    }
    .counter__content {
    width: 100px;
    height:60px;
    }
    .counter__container{
        font-size: 56px;
        margin: 2rem 0 ;
    }
    .counter__txt{
        font-size: 24px;
    }
    .counter__label {
        font-size: 24px;
    }
    .icon__film{
        margin-top: 1.5rem;
        width:50px;
    }
}
</style>