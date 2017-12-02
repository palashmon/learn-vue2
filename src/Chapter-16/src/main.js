import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

// Creating a global event bus
export const bus = new Vue();

// Use vue-resource package
Vue.use(VueResource);

// Custom directives
Vue.directive('rainbow', {
    bind(el, binding, vnode) {
        const color = `#${Math.random()
            .toString(16)
            .slice(2, 8)}`;
        // console.log(color);
        el.style.color = color;
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
});
