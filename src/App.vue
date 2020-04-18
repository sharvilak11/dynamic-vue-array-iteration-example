<template>
    <div id="app">
        <Post v-for="(post, key) in posts" :post="post" :key="key"></Post>
    </div>
</template>

<script>
import Post from './components/Post.vue';
import postsData from '@/assets/posts.json';

export default {
    name: 'App',
    components: {
        Post,
    },
    data() {
        return {
            posts: postsData,
        };
    },
};
</script>

<style lang="scss">
$t-s: 12px;
$t-m: 14px;
$t-l: 18px;
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    padding: 24px;
    font-size: 14px;
}
h4 {
    font-size: 18px;
    margin: 0 0 8px 0;
    font-weight: 500;
}
p {
    margin-bottom: 0 !important;
}
a {
    cursor: pointer;
    color: #888;
    display: block;
}
</style>
