<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by:50, duration: 2000})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by:50, duration: 2000})">Decrement</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        methods: {
            /*increment() {
                this.$store.commit('increment');
            },
            decrement() {
              this.$store.commit('decrement');
            }*/
            ...mapActions([
        'asyncIncrement',
        'asyncDecrement'

      ]),
      increment(by){
       this.$store.dispatch('increment', by);
    },
    decrement(by){
       this.$store.dispatch('decrement', by);
    }
        }
    }
</script>