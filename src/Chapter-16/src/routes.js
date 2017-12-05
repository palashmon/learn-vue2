import addBlog from './components/AddBlog.vue';
import showBlogs from './components/ShowBlogs.vue';

export default [{ path: '/', component: showBlogs }, { path: '/add', component: addBlog }];
