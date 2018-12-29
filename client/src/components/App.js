/*jshint esversion: 6 */

import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap';

import ReservationsRender from './ReservationsRender'
import ReservationForm from './ReservationForm'
import Register from './Register'
import Login from './Login'
import Confirmation from './Confirmation'
import NavBar from './NavBar'
import DriverList from './DriverList';



const cookies = new Cookies();
const setUserID = function(userID) {
  cookies.set('userID', userID, {path: '/'})
}
const setUserFirstName = function(userFirstName) {
  cookies.set('userFirstName', userFirstName, {path: '/'});
}
const setUserLastName = function(userLastName) {
  cookies.set('userLastName', userLastName, {path: '/'});
}
const setUserFullName = function(userFullName) {
  cookies.set('userFullName', userFullName, {path: '/'});
}

const getUserID = function() {
  return cookies.get('userID');
}
const getUserName = function() {
  return cookies.get('userFirstName');
}
const getUserLastName = function() {
  return cookies.get('userLastName');
}
const getUserFullName = function(){
  return cookies.get('userFullName');
}


const deleteUser = function() {
  cookies.remove('userID');
  cookies.remove('userFirstName');
  cookies.remove('userLastName');
  cookies.remove('userFullName');
}



class App extends Component {
    state = {
      loading: true,
    };
  componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    const { loading } = this.state;
    if(loading) {
      return (<div className="preload-title">
        Loading page...
      </div>)
    }
    return (
        <Router>
          <div className="App">
            <NavBar deleteUser={deleteUser} getUserName={getUserName} />
            <Container className="mainContainer">
              <Route exact path="/" render={() => <div> <div><DriverList/></div><ReservationForm getUserName={getUserName}/></div>}/>
              <Route path="/login" render={() => <Login setUserFullName={setUserFullName} setUserFirstName={setUserFirstName} setUserLastName={setUserLastName} setUserID={setUserID} getUserName={getUserName} getUserID={getUserID}/>} />
              <Route path="/register" render={() => <Register setUserFullName={setUserFullName} setUserFirstName={setUserFirstName} setUserLastName={setUserLastName} setUserID={setUserID} getUserID={getUserID}/>} />
              <Route path="/my-reservations" render={() => <ReservationsRender getUserID={getUserID} getUserFullName={getUserFullName}  getUserLastName={getUserLastName} getUserName={getUserName}/>} />
              <Route path="/confirmation" component={Confirmation}/>
            </Container>
          </div>
        </Router>
    );
  }
}
export default App;
