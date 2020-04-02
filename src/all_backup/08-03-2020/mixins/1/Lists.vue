<!---- Filtering value using computed property using Mixins--->
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" v-bind:key="fruit">{{ fruit }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {Fruitmixins} from './Fruitmixins.js'
    export default {
       mixins:[Fruitmixins],
    }
</script>

<style>
</style>
