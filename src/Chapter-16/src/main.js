import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

// Creating a global event bus
export const bus = new Vue();

// Use vue-resource package
Vue.use(VueResource);

// Filters
Vue.filter('capitalize', value => {
    if (!value) return '';
    const str = value.toString();
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
});

new Vue({
    el: '#app',
    render: h => h(App)
});
