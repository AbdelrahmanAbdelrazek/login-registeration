import RegisterForm from './RegisterForm';
import React, { Component } from 'react';
import axios from 'axios';
import { key } from '../../../API/index';
import { connect } from 'react-redux';
import { mapDispatchToProps } from './mapping';
import { SubmissionError } from 'redux-form';
import { withRouter, Link } from 'react-router-dom';


class RegisterPage extends Component {

    signup = (values) => {
        console.log(values);
        return (
            axios
                .post('/signupNewUser?key=' + key,
                    {
                        email: values.email,
                        password: values.password,
                        returnSecureToken: true
                    }
                )
                .then(response => {
                    console.log(response.data);
                    const idToken = response.data.idToken;
                    return axios.post('/setAccountInfo?key=' + key,
                        {
                            idToken: idToken,
                            displayName: values.firstName + ' ' + values.lastName,
                            returnSecureToken: false
                        }
                    )
                })
                .then(response => {
                    console.log(response.data);
                    this.props.addUser({
                        email: response.data.email,
                        emailVerfied: false,
                        displayName: response.data.displayName,
                        token: response.data.idToken
                    })
                    this.props.history.push({ pathname: '/' });
                })
                .catch(error => {
                    throw new SubmissionError({ email: 'This email is already associated with an account!', _error: 'Sign up Failed!' });
                    console.log(error)
                })
        );
    }

    render() {
        return (
            <div>
                <RegisterForm signup={this.signup} />
                Or <Link to="/">already have an account</Link>
            </div>
        );
    }
}

// export default LoginPage
export default withRouter(connect(null, mapDispatchToProps)(RegisterPage))
