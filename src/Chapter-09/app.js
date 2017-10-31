// Creating a Vue Instance with new Vue()
new Vue({
    el: '#vue-app',
    data: {
        available: true,
        nearby: false
    },
    methods: {

    },
    computed: {
        compClasses() {
            return {
                available: this.available,
                nearby: this.nearby,
            }
        }
    }
});
