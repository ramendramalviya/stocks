<template>
    <div class="row">
     <form>
         <div class="col-sm-8 col-sm-offset-2 form-group">
             <label>Quote</label>
             <textarea class="form-control" rows="3" v-model="quote"></textarea>
         </div>  
         <div class="col-sm-8 col-sm-offset-2 form-group">
             <button class="btn btn-primary" @click.prevent="CreateNew">Quote</button>
         </div>  

     </form>
          
    </div>
</template>

<script>

export default {
    data: function(){
       return{
            quote: '' 
       }
    },
    methods:{
     CreateNew(){
      this.$emit('Newquoteadded', this.quote);
      this.quote = '';

     }  

    }
  
}
</script>

<style>
form {
    width: 100%;
}
</style>