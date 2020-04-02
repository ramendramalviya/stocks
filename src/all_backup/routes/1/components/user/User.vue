<template>
<div>
    <h1>The User Page</h1>
<button @click = "Navgatetohome" class="btn btn-primary">Go to home</button>
</div>
</template>

<script>
export default {
    methods:{
        Navgatetohome(){
            this.$router.push('/');
        }
    }
}
</script>