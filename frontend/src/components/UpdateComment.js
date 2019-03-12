import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { commentDetails, handleEditComment, postDetails } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import Header from './Header'

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

class UpdateComment extends Component {

    state = {
        body: '',
        backDetails: false,
        category: '',
    };

    componentDidMount() {
        const { dispatch } = this.props
        console.log(this.props)
        dispatch(commentDetails(this.props.match.params.id))
            .then(mydata => {
                this.setState({
                    body: mydata.body,
                })
            });
    }

    handleChange = name => event => {
        this.setState({
            ...this.state.body,
            [name]: event.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        dispatch(handleEditComment(this.props.match.params.id, this.state.body))
        dispatch(postDetails(this.props.post.parentId)).then(mydata => {
            this.setState({
                category: mydata.category,
                backDetails: true
            })
        });
    }

    render() {
        const { classes } = this.props;

        const { backDetails, body, category } = this.state
        console.log(this.props)
        console.log(category)
        const id = this.props.post.parentId

        if (backDetails === true) {
            return <Redirect to={`/${category}/${id}`} />
        }

        return (
            <div>
                <Header />
                <div className="container-view">
                    <div className="item-main">
                        <div className="formulario">
                            <h1>Edit comment</h1>
                            <form
                                className={classes.container}
                                noValidate
                                autoComplete="off"
                                onSubmit={e => this.handleSubmit(e)}
                            >

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
                                    Update
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ post, comment, category }, { id, commentCount }) {
    return {
        post,
        commentCount,
        id,
        comment,
        category
    }
}

export default connect(mapStateToProps)(withStyles(styles)(UpdateComment));
