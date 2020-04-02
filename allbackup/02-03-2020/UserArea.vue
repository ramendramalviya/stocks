<template> 
<div> 
 <h2> User Area </h2>
 <p>User area text </p>
 <p> User Name : {{ name }} </p>
</div>
</template>
<script> 
export default {
     props: ['name']

}


</script>


<style scoped>
div{ background:blue; color:#fff;}
</style>