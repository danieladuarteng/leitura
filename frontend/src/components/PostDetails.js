import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import moment from 'moment';
import { 
    postDetails, 
    postComments, 
    handleDeletePost, 
    voteScorePostAction,
} from '../actions/shared'
import CommentsList from './CommentsList'
import Button from '@material-ui/core/Button'

class PostDetails extends Component {
    state = {
        toHome: false,
    }

    componentDidMount() {
        this.props.dispatch(postDetails(this.props.match.params.id))
        this.props.dispatch(postComments(this.props.match.params.id))
    }

    handleDelete = () => {
        const { dispatch } = this.props
        dispatch(handleDeletePost(this.props.match.params.id))
        this.setState({
            toHome: true
        })
    }

    handleLike = (id, vote) => {
        const { dispatch } = this.props
        dispatch(voteScorePostAction(id, vote))
    }

    render() {
        const { id, title, category, author, timestamp, voteScore, body, commentCount } = this.props.post
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <div className="home">
                    <h1><strong>Leitura</strong></h1>
                </div>

                <div className="container-view">
                    <div className="item-main">
                        <h1>{title}</h1>
                        <div className="cabecalho">
                            <div className="box-1">{category}</div>
                            <div className="box-2">{author}</div>
                            <div className="box-3">{moment(timestamp).format('DD/MM/YYYY')}</div>
                            <div className="icons">
                                <div className="like-button" onClick={()=> this.handleLike(id, 'upVote')}></div>
                                <div className="like-button-text">{voteScore}</div>
                                <div className="deslike-button" onClick={()=> this.handleLike(id, 'downVote')}></div>
                            </div>
                        </div>
                        <p>
                            {body}
                        </p>
                        <CommentsList
                            id={id}
                            commentCount={commentCount}
                        />
                    </div>
                    <div className="item-sidebar">
                        <Link to={`/edit-post/${id}`}><div id="edit-post">EDIT</div></Link>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            onClick={() => this.handleDelete()}
                        >
                            REMOVE
                        </Button>

                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ post }) {
    return {
        post,
    }
}

export default connect(mapStateToProps)(PostDetails)
