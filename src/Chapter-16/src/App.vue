<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ greeting() }}</h2>

  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: 'First Vue file'
        };
    },
    methods: {
        greeting() {
            return 'Welcome to Your Vue.js App';
        }
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}
</style>
