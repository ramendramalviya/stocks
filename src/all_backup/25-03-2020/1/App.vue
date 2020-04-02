<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
              <app-result></app-result>
                <appanother-result></appanother-result>
                <hr>
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>
            </div>
        </div>
    </div>
</template>

<script>
  /*The three dots represent the Spread Operator in ES6. 
  It allows us to do quite a few things in Javascript:*/

  /*Example 1*/
var shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil' ];
var racingGames = ['Need For Speed', 'Gran Turismo', 'Burnout'];
var games = [...shooterGames, ...racingGames];

console.log(games)  
// ['Call of Duty', 'Far Cry', 'Resident Evil',  'Need For Speed', 'Gran Turismo', 'Burnout']
   
 /*Example 2*/  
 var shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil' ];
  var [first, ...remaining] = shooterGames;
  console.log(first); //Call of Duty
  console.log(remaining); //['Far Cry', 'Resident Evil']

    import Counter from './components/Counter.vue';
     import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        data() {
            return {
                counter: 0
            }
        },
        components: {
            appCounter: AnotherCounter,
            appAnotherCounter: Counter,
            appResult: Result,
            appanotherResult: AnotherResult,
        }
    }
</script>

