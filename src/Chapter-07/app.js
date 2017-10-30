// Creating a Vue Instance with new Vue()
new Vue({
    el: '#vue-app',
    data: {
        name: '', age: ''
    },
    methods: {
        logName() {
            console.log(`Name: ${this.name}`);
        },
        logAge() {
            console.log(`Age: ${this.age}`);
        }
    }
});
