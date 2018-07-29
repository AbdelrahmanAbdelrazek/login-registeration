import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import './App.css';
import LoginPage from '../auth/LoginPage';
import RegisterPage from '../auth/RegisterPage';
import WelcomePage from '../WelcomePage';
import { Route, NavLink, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import {Breadcrumb} from 'antd';
class App extends Component {

  state = {
    top: 10,
    bottom: 10,
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
              <Breadcrumb.Item><NavLink to="/" exact>Home</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item>{!this.props.isLoggedIn ? <NavLink exact to="/register"  >Register</NavLink> : null}</Breadcrumb.Item>
          </nav>
        </header>
        <Route path="/" exact component={
          this.props.isLoggedIn ? WelcomePage : LoginPage
        } />
        <Route path="/register" exact component={RegisterPage} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.mainReducer.isLoggedIn
  };
};
//export default App;
export default withRouter(connect(mapStateToProps,null)(App));
