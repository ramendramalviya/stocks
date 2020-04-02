<!--passing seperate values to slot--->
<template>
 <div>
  <app-quote>
<h2 slot="title">{{Quotetitle}}</h2>
<p slot="content">This is a quote</p>
  </app-quote>
  </div>
</template>

<script> 
import Quote from './components/Quote.vue';
export default {
  data: function(){
  return{
    Quotetitle: "Quote",

  }
  },
   components:{
      'app-quote': Quote,
   }
 }

</script>




<style scoped> 
div{ padding:40px; border:1px solid #ccc; }

</style>




