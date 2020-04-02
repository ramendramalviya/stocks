<template>
<div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks:{{stringCounter}}</p>
</div>
</template>

<script>
import * as types from '../store/types.js';
import {mapGetters} from 'vuex';
    export default {
computed: mapGetters({
               doubleCounter: types.DOUBLE_COUNTER,
               stringCounter: types.CLICK_COUNTER

})
    }
</script>