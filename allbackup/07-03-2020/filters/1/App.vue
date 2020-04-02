<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-6 col-xs-12">
            <p v-text="'This is Directive text'"></p>
            <p>{{text | changeuppercase | to-lowercase}}</p>
        </div>
      </div>
       
    </div>
</template>

<script>
    export default {
       data(){
         return{
       text: 'Hello there',
         }
       },
       filters:{
         changeuppercase(value){
           return value.toUpperCase();
         }
       }
    }
</script>

<style>
</style>
