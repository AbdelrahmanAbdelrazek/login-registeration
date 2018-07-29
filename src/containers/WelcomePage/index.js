import React, { Component } from 'react';
import {mapDispatchToProps, mapStateToProps} from './mapping';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from 'antd'
class WelcomePage extends Component {
    logout = () =>{
        this.props.removeUser();
        this.props.history.push('/');
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello, {this.props.user.displayName}</h1>
                {//!this.props.user.emailVerfied?
                <h1>Please verify your email address</h1>//: null
                }
                <Button  onClick={this.logout.bind(this)} >Logout</Button>
            </div>
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WelcomePage));