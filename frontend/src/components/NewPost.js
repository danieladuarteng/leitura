import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { addPost } from '../actions/shared'
import { connect } from 'react-redux'
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

class NewPost extends Component {

    constructor() {
        super();
        this.state = {
            post: {
                timestamp: Date.now(),
                title: '',
                body: '',
                author: '',
                category: '',
            },
            toHome: false,
        };
    }

    handleChange = name => event => {
        this.setState({
            post: {
                ...this.state.post,
                [name]: event.target.value,
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, history } = this.props
        dispatch(addPost(this.state.post)).then(history.push('/'));

        this.setState({ toHome: true })
    }

    render() {

        const { classes } = this.props;
        const { title, category, body, author } = this.state.post
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div>
            <Header />
                <div className="container-view">
                    <div className="item-main">
                        <div className="formulario">
                            <h1>Create new post</h1>
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
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Input the title of post"
                                    label="Title"
                                    type="text"
                                    onChange={this.handleChange('title')}
                                    margin="normal"
                                    fullWidth
                                />
                                <TextField
                                    required
                                    id="category"
                                    select
                                    label="Category"
                                    value={category}
                                    onChange={this.handleChange('category')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    helperText="Please select your category"
                                    margin="normal"
                                    fullWidth
                                >
                                    {categoriesList.map(option => (
                                        <MenuItem
                                            key={option.id}
                                            value={option.category}
                                        >
                                            {option.title}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    required
                                    id="author"
                                    value={author}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Input the author of post"
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
                                    placeholder="Input the content of post"
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
                                    Publish
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(withStyles(styles)(NewPost));
