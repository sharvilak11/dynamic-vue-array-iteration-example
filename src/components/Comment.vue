<template>
    <div>
        <div class="comment" :style="style" v-show="comment.expanded">
            <div class="d-flex align-items-center">
                <Avatar :text="comment.User" size="30"></Avatar>
                <div class="ml-2">
                    <strong>{{ comment.User }}</strong>
                    <p>{{ comment.Body }}</p>
                </div>
            </div>
        </div>
        <a class="replies" :style="repliesStyle" @click="() => viewComments(comment)" v-if="comment.Comments && comment.expanded && !comment.Comments[0].expanded"> <i class="material-icons">subdirectory_arrow_right</i> {{ comment.Comments.length }} replies: </a>
    </div>
</template>

<script>
import Avatar from './Avatar';
export default {
    name: 'Comment',
    props: {
        comment: {
            type: Object,
            required: true,
        },
        counter: {
            type: Number,
        },
        viewComments: {
            type: Function,
        },
    },
    components: { Avatar },
    computed: {
        style() {
            return {
                display: !this.expanded ? 'none' : 'block',
                'padding-left': (this.counter + 1) * 16 + 'px',
            };
        },
        repliesStyle() {
            return {
                'margin-left': (this.counter + 1) * 16 + 38 + 'px',
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.comment {
    padding: 4px;
}
.replies {
    display: flex;
    align-items: center;
    color: #888;
}
</style>
