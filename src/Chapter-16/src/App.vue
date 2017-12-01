<template>
    <div>
        <show-blogs></show-blogs>
    </div>
</template>

<script>
// Import the component first
import showBlogs from './components/ShowBlogs.vue';

export default {
    components: {
        'show-blogs': showBlogs
    },
    data() {
        return {
            component: 'form-one'
        };
    }
};
</script>

<style>
body {
    font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #24292e;
    background-color: #fff;
    padding: 30px;
}
.paragraph {
    padding: 10px;
    color: #fff;
    border-radius: 4px;
}
.error {
    background-color: #d9534f;
    border-color: #d43f3a;
}
.error:hover {
    background-color: #c9302c;
    border-color: #ac2925;
}
.success {
    background-color: #5cb85c;
    border-color: #4cae4c;
}
.success:hover {
    background-color: #449d44;
    border-color: #398439;
}
button {
    border-radius: 3px;
    height: 2.25em;
    color: #363636;
    cursor: pointer;
    padding-left: 0.75em;
    padding-right: 0.75em;
    background-color: #209cee;
    border-color: transparent;
    color: #fff;
}
button:hover {
    background-color: #1496ed;
    border-color: transparent;
    color: #fff;
}
input[type='text'],
textarea {
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: none;
    line-height: 1.5;
    padding: 6px 8px;
    background-color: white;
    border-color: #dbdbdb;
    color: #363636;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
    max-width: 100%;
    width: 100%;
    margin-bottom: 10px;
}
input:hover,
textarea:hover {
    border-color: #b5b5b5;
}
input:focus,
textarea:focus {
    outline: none;
    border-color: #3273dc;
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}
.flex-container {
    display: flex;
    justify-content: space-around;
}
.text-center {
    text-align: center;
}
</style>
