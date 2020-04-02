<template>
<div class="container">
  <app-progress :quotecount="quotes.length" :maxquotes="maxquotes"></app-progress>
  <app-new-quote @Newquoteadded="NewQuote"></app-new-quote>
<app-quote-grid :quotes="quotes" @Deletedquote="Quotedelete"></app-quote-grid>
<div class="row">
  <div class="col-sm-12 text-center">
    <div class="alert alert-info">Info: Click on the box to delete the quote.</div>
  </div>
</div>
</div>
</template>

<script> 
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Progressbar from './components/Progressbar.vue';
export default {
  data: function(){
  return{
    quotes : ['This is default quote'],
    maxquotes:10
  }
  },
   components:{
     'app-quote-grid': QuoteGrid,
     'app-new-quote': NewQuote,
     'app-progress': Progressbar
     
   },
   methods:{
     NewQuote(quote){
       if(this.quotes.length >= this.maxquotes){
         return alert('You reached the max limit. Please delete some quotes');
       }
      this.quotes.push(quote);

     },
     Quotedelete(index){
       this.quotes.splice(index,1);

     }

    }
 }

</script>




<style scoped> 

</style>




