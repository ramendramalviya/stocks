<!--Component with keep alive-->
<template>
<div>
<div class="row">
 <div class="col-xs-12">
<button @click="Selectedcomponent='app-green'" class="green">Green Template</button>
<button @click="Selectedcomponent='app-red'" class="red">Red Template</button>
<button @click="Selectedcomponent='app-blue'" class="blue">Blue Template</button>
<p>{{Selectedcomponent}}</p>
<keep-alive>
  <component :is="Selectedcomponent">
     <h2 slot="title">Default view</h2>
     <p slot="content">Default view</p>
   </component>
</keep-alive>
  
  </div>
  </div>
</div>
</template>

<script> 
import Blue from './components/Blue.vue';
import Red from './components/Red.vue';
import Green from './components/Green.vue';
export default {
  data: function(){
  return{
    Quotetitle: "Quote",
    Selectedcomponent: "app-green",

  }
  },
   components:{
      'app-blue': Blue,
      'app-red': Red,
      'app-green': Green,
   }
 }

</script>




<style scoped> 
button{
  border: none;
  color: white;
  padding: 15px 22px;
  margin-right: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;}
  .red{background-color: red;}
  .green{background-color:green;}
  .blue{background-color: blue;}
</style>




