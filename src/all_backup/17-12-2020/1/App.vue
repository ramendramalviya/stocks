<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="user.username" >
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" type="text" v-model="user.email" >
                </div>
                
             <button class="btn btn-primary" @click="submit">Submit</button>
              <button class="btn btn-primary" @click="fetchdata">Get data</button>
             <ul class="list-group">
                 <li class="list-group-item" v-for="u in users" v-bind:key="u">{{u.username}} - {{u.email}}</li>
             </ul> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            user:{
            username:'',
            email:'',
            }

        };

},
methods:{
submit(){
this.$http.post('', this.user).then(response=>{
  console.log(response);
}, error =>{
  console.log(error);
});
},
fetchdata(){
     this.$http.get('').then(response=>{
     return response.json();
    })
    .then(data => { const resultArray = [];
for(let key in data){
  resultArray.push(data[key]);

}
this.users = resultArray;
});
    }
   }
    }
</script>

<style>
</style>
