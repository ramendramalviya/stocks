<!---- Filtering value using computed property--->
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" v-bind:key="fruit">{{ fruit }}</li>
                </ul>
            </div>
        </div>
     <div class="row">
       <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
       <app-list></app-list>
       </div>
     </div>

    </div>
</template>

<script>
import Lists from './Lists.vue';
    export default {
        data() {
            return {
                text: 'Hello there!',
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: ''
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                });
            }
        },
        components:{
          'app-list': Lists
        }
    }
</script>

<style>
</style>
