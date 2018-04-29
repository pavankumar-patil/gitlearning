import React from 'react';
import {updateCredentials} from './actions';
class Login extends React.Component {
  /*constructor(props) {
    super(props);
   // this.updateChange = this.updateChange.bind(this);
  //  this.submit = this.submit.bind(this);
  console.log(this.props.Credentials.username);
    this.state = { 'userName': this.props.Credentials.username, 'password': this.props.Credentials.password };
  }
 /* updateChange(e) {
    //var text=e.target.name;
   // console.log(text);
    this.setState({[e.target.name]:e.target.value});

  }

  submit(e) {
e.preventDefault();
if(!this.state.userName.length && !this.state.password.length)
return;
else 
console.log("this.state.userName"+this.state.userName+"this.state.password"+this.state.password);

  }*/
  render() {

    return (
      <div>
<h1>Sign In Using Your twitter credentials</h1>

        <form onSubmit={this.submit}>
          <label>Username:</label><input
onChange={this.updateChange} name="userName"
            value={this.props.Credentials.userName}
          /><br />
          <br />
          <br />
          <label>Password:</label><input type="password" name="password"
onChange={this.updateChange}
            value={this.props.Credentials.password}
          /><br />
          <br />
          <br />
          <button>
            Submit
          </button>
        </form>
      </div>
    )

  }

}
export default Login;