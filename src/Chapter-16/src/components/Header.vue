<template>
    <header>
        <h2 @click="changeTitle">{{ mutableTitle }}</h2>
    </header>
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
            mutableTitle: this.title
        };
    },
    methods: {
        changeTitle: function() {
            this.mutableTitle = 'Vue Ninjas';

            // Send the event on a channel (changeTitle) with a payload (this.title)
            bus.$emit('titleChanged', this.mutableTitle);
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
