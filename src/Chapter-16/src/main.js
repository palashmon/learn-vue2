import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routes from './routes';

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    mode: 'history',
    routes: Routes
});

// Filters
Vue.filter('capitalize', value => {
    if (!value) return '';
    const str = value.toString();
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
