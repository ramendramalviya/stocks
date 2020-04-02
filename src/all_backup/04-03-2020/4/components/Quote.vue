<template>
    <div>
        <span class="heading">
   <slot name="title"></slot>
        </span>
         <span class="text">
   <slot name="content"></slot>
         </span>
  </div>
</template>



<script>
export default {
    
}
</script>

<style scoped>

div{border: 1px 1px 1px black; text-align: center; }
h2{color:red;}
</style>