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
