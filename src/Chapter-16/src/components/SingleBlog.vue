<template>
    <div id="single-blog">
        <h2>{{ blog.title | capitalize}}</h2>
        <article>{{ blog.body | capitalize }}</article>
    </div>
</template>

<script>
// Imports
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        };
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data) {
            // console.log(data);
            this.blog = data.body;
        });
    }
};
</script>

<style>
#single-blog {
    max-width: 960px;
    margin: 0 auto;
    padding: 5px 20px 20px 20px;
    background: #4ac29a; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #bdfff3, #4ac29a);
    background: linear-gradient(to right, #bdfff3, #4ac29a);
    border-radius: 6px;
}
</style>
