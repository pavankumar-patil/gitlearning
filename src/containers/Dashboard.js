import React, { Component } from 'react';
//import Login from 'Login.js';
import '../App.css';
//import SignUp from '../containers/SignUp';
import { connect } from 'react-redux';
import axios from  'axios';

class Dashboard extends React.Component{

  componentDidMount() {

      this.fetchBasicInfo("https://www.api.twitter.com/1.1/statuses/user_timeline.json?count=5&screen_name=twitterdev&trim_user=1");

  }
fetchBasicInfo(url){
    /*  let axiosConfig = {
      headers: {
          'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAAPAY1AAAAAAAA0x5HeHhCdQcLumvJzEBgHOOXrw%3Dg4E8c1520bgv4ZZy8im7kEFylVnIKSm8EIJpEsDs2uPRGFZ7eN' ,
         'Content-Type':'application/json'
      }
    };


*/

axios.get('http://localhost:3100/twitterdata')
  .then(function(response) {
console.log("response"+response);
}).catch(function(error){
  console.log("error"+error);

});
}
render(){
return(
<div>hello</div>

)


}






}
export default Dashboard;
