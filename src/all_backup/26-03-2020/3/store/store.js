import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:  {
      value: 0
     },
     getters:{
        
      value: state=>{
        return state.value;
    
    }
        },
        mutations:{
         
           updateValue: (state, payload) => {
            state.value = payload;
        }
        
        },
        actions:{
         /* increment: context => {
            context.commit('increment');
            }
             decrement: context => {
             context.commit('decrement');
             }
             */

        updateValue: ({commit}, payload) => {
            commit('updateValue', payload);
            
         }
        
        },
    modules: {
      counter
    }
});