// Creating a Vue Instance with new Vue()
new Vue({
    el: '#vue-app',
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {
        // addToA() {
        //     console.log('addToA');
        //     return this.a + this.age;
        // },
        // addToB() {
        //     console.log('addToB');
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA() {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB() {
            console.log('addToB');
            return this.b + this.age;
        }
    }
});
