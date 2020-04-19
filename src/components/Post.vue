<!--
<template>
    <div>
        <div class="post">
            <div class="d-flex align-items-center">
                <Avatar size="40" :text="post.Author" class="mr-3"></Avatar>
                <h4>{{ post.Title }}</h4>
            </div>
            <div class="post-summary">
                <div class="d-flex align-items-center pb-2 mb-2">
                    <i class="material-icons mr-1">thumb_up_alt</i> {{ post.Likes }}
                    <i class="material-icons ml-2 mr-1">comment</i> {{ post.Comments ? post.Comments.length : 0 }}
                </div>
                <a v-if="post.Comments" @click="$set(post,'expanded', true)" class="mt-2" :class="{'d-none': post.expanded}">
                    View Comments:
                </a>
                <div v-if="post.expanded">
                    <Comment v-for="(c, key) in post.Comments" :comment="c" :key="key"></Comment>
                </div>
            </div>
        </div>
    </div>
</template>
-->

<script>
import Avatar from './Avatar';
import Comment from './Comment';

export default {
    name: 'Post',
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    components: {Comment, Avatar},
    render(h) {
        return h('div', [
            h('div', { class: 'post' },
                [
                    h('div', { class: 'd-flex align-items-center' },
                        [
                            h(Avatar, {
                                props: {
                                    size: '40',
                                    text: this.post.Author,
                                },
                                class: 'mr-3',
                            }), h('h4', this.post.Title)
                        ]
                    ),
                    h('div', { class: 'post-summary'},
                        [
                            h('div', { class: 'd-flex align-items-center pb-2 mb-2'},
                                [
                                    h('i', { class: 'material-icons mr-1' }, 'thumb_up_alt'),
                                    this.post.Likes,
                                    h('i', { class: 'material-icons ml-2 mr-1' }, 'comment'),
                                    this.post.Comments ? this.post.Comments.length : 0]
                            ),
                            this.post.Comments ? [
                                h('a', {
                                    on: {
                                        click: () => {
                                            this.$set(this.post,'expanded', true);
                                        }
                                    },
                                    class: ['mt-2', {
                                        'd-none': this.post.expanded,
                                    }],
                                }, 'View Comments:'),
                                this.post.expanded ? (h('div', {
                                    class: 'mt-2'
                                }, [
                                    this.post.Comments.map(comment => h(Comment, {
                                        props: {
                                            comment
                                        }
                                    })
                                    )
                                ])): null
                            ]: null
                        ]
                    )
                ]
            )
        ]);
    }
};
</script>

<style lang="scss" scoped>
.post {
    padding: 16px;
    margin-bottom: 16px;
    &-summary {
        padding-bottom: 16px;
        margin-left: 56px;
        color: #0e5bd2;
        font-weight: 500;
        border-bottom: 1px solid #e9e9e9;
    }
}
</style>
