<template> 
<div> 
 <h2> User Area </h2>
 <p>User area text </p>
 <!-- <p> User Name : {{ name }} </p> --> 
 <p> User Name : {{ switchName() }} </p>
 <p> User Age : {{ userAge }} </p> 

<button @click="resetName">Reset</button>
<button @click="resetFn">Reset main</button>


</div>
</template>
<script> 
export default {
     // props: ['myName'],
     props: {
          myName:{
               type : String,
          } ,
          resetFn: Function,
          userAge:Number,     
          
         
         

     },
     methods:{
     switchName(){
               return this.myName.split("").reverse().join("");
           },
     resetName(){

          this.myName = 'Max',
          this.$emit('nameWasReset',this.myName)
     }

     }
}

</script>


<style scoped>
div{ background:blue; color:#fff;}
</style>