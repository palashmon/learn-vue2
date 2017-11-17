<template>
    <footer>
        <p>{{ copyright }} {{ mutableTitle }}</p>
    </footer>
</template>
<script>
// Import the Event Bus we just created.
import { bus } from '../main';

export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            copyright: `© ${new Date().getFullYear()} Palash Mondal. Learning`,
            mutableTitle: this.title
        };
    },
    created() {
        // Listen for the changeTitle event and its payload.
        bus.$on('titleChanged', data => {
            console.log(`Header was clicked. Nice!`);
            this.mutableTitle = data;
        });
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
