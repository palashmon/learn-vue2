<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search Blogs" />
        <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.id">
            <h2>#{{ blog.id }} - {{ blog.title | capitalize}}</h2>
            <article>{{ blog.body | capitalize }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],
            search: ''
        };
    },
    methods: {},
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
            this.blogs = data.body.slice(0, 10);
        });
    },
    computed: {
        filteredBlogs: function() {
            return this.blogs.filter(blog => {
                return blog.title.match(this.search);
            });
        }
    }
};
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0px auto;
}
.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
.single-blog h2 {
    margin-top: 0;
}
.single-blog article {
    text-align: justify;
}
</style>
