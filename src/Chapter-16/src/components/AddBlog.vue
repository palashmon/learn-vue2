<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
            <div id="checkboxes">
                <p><b>Blog Categories:</b></p>
                <label>Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories" />
                <label>Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories" />
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories" />
                <label>Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories" />
            </div>
            <label>Author:</label>
            <select v-model="blog.author">
                <option disabled value="">Please select one</option>
                <option v-for="author in authors" :key="author">{{ author }}</option>
            </select>
            <button v-on:click.prevent="addBlog">Add Blog</button>
        </form>
        <div v-if="submitted">
            <h3 class="paragraph success">Thanks for adding your post</h3>
        </div>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories" :key="category">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div>
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
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
            submitted: false
        };
    },
    methods: {
        addBlog: function() {
            // console.log(this.firebaseUrl);
            this.$http.post(`${this.firebaseUrl}/posts.json`, this.blog).then(function(data) {
                console.log(data);
                this.submitted = true;
            });
        }
    }
};
</script>

<style>
#add-blog * {
    box-sizing: border-box;
}
#add-blog {
    margin: 20px auto;
    max-width: 500px;
}
label {
    font-weight: bold;
    display: block;
    margin: 20px 0 10px;
}
#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3 {
    margin-top: 10px;
}
#checkboxes input {
    margin-right: 10px;
}
#checkboxes label {
    font-weight: normal;
    display: inline-block;
    margin-top: 0;
}
</style>
