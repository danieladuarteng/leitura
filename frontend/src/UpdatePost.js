import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { addPost } from './actions/shared'
import { connect } from 'react-redux'
import { postDetails, postComments } from './actions/shared'

import './App.css';

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

const categoriesList = [
    {
        id: 0,
        title: 'React',
        category: 'react',
    },
    {
        id: 1,
        title: 'Redux',
        category: 'redux',
    },
    {
        id: 2,
        title: 'Udacity',
        category: 'udacity',
    },
];

class UpdatePost extends Component {

    state = {
        postEdited: {
            title: '',
            body: '',
        },
    };


    componentDidMount() {
        this.props.dispatch(postDetails(this.props.match.params.id))
    }


    handleChange = name => event => {
        this.setState({
            postEdited: {
                ...this.state.postEdited,
                [name]: event.target.value,
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        dispatch(addPost(this.state.post))
    }
    render() {
        const { classes } = this.props;
        console.log(this.props)
        const { title, category, body, author } = this.props.post
        console.log(this.state.postEdited)
        return (
            <div>
                <div className="home">
                    <h1><strong>Leitura</strong></h1>
                </div>

                <div className="container-view">
                    <div className="item-main">
                        <div className="formulario">
                            <h1>Edit post</h1>
                            <form
                                className={classes.container}
                                noValidate
                                autoComplete="off"
                                onSubmit={e => this.handleSubmit(e)}
                            >
                                <TextField
                                    required
                                    id="title"
                                    value={title}
                                    placeholder="Title"
                                    label="Title"
                                    type="text"
                                    onChange={this.handleChange('title')}
                                    margin="normal"
                                    fullWidth
                                    helperText="Input the title of post"
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


function mapStateToProps({ post }, {id}) {
    const postId = id;
    return {
        post,
        postId
    }
}


export default connect(mapStateToProps)(withStyles(styles)(UpdatePost));
