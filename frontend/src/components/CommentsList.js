import React, { Component } from 'react';
import { connect } from 'react-redux'
import { get } from 'lodash'
import moment from 'moment';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { addPost } from '../actions/shared'
import { Redirect } from 'react-router-dom';
import { postDetails, postComments,
    // AddComment, 
    handleInitialData } from '../actions/shared'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});
class CommentsList extends Component {

    constructor() {
        super();
        this.state = {
            comment: {
                timestamp: Date.now(),
                body: '',
                author: '',
            },
        };
    }

    componentDidMount() {
        //this.props.dispatch(postDetails(this.props.id))
        //this.props.dispatch(postComments(this.props.id))
    }

    handleComments = () => {
        const { post } = this.props
        const commentsList = get(post, 'comments', []);
        return commentsList
    }

    handleChange = name => event => {
        this.setState({
            comment: {
                ...this.state.comment,
                [name]: event.target.value,
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        const { parentId } = this.props.id
       // dispatch(AddComment(parentId, this.state.comment))
       //     .then(() => dispatch(postComments(parentId)))
    }

    render() {
        const { classes, commentCount } = this.props
        const { body, author } = this.state.comment
        console.log(this.props)
        return (
            <div className="comments">
                <p>{commentCount} comments</p>
                <div className="formulario">
                    <form
                        className={classes.container}
                        onSubmit={e => this.handleSubmit(e)}
                        autoComplete="off"
                    >
                        <TextField
                            required
                            id="author"
                            value={author || 'Write your name'}
                            placeholder="Author"
                            label="Author"
                            type="text"
                            onChange={this.handleChange('author')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            required
                            id="body"
                            value={body}
                            label="Body"
                            type="text"
                            onChange={this.handleChange('body')}
                            multiline
                            rowsMax="5"
                            margin="normal"
                            fullWidth
                        />

                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                        >
                            Add comment
                        </Button>
                    </form>
                </div>
                {this.handleComments().map(comment => (
                    <div className="container-comments" key={comment.id}>
                        <div className="author">
                            {comment.author}
                        </div>
                        <div className="date">
                            Commented at {moment(comment.timestamp).format('DD/MM/YYYY')}
                        </div>
                        <div className="comment-content">
                            {comment.body}
                        </div>

                        <div className="edit-comment">
                            EDIT
                                </div>
                        <div className="remove-comment">
                            REMOVE
                                </div>
                        <div className="controls">
                            <div className="like-comment"></div>
                            <div className="like-comment-text">{comment.voteScore}</div>
                            <div className="deslike-comment"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

function mapStateToProps({ post }, { id, commentCount }) {
    const idPost = post[id]
    return {
        post,
        idPost,
        commentCount
    }
}

export default connect(mapStateToProps)(withStyles(styles)(CommentsList))