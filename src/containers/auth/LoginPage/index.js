import LoginForm from './LoginForm';
import React, { Component } from 'react';
import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { key } from '../../../API/index';
import { mapDispatchToProps } from './mapping';
import { Link, withRouter } from 'react-router-dom';



class LoginPage extends Component {
    login = (values) => {
        let idToken;
        return (
            axios
                .post('/verifyPassword?key=' + key,
                    {
                        email: values.email,
                        password: values.password,
                        returnSecureToken: true
                    }

                )
                .then(response => {
                    console.log(response);
                    idToken = response.data.idToken;
                    return axios.post('/getAccountInfo?key=' + key,
                        { idToken: idToken }
                    );
                })
                .then(response => {
                    console.log(response);
                    this.props.addUser({
                        email: response.data.users[0].email,
                        emailVerified: response.data.users[0].emailVerified,
                        displayName: response.data.users[0].displayName,
                        token: idToken
                    })
                })
                .catch(error => {
                    console.log(error)
                    throw new SubmissionError({ password: 'Wrong email or password', _error: 'Login failed!' });
                }
                )
        );
    }

    render() {
        const {history} = this.props;
        return (
            <div>
                <LoginForm login={this.login} />
                Or <Link to="/register">register now!</Link>
            </div>

        );
    }
}
//export default LoginPage
export default withRouter(connect(null, mapDispatchToProps)(LoginPage));
