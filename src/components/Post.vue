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
    methods: {
        setupPost(h) {
            return h(
                'div', {
                    class: 'post',
                },
                [
                    h('div', {
                        class: 'd-flex align-items-center',
                    },
                    [
                        h(Avatar, {
                            props: {
                                size: '40',
                                text: this.post.Author,
                            },
                            class: 'mr-3',
                        }),
                        h('h4', this.post.Title),
                    ]),
                    h('div', {
                        class: 'd-flex align-items-center post-summary pb-2 mb-2',
                    },
                    [
                        h('i', {
                            class: 'material-icons mr-1',
                        },
                        'thumb_up_alt'
                        ),
                        this.post.Likes,
                        h('i', {
                            class: 'material-icons ml-2 mr-1',
                        },
                        'comment'
                        ),
                        this.post.Comments ? this.post.Comments.length : 0,
                    ]),
                    this.post.Comments ? h('a', {
                        on: {
                            click: () => {
                                this.viewComments(this.post);
                            },
                        },
                        class: {
                            'mt-2': !this.post.Comments[0].expanded,
                            'd-none': this.post.Comments[0].expanded,
                        },
                    },
                    'View Comments:') : null,
                    this.setupComment(h, this.post, 0),
                ]
            );
        },
        setupComment(h, parent, counter) {
            if (parent.Comments) {
                return h(
                    'div',
                    parent.Comments.map((c, key) => {
                        return [
                            h(Comment, {
                                key,
                                props: {
                                    comment: c,
                                    counter,
                                    viewComments: this.viewComments,
                                },
                            }),
                            this.setupComment(h, c, counter + 1),
                        ];
                    })
                );
            } else {
                return null;
            }
        },
        viewComments(parent) {
            parent.Comments.forEach((c) => {
                this.$set(c, 'expanded', true);
            });
        },
    },
    render(h) {
        return h('div', [this.setupPost(h)]);
    },
};
</script>

<style lang="scss" scoped>
.post {
    padding: 16px;
    border: 1px solid #e9e9e9;
    margin-bottom: 16px;
    &-summary {
        margin-left: 56px;
        color: #0e5bd2;
        font-weight: 500;
        border-bottom: 1px solid #e9e9e9;
    }
}
</style>
