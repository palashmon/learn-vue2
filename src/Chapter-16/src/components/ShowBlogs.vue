<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search Blogs" />
        <div v-for="(blog, index) in filteredBlogs" class="single-blog" :key="blog.id">
            <h2>
                <router-link v-bind:to="'/blog/' + blog.id">#{{ index + 1 }}</router-link>
                - {{ blog.title | capitalize}}
            </h2>
            <article><b>Author:</b> {{ blog.author | capitalize }}</article>
            <article>{{ blog.content | capitalize }}</article>
        </div>
    </div>
</template>

<script>
// Add serach mixin
import searchMixin from '../mixins/searchMixin';
export default {
    props: {
        firebaseUrl: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            blogs: [],
            search: ''
        };
    },
    methods: {},
    created() {
        this.$http
            .get(`${this.firebaseUrl}/posts.json`)
            .then(data => data.json())
            .then(data => {
                var blogsArray = [];
                for (let key in data) {
                    data[key].id = key;
                    blogsArray.push(data[key]);
                }
                this.blogs = blogsArray.slice(0, 10);
            });
    },
    mixins: [searchMixin]
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
    background: #4ac29a; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #bdfff3, #4ac29a);
    background: linear-gradient(to right, #bdfff3, #4ac29a);
    border-radius: 6px;
}
.single-blog h2 {
    margin-top: 0;
}
.single-blog article {
    text-align: justify;
}
</style>
