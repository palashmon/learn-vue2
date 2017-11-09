<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{ msg }}</h2>
    <p>{{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>
  </div>
</template>

<script>
// Import the component first
import ButtonCounter from './components/ButtonCounter.vue';

export default {
    components: {
        // <button-counter> will only be available in parent's template
        'button-counter': ButtonCounter
    },
    data() {
        return {
            msg: 'Nesting Components',
            total: 0
        };
    },
    methods: {
        incrementTotal() {
            this.total += 1;
        }
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
    padding: 30px;
}

h1,
h2 {
    font-weight: normal;
}
img {
    width: 80px;
}
</style>
