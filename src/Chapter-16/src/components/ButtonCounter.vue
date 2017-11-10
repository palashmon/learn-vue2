<template>
    <button v-on:click="incrementCounter">{{ counter }}</button>
</template>

<script>
// This is a simple child component
export default {
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        incrementCounter: function() {
            this.counter += 1;
            this.$emit('increment');
        }
    }
};
</script>

<style scoped>
button {
    border-radius: 3px;
    height: 2.25em;
    color: #363636;
    cursor: pointer;
    padding-left: 0.75em;
    padding-right: 0.75em;
    background-color: #209cee;
    border-color: transparent;
    color: #fff;
}
button:hover {
    background-color: #1496ed;
    border-color: transparent;
    color: #fff;
}
</style>
