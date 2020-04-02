<!--
<template>
 <div>
<app-servers> </app-servers>
 </div>
 </template>
 -->

<template>
 <div>
  <h2> this is the main view file </h2>
  <button @click="changeName"> change name </button>
   <user-area :name="name"> </user-area > 
   <admin-area ></admin-area >


  </div>
</template>


<script> 
import UserArea from './UserArea.vue';
import AdminArea from './AdminArea.vue';
export default {
  data: function(){
    return { name:'max' };
  },
  methods:{
    changeName: function(){
        this.name = 'zenny'
    }

  },
   components:{
      'user-area': UserArea,
      'admin-area': AdminArea

   }
 }

</script>




<style> 
div{ padding:40px; border:1px solid #ccc; }

</style>



