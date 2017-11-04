// Creating a Vue component
Vue.component('greeting', {
    template: `
        <div>
            <p>
                Hey there, I am a re-usable <b>{{ name  }}</b>
            </p>
            <button @click="changeName">Change Name</button>
        </div>
    `,
    data: function () {
        return {
            name: 'component'
        };
    },
    methods: {
        changeName() {
            this.name = `component (updated at ${this.getTime()})`;
        },

        // Get current time in HH:MM:SS format, with prefixed 0 padding
        getTime() {
            var time = new Date();
            return ("0" + time.getHours()).slice(-2) + ":"
                + ("0" + time.getMinutes()).slice(-2) + ":"
                + ("0" + time.getSeconds()).slice(-2)
        }
    }
});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
