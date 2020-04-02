<!--  <template>
 <div>
<app-servers> </app-servers>
 </div>
 </template> -->





<!--Method define in the main file-->

<template>
 <div>
  <h2> this is the main view file </h2>
  <button @click="changeName"> change name </button>
  <p> {{ name }} </p>
   <user-area 
   :myName="name" 
   @nameWasReset="name = $event"
   :resetFn="resetName" 
   :userAge="age"
   >
   </user-area > 
   <admin-area :userAge="age" @ageWasEdited="age = $event"> </admin-area >


  </div>
</template>


<script> 
import UserArea from './UserArea.vue';
import AdminArea from './AdminArea.vue';
export default {
  data: function(){
    return { 
      name:'max',
      age:27,
    };
  },
  methods:{
    changeName: function(){
        this.name = 'zenny'
    },
    resetName: function(){
      this.name = 'reset name main vue'
    }

  },
   components:{
      'user-area': UserArea,
      'admin-area': AdminArea

   }
 }

</script>




<style scoped> 
div{ padding:40px; border:1px solid #ccc; }

</style>




