<template>
<div>
    <h1>The User Page</h1>
   
<button @click = "Navgatetohome" class="btn btn-primary">Go to home</button>
 <p>Loaded ID: {{id}}</p>
</div>
</template>

<script>
export default {
    data(){
      return{
      id: this.$route.params.id
       }
    },
    watch:{
        $route: function(to) {
         this.id = to.params.id
        }

    },
    methods:{
        Navgatetohome(){
            this.$router.push('/');
        }
    }
}
</script>