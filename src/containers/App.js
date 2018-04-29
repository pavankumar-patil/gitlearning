import React, { Component } from 'react';
//import Login from 'Login.js';
import '../App.css';

import { connect } from 'react-redux';
import  Header from '../containers/Headers';
import  Login from '../containers/Login';
import { ConnectedRouter } from 'react-router-redux';
import { Route,  NavLink,
  HashRouter } from 'react-router-dom';
import { history } from './../store/configureStore';
import SignUp from '../containers/SignUp';
import Dashboard from '../containers/Dashboard';
import { Switch } from 'react-router';



class App extends Component {



  
  render() {
    return (
       <ConnectedRouter history={history}>
                <div>
                    <Header />

                    <div className="container">
                         <Route exact path="/" render={(props)=><Login/>}/>
                         <Route path="/login" component={ Login } />
                         <Route path="/dashboard" component={ Dashboard } />
                
                    </div>
                </div>
            </ConnectedRouter>
    );
  }
}

function mapStateToProps(state) {

}
export default connect(mapStateToProps)(App);

