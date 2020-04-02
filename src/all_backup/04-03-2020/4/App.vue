<!-- How to use dynamic component -->
<template>
<div>
<div class="row">
 <div class="col-xs-12">
<button @click="Selectedcomponent='app-quote'">App Quote</button>
<button @click="Selectedcomponent='app-new'">App new</button>
<button @click="Selectedcomponent='app-author'">App author</button>
<p>{{Selectedcomponent}}</p>
<component :is="Selectedcomponent">
  <h2 slot="title">Default view</h2>
  <p slot="content">Default view</p>

</component>
  
  </div>
  </div>
</div>
</template>

<script> 
import Quote from './components/Quote.vue';
import New from './components/New.vue';
import Author from './components/Author.vue';
export default {
  data: function(){
  return{
    Quotetitle: "Quote",
    Selectedcomponent: "app-quote",

  }
  },
   components:{
      'app-quote': Quote,
      'app-new': New,
      'app-author': Author,
   }
 }

</script>




<style scoped> 

</style>




