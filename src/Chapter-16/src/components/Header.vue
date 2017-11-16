<template>
    <header>
        <h2 @click="changeTitle">{{ title }}</h2>
    </header>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {};
    },
    methods: {
        changeTitle: function() {
            this.$emit('changeTitle', 'Vue Ninjas');
        }
    }
};
</script>
<style scoped>
header {
    background: lightgreen;
    padding: 10px;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
}
h2 {
    color: #222;
    text-align: center;
}
</style>
