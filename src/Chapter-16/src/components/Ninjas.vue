<template>
    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show" :key="ninja.name">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>
        <button @click="deleteNinja">Delete</button>
    </div>
</template>
<script>
export default {
    props: {
        ninjas: {
            type: Array,
            required: true
        }
    },
    data() {
        return {};
    },
    methods: {
        // Running $vm0.ninjas.pop() in console run last two lif-cycle hooks
        // Before Update and Updated
        deleteNinja() {
            this.ninjas.pop();
        }
    },
    beforeCreate() {
        console.groupCollapsed('Creation');
        console.log('Before Create');
    },
    created() {
        console.log('Created');
    },
    beforeMount() {
        console.log('Before Mount');
    },
    mounted() {
        console.log('Mounted');
        console.groupEnd('Creation');
    },
    beforeUpdate() {
        console.log('Before Update');
    },
    updated() {
        const text = 'Updated';
        console.groupCollapsed(text);
        console.log(text);
        console.log(this.ninjas);
        console.groupEnd(text);
    }
};
</script>
<style scoped>
#ninjas {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
    border-radius: 4px;
    text-shadow: 2px 2px 2px #a5a0a0;
    box-shadow: 2px 2px 4px #a09e9e;
    cursor: pointer;
    user-select: none;
}
</style>
