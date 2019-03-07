import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { postDetails, handleEditPost } from '../actions/shared'
import { Redirect } from 'react-router-dom';

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
        postEdited: {
            title: '',
            body: '',
        },
        toHome: false,
    };

    componentDidMount() {
        this.props.dispatch(postDetails(this.props.match.params.id)).then(mydata => {
            this.setState({
                postEdited: {
                    title: mydata.title,
                    body: mydata.body,
                },
            })
        });
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
        dispatch(handleEditPost(this.props.match.params.id, this.state.postEdited))

        this.setState({ toHome: true })
    }
    render() {
        const { classes } = this.props;
        const { title, body } = this.state.postEdited
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/:category/:id' />
        }

        return (
            <div>
                <div className="home">
                    <h1><strong>Leitura</strong></h1>
                </div>

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

function mapStateToProps({ comment }) {
    return {
        comment,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(UpdateComment));
