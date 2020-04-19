<!--
<template>
    <div class="comment">
        <div class="d-flex align-items-center">
            <Avatar :text="comment.User" size="30"></Avatar>
            <div class="ml-2">
                <strong>{{ comment.User }}</strong>
                <p>{{ comment.Body }}</p>
            </div>
        </div>
        <a class="d-flex align-items-center text-muted ml-1" @click="$set(comment, 'expanded', true)"
            v-if="comment.Comments && !comment.expanded">
            <i class="material-icons">subdirectory_arrow_right</i> {{ comment.Comments.length }} replies:
        </a>
        <div v-if="comment.Comments && comment.expanded">
            <Comment v-for="(c, key) in comment.Comments" :comment="c" :key="key"></Comment>
        </div>
    </div>
</template>
-->

<script>
import Avatar from './Avatar';
import Comment from './Comment';
export default {
    name: 'Comment',
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    components: { Avatar, Comment },
    render(h) {
        return h('div',{ class: 'comment' },
            [
                h('div', { class: 'd-flex align-items-center' },
                    [
                        h(Avatar, {
                            props: {
                                text: this.comment.User,
                                size: '30'
                            }
                        }),
                        h('div', { class: 'ml-2' },
                            [
                                h('strong', this.comment.User),
                                h('p', this.comment.Body)
                            ]
                        )
                    ]),
                this.comment.Comments && !this.comment.expanded ?
                    h('a', {
                        class: 'd-flex align-items-center text-muted ml-1',
                        on: {
                            click: () => {
                                this.$set(this.comment, 'expanded', true);
                            }
                        }
                    },
                    [
                        h('i', { class: 'material-icons' }, 'subdirectory_arrow_right'),
                        this.comment.Comments.length + ' replies'
                    ]
                    ) : null,
                this.comment.Comments && this.comment.expanded ? this.comment.Comments.map((c, key) => {
                    return h(Comment, {
                        key,
                        props: {
                            comment: c
                        },
                    });
                }): null
            ]
        );
    }
};
</script>

<style lang="scss" scoped>
.comment {
    padding: 16px;
    margin: 16px 0 0 16px;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
}
</style>
