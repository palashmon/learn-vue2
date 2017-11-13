<template>
    <header>
        <h2>{{ title }}</h2>
    </header>
</template>
<script>
export default {
    data() {
        return {
            title: 'VueJs Basics'
        };
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
