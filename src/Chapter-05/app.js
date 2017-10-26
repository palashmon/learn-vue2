// Creating a Vue Instance with new Vue()
new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add(inc) {
            this.age += inc;
        },
        subtract(dec) {
            this.age -= dec;
        },
        onClickHandler() {
            alert('Redirect will not happen now!');
        }
    }
});
