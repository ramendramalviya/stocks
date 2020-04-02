import Vue from "vue";
import App from "./App.vue";
import Home from "./Home.vue";

// Vue.config.productionTip = false;

export const eventBus = new Vue({
methods: {
 ChangeAge(age){
   this.$emit('ageWasEdited', age);
 }
}
});
Vue.component ('app-servers',Home);

new Vue({
  render: h => h(App)
}).$mount("#app");
