<template>
<div>
    <h1>The User Page</h1>
    <p>Loaded ID: {{id}}</p>
<button @click = "Navgatetohome" class="btn btn-primary">Go to home</button>
</div>
</template>

<script>
export default {
    data(){
      return{
      id: this.$route.params.id
       }
    },
    methods:{
        Navgatetohome(){
            this.$router.push('/');
        }
    }
}
</script>