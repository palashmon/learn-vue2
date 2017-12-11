import addBlog from './components/AddBlog.vue';
import showBlogs from './components/ShowBlogs.vue';
import singleBlog from './components/SingleBlog.vue';

export default [
    { path: '/', component: showBlogs },
    { path: '/add', component: addBlog },
    { path: '/blog/:id', component: singleBlog }
];
