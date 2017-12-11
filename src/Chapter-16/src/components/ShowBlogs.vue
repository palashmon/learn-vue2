<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search Blogs" />
        <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.id">
            <h2>
                <router-link v-bind:to="'/blog/' + blog.id">#{{ blog.id }}</router-link>
                - {{ blog.title | capitalize}}
            </h2>
            <article>{{ blog.body | capitalize }}</article>
        </div>
    </div>
</template>

<script>
// Add serach mixin
import searchMixin from '../mixins/searchMixin';
export default {
    data() {
        return {
            blogs: [],
            search: ''
        };
    },
    methods: {},
    created() {
        const concatinate = text =>
            `${text} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor libero sit amet lacus pulvinar, vel cursus odio mollis. Cras posuere, lectus ac lacinia mattis, sapien tellus maximus enim, non condimentum diam quam vitae diam.`;

        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
            // const body = data.body.slice(0, 10);
            // body.forEach(o => (o.body = concatinate(o.body)));
            // console.log(body);
            this.blogs = data.body.slice(0, 10);
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
