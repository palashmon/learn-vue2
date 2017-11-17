<template>
    <div>
        <app-header v-bind:title="title"></app-header>
        <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
        <app-footer v-bind:title="title"></app-footer>
    </div>
</template>

<script>
// Import the component first
import Header from './components/Header.vue';
import ButtonCounter from './components/ButtonCounter.vue';
import Ninjas from './components/Ninjas.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
        // <button-counter> will only be available in parent's template
        'app-header': Header,
        'app-footer': Footer,
        'app-ninjas': Ninjas
    },
    data() {
        return {
            ninjas: [
                { name: 'Ryu', speciality: 'Vue Components', show: false },
                { name: 'Crystal', speciality: 'HTML Wizardry', show: false },
                { name: 'Hitoshi', speciality: 'Click Events', show: false },
                { name: 'Tango', speciality: 'Conditionals', show: false },
                { name: 'Kami', speciality: 'Webpack', show: false },
                { name: 'Yoshi', speciality: 'Data Diggin', show: false }
            ],
            title: 'VueJs Basics'
        };
    },
    methods: {
        updateTitle: function(updatedTitle) {
            this.title = updatedTitle;
        }
    }
};
</script>

<style>
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-top: 90px;
}
</style>
<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
}

h1,
h2 {
    font-weight: normal;
}
img {
    width: 80px;
}
</style>
