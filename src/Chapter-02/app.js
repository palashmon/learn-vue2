// Creating a Vue Instance with new Vue()
new Vue({
    el: '#vue-app',
    data: {
        name: 'Palash',
        job: 'Developer'
    },
    methods: {
        greet(time) {
            return `Good ${time}, ${this.name}`;
        }
    }
});
