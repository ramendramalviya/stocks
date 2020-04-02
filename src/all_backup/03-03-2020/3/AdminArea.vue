<template> 
<div> 
    <h2> Admin Area </h2>
    <p>User area text </p>
    <p> Admin Age {{ userAge }} </p>

    <button @click="editAge"> Edit Age </button>
</div>
</template>
<script>
import { eventBus } from '../src/main'; 
export default {
    props:['userAge'],
    methods:{
        editAge(){
            this.userAge = 30;
           // this.$emit('ageWasEdited',this.userAge);
            eventBus.$emit('ageWasEdited',this.userAge);

        }
    }
}
</script>





<style scoped>
div{ background:red; color:#fff;}
</style>