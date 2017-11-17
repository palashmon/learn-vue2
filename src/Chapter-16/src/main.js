import Vue from 'vue';
import App from './App.vue';

// Creating a global event bus
export const bus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App)
});
