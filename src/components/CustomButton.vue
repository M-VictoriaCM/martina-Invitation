<script>
export default {
    name:'CustomButton',
    props:{
        text:{
            type:String,
            required:true
        },
        to:{
            type:String,
            required:false
        }
    },
    methods:{
        navigate(){
            if(this.to){
                this.$router.push(this.to);
            }else{
                this.$emit('click');
            }
        }
    }
    
};
</script>

<template>
    <div>
        <button class="custom-button" @click="navigate">{{ text }}</button>
    </div>
</template>

<style scoped>
.custom-button {
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 20px;
  border: 2px solid #ff0a78;
  background: #ff0a78;
}
.css-button-fully-rounded--rose:hover {
  background: #fff;
  color: #ff0a78
}
</style>
