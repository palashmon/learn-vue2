<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            copyright: `Copyright ${new Date().getFullYear()} Palash Mondal. Learning VueJs Basics.`
        };
    }
};
</script>
<style scoped>
footer {
    background: #222;
    padding: 6px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
}
p {
    color: lightgreen;
    text-align: center;
}
</style>
