<template>
    <div id="single-blog">
        <h2>{{ blog.title | capitalize}}</h2>
        <article><b>Author:</b> {{ blog.author | capitalize }}</article>
        <article>{{ blog.content | capitalize }}</article>
        <p><b>Categories:</b></p>
        <ul>
            <li v-for="category in blog.categories" :key="category">{{ category }}</li>
        </ul>
    </div>
</template>

<script>
// Imports
export default {
    props: {
        firebaseUrl: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        };
    },
    created() {
        this.$http
            .get(`${this.firebaseUrl}/posts/${this.id}.json`)
            .then(data => data.json())
            .then(data => (this.blog = data));
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
