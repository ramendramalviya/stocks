<template> 
  <div>
    <p> Server Status {{ title }} </p>
    <button @click="changeTitle">click</button>
   </div>
</template>

<script>
  export default {
   data : function(){
      return{
          title: 'Critical'
      }
    },
    methods :{
      changeTitle(){
        this.title = 'normal';
      }

    }
 }
</script>


<style scoped> </style>