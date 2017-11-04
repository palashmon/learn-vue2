// Creating a first Vue Instance with new Vue()
var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },
    computed: {
        greet() {
            return 'Hello, from app one :)';
        }
    }
});

// Creating a another Vue Instance with new Vue()
var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    computed: {
        greet() {
            return 'App 2 speaking here';
        }
    },
    methods: {
        // Change title of first Vue Instance from another Vue Instance
        changeTitle() {
            one.title = 'Title Changed';
        }
    }
});

// Change title of second Vue Instance from outside the Vue Instances
two.title = 'Changed from outside';
