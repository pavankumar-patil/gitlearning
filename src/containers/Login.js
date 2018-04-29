
import React from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import { history } from './../store/configureStore';
import {updateCredentials} from '../actions/index';
import { bindActionCreators } from "redux";
import logo from '../logo.png';
import '../App.css';
import configureStore from '../store/configureStore';

const store = configureStore();
class Login extends React.Component {
  constructor(props) {
    super(props);
   // this.updateChange = this.updateChange.bind(this);
  //  this.submit = this.submit.bind(this);
//  console.log("props"+JSON.stringify(this.props));
    this.state = this.props.Credentials;
   /* this.updateChange=this.updateChange.bind(this);*/
    this.handleClick=this.handleClick.bind(this);
  }

 handleClick=(e)=>{
  // console.log("z"+JSON.stringify(this.props));
     e.preventDefault();
       //store.dispatch(actions.updateCredentials({'username':this.state.username,'password':this.state.password}));
          // store.dispatch({type: "UPDATE_CREDENTIALS", payload:
          var data={'username':this.state.username,'password':this.state.password};

this.props.updateCredentials(data);
     history.push('/dashboard');


  }
 updateChange=(e,dispatch) =>{
    //var text=e.target.name;
   // console.log(text);
    this.setState({[e.target.name]:e.target.value});


}
  render() {

    return (
      <div>
<h1>Sign In Using Your twitter credentials</h1>
       <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.submit}>
          <label>Username:</label><input
onChange={this.updateChange} name="username"
            value={this.state.username}
          /><br />
          <br />
          <br />
          <label>Password:</label><input type="password" name="password"
onChange={this.updateChange}
            value={this.state.password}
          /><br />
          <br />
          <br />
          <button onClick={this.handleClick}>
            Submit
          </button>
        </form>
      </div>
    )

  }

}

 function mapStateToProps(state){

 return {
    Credentials: state.LoginReducerC.Credentials
  };

 }
 function mapDispatchToProps(dispatch){
   return bindActionCreators({
     updateCredentials
   }, dispatch);


 }
 export default connect(mapStateToProps,mapDispatchToProps)(Login);
