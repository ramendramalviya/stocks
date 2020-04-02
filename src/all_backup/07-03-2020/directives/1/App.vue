<!-- Simple & custom directive for binding value--->
<template>
<div class="container">
  <div class="row">
    <div class="col-sm-8 col-md-6 col-xs-12">
      <p v-text="'This is Directive text'"></p>
      
      <p v-html="'<strong>This is Directive text</strong>'"></p>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-8 col-md-6 col-xs-12">
      <p v-highlight>This is Directive text</p>
     <p v-highlight:background="'red'">This is Directive text</p>
     <p v-highlight="'red'">This is Directive text</p>
    </div>
  </div>
</div>
</template>

<script>


  /**  vnode */
export default {
  
}
</script>