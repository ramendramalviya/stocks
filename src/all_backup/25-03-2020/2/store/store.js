import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:  {
      counter: 0
     },
     getters:{
        doubleCounter: state => {
         return state.counter * 2;
        },
        stringCounter: state=>{
          return state.counter + 'Clicks';
      
      }
        },
        mutations:{
          increment: (state, payload) => {
            state.counter += payload;
           },
           decrement: (state, payload) => {
               state.counter -= payload;
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

            increment: ({commit}, payload) => {
              
              commit('increment', payload);
        },
        decrement: ({commit}, payload) => {
          
          commit('decrement', payload);
    },

        asyncIncrement: ({commit}) => {
          setTimeout(() => {
            commit('increment');
            }, 2000);
         },
    asyncDecrement: ({commit}) => {
          setTimeout(() => {
            commit('decrement');
            }, 2000);
         }

        }

});