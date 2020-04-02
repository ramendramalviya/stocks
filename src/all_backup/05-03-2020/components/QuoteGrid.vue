<template>
    <div class="row">
       <app-quote v-for= "(quote, index) in quotes" @click.native="deleteQuote(index)" v-bind:key="quote">
           {{ quote }}
           </app-quote>    
    </div>
</template>

<script>
import Quote from './Quote.vue';
export default {
    props: ['quotes'],
    components: {
        'app-quote': Quote
    },
    methods: {
         deleteQuote(index){
             this.$emit('Deletedquote', index);
         }

    }
    
}
</script>

<style>

</style>