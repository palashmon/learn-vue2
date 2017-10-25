// Creating a Vue Instance with new Vue()
new Vue({
    el: '#vue-app',
    data: {
        html: `Hover your mouse over me for a few seconds to see my dynamically bound title!`,
        message: `You loaded this page on ${new Date().toLocaleString()}`,
    }
});
