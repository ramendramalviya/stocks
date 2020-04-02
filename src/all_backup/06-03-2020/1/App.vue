<template>
<div class="container">
<form>

<div class="row">
<div class="col-sm-8 colxs-12 col-md-6">
<h1>File a complaint</h1>
<div class="form-group">
<label for="email">Mail</label>
<input type="text" id="email" class="form-control" v-model="userdata.email">
</div>

<div class="form-group">
<label for="password">Password</label>
<input type="text" id="password" class="form-control" v-model="userdata.password">
</div>

<div class="form-group">
<label for="age">Age</label>
<input type="number" id="age" class="form-control" v-model="userdata.age">
</div>

<div class="form-group">
<label for="age">Message</label>
<textarea type="number" id="message" class="form-control" v-model="message"></textarea>
</div>

<div class="form-group checkbox checkbox-inline" >
<label for="sendmail"> 
<input type="checkbox" id="sendmail" value="sendmail" v-model="sendmail">Send Mail
</label>

<label for="sendinfomail" >
<input type="checkbox" id="sendinfomail" value="sendinfomail" v-model="sendmail">Send infomail
</label>
</div>

<div class="form-group radio-inline">
<label for="male">
<input type="radio" id="male" value="Male" v-model="gender">Male
</label>


<label for="female">
<input type="radio" id="female" value="Female" v-model="gender">Female
</label>

</div>

 <div class="form-group">
      <label for="priority">Priority</label>
      <select id="priority" class="form-control" v-model="selectedpriority">
        <option v-for="priority in priorities" v-bind:key="priority">{{priority}}</option>
      </select>
    </div>


<div class="form-group">
<label for="age">Message</label>
<textarea type="number" id="message" class="form-control" v-model="message"></textarea>
</div>




<div class="row">
<div class="col-sm-8 colxs-12 col-md-6">
<button class="btn btn-primary">Submit</button>
</div>
</div>

</div>
</div>

</form>

<!---data----------->
<div class="row">
<div class="col-sm-8 colxs-12 col-md-6">
<div class="panel panel-default">
<div class="panel-heading">
<h4>Your data</h4>
</div>

<div class="panel-body">
<p>Mail: {{userdata.email}}</p>
<p>Passowrd: </p>
<p>Age: </p>
<p style="white-space:pre;">Message:{{message}} </p>
<p><strong>Send mail: </strong></p>
<ul>
  <li v-for="items in sendmail" v-bind:key="items">{{items}}</li>
</ul>
<p><strong>Gender: </strong>{{gender}}</p>
<p><strong>Priority: </strong>{{selectedpriority}}</p>

</div>

</div>
</div>
</div>


</div>
</template>

<script> 

export default {
  data: function(){
  return{
    userdata: {
      email:'',
      password:'',
      age: 27,
    },
    message: 'Type your message',
    sendmail: [],
    gender: 'male',
    selectedpriority: 'high',
    priorities: ['high', 'medium', 'low'],
  }
  },
  
   
 }

</script>


<style > 
.checkbox-inline label {
    margin-right: 10px;
}
.radio-inline label {
    margin-right: 10px;
}
.container{
margin: 0 auto;
padding: 20px;
}
h4{
    background: #e2e2e2;
    padding: 10px;
    margin-top: 25px;
    border-bottom: 1px solid #ccc;

}
.panel .panel-body {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>
