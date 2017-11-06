new Vue({
    el: '#vue-app',
    data: {
        outputUsername: '',
        outputEmail: ''
    },
    methods: {
        readRefs() {
            //console.log(this.$refs);
            this.outputUsername = this.$refs.username.value;
            this.outputEmail = this.$refs.email.value;
        }
    }
});
