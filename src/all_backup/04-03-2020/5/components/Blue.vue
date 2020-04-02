<template>
    <div>
        <h2 class="heading">
   This is a new Heading
        </h2>
        <button @click="Counter++">Increase</button>
        {{Counter}}
         <div class="text">
       This is a new content 
         </div>
  </div>
</template>



<script>
export default {
  data: function(){
    return{
     Counter: 0,
       }
    },
  destroyed(){
    console.log('Destroyed!');
    },
    deactivated(){
    console.log('Deactivated!');
    },
    activated(){
    console.log('Activated!');
    }
}
</script>

<style scoped>

div{border: 1px 1px 1px black; text-align: center; }
h2{color:blue;}
</style>